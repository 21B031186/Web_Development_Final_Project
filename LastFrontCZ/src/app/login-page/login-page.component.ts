import { Component, OnInit } from '@angular/core';
import {EventifyService} from "../eventify.service";
import {LoginData, Token} from "../models";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  login: string = ""
  password: string = ""
  constructor(private service: EventifyService) { }

  ngOnInit(): void {
  }
  getToken() {
    let logData: LoginData = {
      username:this.login,
      password:this.password
    }
    let tok!: Token;
    this.service.getToken(logData).subscribe(
      token => {
        tok = token
        console.log(tok)
        localStorage.setItem("token", tok.token);
        location.href = "../home"
      }
    )

  }

}
