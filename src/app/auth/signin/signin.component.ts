import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
   email;
   password;
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

   signin(){
     this.auth.signin(this.email,this.password)

   }
}
