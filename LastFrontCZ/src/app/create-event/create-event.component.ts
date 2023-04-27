import { Component, OnInit } from '@angular/core';
import {EventifyService} from "../eventify.service";
import {Category} from "../models";
import {CategoryPageComponent} from "../category-page/category-page.component"

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  title!: string;
  desc!: string;
  info!: string;
  photo!: string;
  category!: number;
  categories!: Category[];
  constructor(private service: EventifyService) {
  }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    this.service.getCategories().subscribe(categories =>{
      this.categories = categories;
      console.log(categories);
    })
  }
  createEvent(){
    this.service.createEvent(this.title, this.desc, this.info, this.photo, this.category).subscribe((res)=>{
      console.log(res);
    }, (err)=>{
      console.log(err);
      location.href = '../home'
    })
  }

}
