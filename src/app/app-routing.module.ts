import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ManageExpencesComponent } from './home/manage-expences/manage-expences.component';
import { ManageCategoriesComponent } from './home/manage-categories/manage-categories.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { AllCategoryComponent } from './home/manage-categories/all-category/all-category.component';
import { AddCategoryComponent } from './home/manage-categories/add-category/add-category.component';
import { EditCategoryComponent } from './home/manage-categories/edit-category/edit-category.component';


const routes: Routes = [
  {path:'auth',
  component:AuthComponent,
  children:[
    {path:'',component:SigninComponent},
    {path:'signin',component:SigninComponent},
    {path:'signup',component:SignupComponent},
    {path:'reset-password',component:ResetPasswordComponent}
  ]

},
  {path:'home',component:HomeComponent,
   children:[
     {path:'',component:DashboardComponent},
     {path:'dashboard',component:DashboardComponent},
     {path:'manage-expence',component:ManageExpencesComponent},
     {path:'manage-category',component:ManageCategoriesComponent,children:[
       {path:'',component:AllCategoryComponent},
       {path:'add-category',component:AddCategoryComponent},
       {path:'edit-category:id',component:EditCategoryComponent}
     ]}
   ]},
  {path:'',redirectTo: '/home',pathMatch: 'full'},
  {path:'**',component:AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
