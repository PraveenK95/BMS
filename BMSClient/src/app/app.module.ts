import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuardComponent } from './common/Guard/auth-guard/auth-guard.component';
import { NotfoundComponent } from './common/components/notfound/notfound.component';
import { LoginComponent } from './authetication/components/login/login.component';
import { RegistrationComponent } from './authetication/components/registration/registration.component';
import { ForgotPasswordComponent } from './authetication/components/forgot-password/forgot-password.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    AuthGuardComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
