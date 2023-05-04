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
  email: string = ""
  password: string = ""
  constructor(private service: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

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
        localStorage.setItem("token", tok.token);
        location.href = "../home";
      }
    )

  }

}
