import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthModule } from './auth.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],

})

// tslint:disable-next-line: component-class-suffix
export class AuthPage implements OnInit {

  form: FormGroup;

  constructor(private authService: AuthModule, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      password: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      })
    });
  }

  login() {
    if (this.form.invalid) {
      return;
    }

    this.authService.login(this.form.value);
    this.router.navigate(['/admin', 'products']);
  }
}
