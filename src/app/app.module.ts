import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { HomeComponent } from './home/home.component';
import { ManageExpencesComponent } from './home/manage-expences/manage-expences.component';
import { AddExpenceComponent } from './home/manage-expences/add-expence/add-expence.component';
import { EditExpenceComponent } from './home/manage-expences/edit-expence/edit-expence.component';
import { AllExpenceComponent } from './home/manage-expences/all-expence/all-expence.component';
import { ManageCategoriesComponent } from './home/manage-categories/manage-categories.component';
import { AddCategoryComponent } from './home/manage-categories/add-category/add-category.component';
import { AllCategoryComponent } from './home/manage-categories/all-category/all-category.component';
import { ExpenceSummaryComponent } from './home/expence-summary/expence-summary.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { from } from 'rxjs';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HomeNavbarComponent } from './shared/home-navbar/home-navbar.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    ResetPasswordComponent,
    HomeComponent,
    ManageExpencesComponent,
    AddExpenceComponent,
    EditExpenceComponent,
    AllExpenceComponent,
    ManageCategoriesComponent,
    AddCategoryComponent,
    AllCategoryComponent,
    ExpenceSummaryComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    HomeNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
