import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutheticationRoutingModule } from './authetication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    AutheticationRoutingModule
  ]
})
export class AutheticationModule { }
