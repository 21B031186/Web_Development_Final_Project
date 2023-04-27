import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {FavoritesPageComponent} from "./favorites-page/favorites-page.component";
import {EventDetailComponent} from "./event-detail/event-detail.component";
import {CategoryPageComponent} from "./category-page/category-page.component";
import {CategoryListComponent} from "./category-list/category-list.component";
import {CreateEventComponent} from "./create-event/create-event.component";

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'home/:id', component: EventDetailComponent},
  {path: 'favorites', component: FavoritesPageComponent},
  {path: 'category', component: CategoryPageComponent},
  {path: 'category/:id', component: CategoryListComponent},
  {path:'create', component: CreateEventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
