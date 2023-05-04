import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {AuthToken} from "../models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  BASE_URL = 'http://localhost:8000'


  constructor(private client: HttpClient) {
  }


  logIn(email: string, password: string): Observable<AuthToken> {
    return this.client.post<AuthToken>(
      `${this.BASE_URL}/api/token/`,
      {email, password}
    )
  }
}
