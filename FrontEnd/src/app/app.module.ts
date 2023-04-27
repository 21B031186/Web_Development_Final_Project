import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import { HeaderButtonsComponent } from './components/header-buttons/header-buttons.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginPageComponent } from './pages/login-page/login-page.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AuthInterceptor} from "./AuthInterceptor";
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { CategoriesNavComponent } from './components/categories-nav/categories-nav.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoriesSliderComponent } from './components/categories-slider/categories-slider.component';
import { HomePageFooterComponent } from './components/home-page-footer/home-page-footer.component';
import { CategoryDetailComponent } from './pages/category-detail/category-detail.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ProductListInCategoryDetailComponent } from './components/product-list-in-category-detail/product-list-in-category-detail.component';
import { ItemCartComponent } from './pages/item-cart/item-cart.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { BasketComponent } from './pages/basket/basket.component';
import { ItemInBasketComponent } from './components/item-in-basket/item-in-basket.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderButtonsComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    CategoriesNavComponent,
    HomePageComponent,
    CategoriesSliderComponent,
    HomePageFooterComponent,
    CategoryDetailComponent,
    ItemDetailComponent,
    ProductListInCategoryDetailComponent,
    ItemCartComponent,
    HeaderMenuComponent,
    BasketComponent,
    ItemInBasketComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SlickCarouselModule,
    NgbModule
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
