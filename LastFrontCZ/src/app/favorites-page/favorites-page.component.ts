import { Component, OnInit } from '@angular/core';
import {Category, Events} from "../models";
import {EventifyService} from "../eventify.service";

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {
  events!: Events[];
  favorites!: Events[];
  constructor(private service: EventifyService) { }

  ngOnInit(): void {
    this.getEvents();
    this.getFavorites();
  }
  getEvents(){
    this.service.getEvents().subscribe(events => {
      this.events = events;
      console.log(events);
    })
  }
  getFavorites(){
    this.service.getFavorites().subscribe(favorites =>{
      this.favorites = favorites;
      // console.log(favorites);
    })
  }
}
