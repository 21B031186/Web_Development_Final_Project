import { Component, OnInit } from '@angular/core';
import {Category} from "../models";
import {EventifyService} from "../eventify.service";
@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
  categories!: Category[];
  constructor(private service: EventifyService) {}

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    this.service.getCategories().subscribe(categories =>{
      this.categories = categories;
      console.log(categories);
    })
  }

}
