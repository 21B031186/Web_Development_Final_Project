import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {AuthToken} from "../../models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  BASE_URL = 'http://localhost:8000'
  static logged: boolean = false;

  constructor(private client: HttpClient) {
  }

  login(username: string, password: string): Observable<AuthToken> {
    return this.client.post<AuthToken>(
      `${this.BASE_URL}/api/login/`,
      {username, password}
    )
  }


}
