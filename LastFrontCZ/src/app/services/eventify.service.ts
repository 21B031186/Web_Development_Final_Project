import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Category, Events, LoginData} from "../models";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class EventifyService {
  httpOptions = {};
  BASE_URL="http://127.0.0.1:8000/event";
  constructor(private client: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      credentials: true
    };
  }
  getEvents():Observable<Events[]>{
    return this.client.get<Events[]>(`${this.BASE_URL}/home/`);
  }
  getEvent(event_id: number):Observable<Events>{
    return this.client.get<Events>(`${this.BASE_URL}/home/${event_id}/`);
  }
  deleteEvent(event_id: number):Observable<Events>{
    return this.client.delete<Events>(`${this.BASE_URL}/home/${event_id}/`);
  }
  updateEvent(event_id: number):Observable<Events>{
    return this.client.delete<Events>(`${this.BASE_URL}/home/${event_id}/`);
  }
  getCategories():Observable<Category[]>{
    return this.client.get<Category[]>(`${this.BASE_URL}/category/`);
  }
  getCategory(id:number):Observable<Events[]>{
    return this.client.get<Events[]>(`${this.BASE_URL}/category/${id}/`);
  }
  getFavorites():Observable<Events[]>{
    return this.client.get<Events[]>(`${this.BASE_URL}/favorites`);
  }
  createEvent(title: string,
              desc: string,
              info: string,
              photo: string,
              category: number,
              ): Observable<any> {
    return this.client.post<any>(
      `${this.BASE_URL}/home/`, JSON.stringify({
        "title":title,
        "desc": desc,
        "info": info,
        "photo": photo,
        "category": category,
      }), this.httpOptions
    );
  }
}
