import { Component, OnInit } from '@angular/core';

import { RegisterService } from '../../services/register/register.service';
import {nonAuthUser} from "../../models";
import {ActivatedRoute, Router} from "@angular/router";

@Component({ templateUrl: 'registration-page.component.html' })
export class RegistrationPageComponent {

  loading = false;
  isCompany: boolean = false  ;
  submitted = false;
  firstName: string = '';
  lastName: string = '';
  username: string = '';
  password: string = '';
  companyName: string = '';

  // constructor(private registerService: RegisterService,
  //             private router: Router,
  // ) {
  //
  // }


  // isCompany = (<HTMLInputElement>document.getElementById("flexSwitchCheckDefault")).checked
  isItCompany(){
    console.log(this.isCompany)
    if((<HTMLInputElement>document.getElementById("flexSwitchCheckDefault")).checked){
      this.isCompany = true;
    }else{
      this.isCompany = false;
    }
  }


  // userRegistration() {
  //
  //   this.submitted = true;
  //   this.loading = true;
  //
  //   this.registerService.register(this.firstName, this.lastName, this.username, this.password).subscribe((data) => {
  //       // alert
  //       this.router.navigate(['../login'])
  //   });
  // }
}
