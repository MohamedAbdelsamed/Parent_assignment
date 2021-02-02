import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
// import { NavbarComponent } from '../shared/components/navbar/navbar.component';

@NgModule({
  declarations: [
    LoginComponent,
    // NavbarComponent 
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AuthModule { }

