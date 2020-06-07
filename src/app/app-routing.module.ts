import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';


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
  {path:'home',component:HomeComponent},
  {path:'',redirectTo: '/home',pathMatch: 'full'},
  {path:'**',component:AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
