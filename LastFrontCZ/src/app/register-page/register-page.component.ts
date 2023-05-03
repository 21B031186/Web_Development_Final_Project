import { Component, OnInit } from '@angular/core';

import {RegisterService} from "../services/register.service";
import {nonAuthUser} from "../models";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  // users: nonAuthUser[] = []
  newUser: nonAuthUser;
  email : string ='';
  username : string='';
  password : string='';
  password2 : string='';

  ngOnInit(): void{ }
  constructor(private service: RegisterService, private router: Router) {
    this.newUser = {} as nonAuthUser;
  }

  createUser(){
    this.service.register(this.email, this.username, this.password, this.password2).subscribe((us) => {
      // this.users.push(us);
      // this.newUser = {} as User;
      this.router.navigate(['../login'])
    })
  }
}
