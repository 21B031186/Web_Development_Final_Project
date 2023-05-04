import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";
import {LoginData, MyJwtPayload, Token, User} from "../models";
import jwt_decode, { JwtPayload} from 'jwt-decode'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  user: User = {email: '', password: ''};
  loginError: boolean | undefined;
  constructor(private service: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginError = true;
  }

  // @ts-ignore
  login() {
    this.service.logIn(this.user.email, this.user.password).subscribe(
      (data) => {
        //const tok = respond['access']
          // console.log(tok)
          localStorage.setItem('token', data.access)
          const decoded: MyJwtPayload = jwt_decode(data.access);
          localStorage.setItem('id', String(decoded.user_id));
          localStorage.setItem('user_type', decoded.user_type)
        // this.router.navigate(['../home'])
          location.href = "../home"
      }
    )

  }

}
