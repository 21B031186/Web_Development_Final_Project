import { Injectable } from '@angular/core';
import { nonAuthUser } from '../../models';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  BASE_URL = 'http://localhost:8000'
  register(firstName: string, lastName: string, username: string, password: string) {
    return this.http.post(`${this.BASE_URL}/api/register`, {
      firstName,
      lastName,
      username,
      password
    });
  }
  registerOfCompany(firstName: string, lastName: string, username: string, password: string, companyName: string) {
    return this.http.post(`${this.BASE_URL}/api/register`, {
      firstName,
      lastName,
      username,
      password,
      companyName
    });
  }
  constructor(private http: HttpClient) { }
}
