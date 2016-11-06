import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesService } from './services/categories.service';
import { CategoryComponent } from './pages/category/category.component';
import { AccountService } from './services/account.service';
import { LoginComponent } from './pages/login/login.component';
import { RatingModule } from 'ng2-rating';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CategoryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RatingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'categories/:id', component: CategoryComponent },
      { path: 'login', component: LoginComponent, data: { login: true } },
      { path: 'logout', component: LoginComponent, data: { login: false } },
    ])
  ],
  providers: [
      CategoriesService,
      AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
