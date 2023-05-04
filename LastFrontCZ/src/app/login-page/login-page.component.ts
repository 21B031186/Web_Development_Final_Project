import { Component, OnInit } from '@angular/core';
//import {BackReturn, LoginData} from "../models";
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";
import {LoginData, Token} from "../models";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  undef : boolean | undefined;
  email: string = ""
  password: string = ""
  constructor(private service: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  // @ts-ignore
  getToken() {
    let logData: LoginData = {
      username: this.email,
      password: this.password
  }
    let tok!: Token
    console.log(this.email)
    console.log(this.password)
    this.service.getToken(logData).subscribe(
      (token) => {
        //const tok = respond['access']
          // console.log(tok)
          tok = token
          console.log(tok)
          if( typeof tok.token != "undefined"){
            localStorage.setItem("token", tok.token);
            location.href = "../home";
          }else{
            // @ts-ignore
            this.undef = true;
          }
      }
    )

  }

}
