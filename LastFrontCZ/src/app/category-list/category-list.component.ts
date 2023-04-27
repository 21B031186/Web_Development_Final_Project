import { Component, OnInit } from '@angular/core';
import {Category, Events} from "../models";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {EventifyService} from "../eventify.service";
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  events!: Events[];
  // @ts-ignore
  // @Input showingCategory: number;
  constructor(private service: EventifyService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.getCategory();
  }
  getCategory(){
    this.route.paramMap.subscribe(params =>{
      const id = Number(params.get('id'));
      console.log(params)
      this.service.getCategory(id).subscribe(events =>{
        this.events = events;
        console.log(events)
      })
    })
  }
}
