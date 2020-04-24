import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { OptionsComponent } from './options/options.component';
import { MyproductsComponent } from './myproducts/myproducts.component';
import { FeedComponent } from './feed/feed.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    OptionsComponent,
    MyproductsComponent,
    FeedComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  exports: [
    ModalModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
