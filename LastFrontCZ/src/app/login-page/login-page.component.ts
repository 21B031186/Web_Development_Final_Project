import { Component, OnInit } from '@angular/core';
import {BackReturn, LoginData} from "../models";
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";
import {Token} from "@angular/compiler";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username: string = ""
  password: string = ""
  constructor(private service: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(): void {
    let tok!: BackReturn
    console.log(this.username)
    console.log(this.password)
    this.service.login(this.username, this.password).subscribe(
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
