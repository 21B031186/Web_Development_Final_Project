import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
//import {BackReturn, LoginData} from "../models";
import {Observable} from "rxjs";
import {LoginData, Token} from "../models";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BASE_URL="http://localhost:8000";
  constructor(private client: HttpClient) { }

  getToken(login: LoginData): Observable<Token> {

    return this.client.post<Token>(
      `${this.BASE_URL}/account/login`,
        login
    );
  }

}
