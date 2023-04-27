import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {RegistrationPageComponent} from "./pages/registration-page/registration-page.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {CategoriesSliderComponent} from "./components/categories-slider/categories-slider.component";
import {CategoryDetailComponent} from "./pages/category-detail/category-detail.component";
import {ItemCartComponent} from "./pages/item-cart/item-cart.component";
import {BasketComponent} from "./pages/basket/basket.component";

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'registration', component: RegistrationPageComponent},
  {path: 'shop', component: HomePageComponent},
  {path: 'category', component: CategoryDetailComponent},
  {path: 'item', component: ItemCartComponent},
  {path: 'basket', component: BasketComponent}
  // {path: 'slider', component: CategoriesSliderComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
