import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs";
import { LoginService } from "../../services/login/login.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent  {


  username: string = '';
  password: string = '';

  // constructor(private loginService: LoginService) {
  // }

  ngOnInit() {
    // const token = localStorage.getItem('token');
    // if (token) {
    //   LoginService.logged = true;
    // }
  }
  // login() {
  //   this.loginService.login(this.username, this.password).subscribe((data) => {
  //     localStorage.setItem('token', data.token);
  //     LoginService.logged = true;
  //     this.username = '';
  //     this.password = '';
  //   });
  // }
  //
  // logout() {
  //   localStorage.removeItem('token');
  //   // Request to the Django
  //   this.logged = false;
  // }

}
