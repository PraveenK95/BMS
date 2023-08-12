import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './common/components/notfound/notfound.component';
import { LoginComponent } from './authetication/components/login/login.component';
import { ForgotPasswordComponent } from './authetication/components/forgot-password/forgot-password.component';
import { RegistrationComponent } from './authetication/components/registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path:'login',
    component:LoginComponent
    // loadChildren:()=>import('./authetication/authetication.module').then(m=>m.AutheticationModule)
  },
  {
    path:'forgot-password',
    component:ForgotPasswordComponent
  },
  {
   path:'registration',
   component:RegistrationComponent
  },
  {
    path:'**',
    component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
