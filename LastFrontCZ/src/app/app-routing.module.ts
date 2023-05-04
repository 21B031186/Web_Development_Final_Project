import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {FavoritesPageComponent} from "./favorites-page/favorites-page.component";
import {EventDetailComponent} from "./event-detail/event-detail.component";
import {CategoryPageComponent} from "./category-page/category-page.component";
import {CategoryListComponent} from "./category-list/category-list.component";
import {CreateEventComponent} from "./create-event/create-event.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {DeleteUserComponent} from "./delete-user/delete-user.component";
import {CreateCategoryComponent} from "./create-category/create-category.component";

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'home/:id', component: EventDetailComponent},
  {path: 'favorites', component: FavoritesPageComponent},
  {path: 'category', component: CategoryPageComponent},
  {path: 'category/:id', component: CategoryListComponent},
  {path:'create', component: CreateEventComponent},
  {path: 'signup', component: RegisterPageComponent},
  //manager add
  {path: 'deleteUser', component: DeleteUserComponent},
  {path: 'createCategory', component: CreateCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
