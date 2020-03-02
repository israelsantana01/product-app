import { OnInit, Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/products.model';

@Component({
    selector: 'app-explore',
    templateUrl: './explore.page.html',
    styleUrls: ['./explore.page.scss']
})

export class ExplorePage implements OnInit {

    sections: Product[][] = [];

    constructor(
        private productsService: ProductsService
    ) { }

    ngOnInit() {
        this.productsService.fetchProducts().subscribe(data => {
            this.sections.push(data.slice(0, data.length / 2));
            this.sections.push(data.slice(data.length / 2, data.length))
        });
    }
}