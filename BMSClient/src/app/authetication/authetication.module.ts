import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutheticationRoutingModule } from './authetication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AutheticationRoutingModule
  ]
})
export class AutheticationModule { }
