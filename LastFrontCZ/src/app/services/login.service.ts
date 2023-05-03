import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BackReturn, LoginData} from "../models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BASE_URL="http://127.0.0.1:8000";
  constructor(private client: HttpClient) { }

  login(username: string, password: string): Observable<BackReturn> {

    return this.client.post<BackReturn>(
      `${this.BASE_URL}/account/login`,{
        username,
        password
      }
    );
  }

}
