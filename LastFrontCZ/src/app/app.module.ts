import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthInterceptor} from "./auth.interceptor";
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CreateEventComponent } from './create-event/create-event.component';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavigationBarComponent,
    HomePageComponent,
    FavoritesPageComponent,
    LoginPageComponent,
    EventDetailComponent,
    CategoryPageComponent,
    CategoryListComponent,
    CreateEventComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
