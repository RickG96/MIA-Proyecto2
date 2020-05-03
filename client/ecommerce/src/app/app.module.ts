import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { ServiciosService } from './servicios.service';
import { FormsModule } from '@angular/forms';

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
import { DepartamentComponent } from './departament/departament.component';
import { UsersComponent } from './users/users.component';
import { HeaderbComponent } from './headerb/headerb.component';
import { AddcarComponent } from './addcar/addcar.component';
import { DeniedComponent } from './denied/denied.component';
import { ReportsComponent } from './reports/reports.component';

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
    DepartamentComponent,
    UsersComponent,
    HeaderbComponent,
    AddcarComponent,
    DeniedComponent,
    ReportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
  ],
  providers: [ServiciosService],
  exports: [
    ModalModule,
    BsDropdownModule,
    TooltipModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
