import { Component, OnInit } from '@angular/core';
import {Category, Events} from "../models";
import {EventifyService} from "../eventify.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  events!: Events[];
  constructor(private service: EventifyService) { }

  ngOnInit(): void {
    this.getEvents();
  }
  getEvents(){
    this.service.getEvents().subscribe(events => {
      this.events = events;
      console.log(events);
    })
  }
}
