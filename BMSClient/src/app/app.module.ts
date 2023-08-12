import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuardComponent } from './common/Guard/auth-guard/auth-guard.component';
import { NotfoundComponent } from './common/components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    AuthGuardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
