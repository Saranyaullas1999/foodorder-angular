import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { RouterModule,Routes } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';


const appRoutes:Routes=[
  {
    path:"",component:IndexComponent
  },
  {
    path:"food",component:FoodComponent
  },
  {
    path:"contact",component:ContactComponent
  },
  {
    path:"login",component:LoginComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    FoodComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
