import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthPage } from './auth.page';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AuthPage
  },
];

@NgModule({
  declarations: [AuthPage],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})

export class AuthModule {

}
