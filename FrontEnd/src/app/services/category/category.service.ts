import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category, Product} from "../../models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  BASE_URL = 'http://127.0.0.1:8000'

  constructor(private client: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.client.get<Category[]>(
      `${this.BASE_URL}/api/categories/`
    )
  }

  getProducts(category_id: number): Observable<Product[]> {
    return this.client.get<Product[]>(
      // "${this.BASE_URL}/api/categories/${category_id}/products/"
      `https://api.jsonserver.io/categories/${category_id}/products`
    )
  }

  // createCompany(companyName: string): Observable<Company> {
  //   return this.client.post<Company>(
  //     `${this.BASE_URL}/api/companies/`,
  //     {name: companyName}
  //   )
  // }

  getCategory(category_id: number): Observable<Category> {
    return this.client.get<Category>(
      `${this.BASE_URL}/api/categories/${category_id}`
    )
  }

  deleteCompany(company_id: number): Observable<any> {
    return this.client.delete(
      `${this.BASE_URL}/api/companies/${company_id}/`
    )
  }
}
