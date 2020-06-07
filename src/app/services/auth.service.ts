import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 email="niteshnapit19990@gmail.com"
 password="123456"
 isSignedIn=false

  constructor(public router:Router) { }

  signin(email,password){
    if(email==this.email && password==this.password){
      this.isSignedIn=true
      //alert("successfull")
        this.router.navigateByUrl("/home")

    }
    else{
      alert("incoreect email or password")
    }
  }

  logout(){
    console.log("inside logout")
    this.isSignedIn=false
    this.router.navigateByUrl("/auth")
  }
  isAuthenticated(){
    return this.isSignedIn
  }
}
