import { Injectable } from '@angular/core';
import {HttpClient}  from "@angular/common/http";
import {nonAuthUser} from "../models";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  BASE_URL = 'http://localhost:8000'
  register(email: string, username: string, password: string, password2: string){
    return this.http.post(`${this.BASE_URL}/account/register`, {
      email,
      username,
      password,
      password2
    });
  }
  constructor(private http: HttpClient) { }
}
