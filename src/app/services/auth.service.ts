import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 email="niteshnapit19990@gmail.com"
 password="123456"
 isSignedIn=false

  constructor() { }

  signin(email,password){
    if(email==this.email && password==this.password){
      this.isSignedIn=true
      alert("successfull")

    }
    else{
      alert("incoreect email or password")
    }
  }

  logout(){
    this.isSignedIn=false
  }
  isAuthenticated(){
    return this.isSignedIn
  }
}
