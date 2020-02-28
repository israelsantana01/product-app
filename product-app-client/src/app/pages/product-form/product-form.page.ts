import { ProductsService } from '../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../../models/products.model';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.page.html',
  styleUrls: ['./product-form.page.scss']
})

// tslint:disable-next-line: component-class-suffix
export class ProductFormPage implements OnInit {

  form: FormGroup;
  editMode = false;
  product: Product;
  selectedImage: File;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
        this.editMode = true;

        this.productService.getProduct(paramMap.get('id')).subscribe(product => {
          this.product = product;
          this.initForm();
        });
      } else {
        this.initForm();
      }
    });
  }

  initForm() {
    this.form = new FormGroup({
      barcode: new FormControl(this.product ? this.product.barcode : null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.pattern('^(0|[0-9][0-9]*)$'), Validators.minLength(13)]
      }),
      description: new FormControl(this.product ? this.product.description : null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      price: new FormControl(this.product ? this.product.price : null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]
      }),
      image: new FormControl(null, {
        updateOn: 'change',
        validators: this.product ? [] : [Validators.required]
      })
    });
  }

  onFileChanged(event: Event) {
    this.selectedImage = (event.target as HTMLInputElement).files[0];
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const value: Product = {
      id: this.product ? this.product.id : null,
      imageUrl: this.product ? this.product.imageUrl : null,
      ...this.form.value
    };

    console.log(value);

    this.productService.addProduct(value, this.selectedImage).subscribe(product => {
      this.router.navigate(['/admin', 'products']);

      if (!this.editMode) {
        this.openSnackBar('Added successfully', 'Undo', product);
      }

    });
  }


  openSnackBar(message: string, action: string, product: Product) {
    const snackBarRef = this.snackBar.open(message, action, { duration: 4000 });

    snackBarRef.onAction().subscribe(() => {
      this.productService.deleteProduct(product.id).subscribe();
    });

  }

}
