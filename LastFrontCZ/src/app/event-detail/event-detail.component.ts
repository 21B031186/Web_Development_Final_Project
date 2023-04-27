import { Component, OnInit } from '@angular/core';
import {Category, Events} from "../models";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {EventifyService} from "../eventify.service";

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event!: Events;
  favorites!: Events[];
  constructor(private route: ActivatedRoute, private location: Location, private service: EventifyService) { }

  ngOnInit(): void {
    this.getEvent();
    this.getFavorites();
  }
  getFavorites(){
    this.service.getFavorites().subscribe(favorites =>{
      this.favorites = favorites;
      // console.log(favorites);
    })
  }
  getEvent() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.service.getEvent(id).subscribe((event) => {
        this.event = event;
      });
    });
  }

  share() {
    window.alert('The product has been shared!');
  }

  liked(event: Events) {

    if(!event.liked) {
      event.like += 1
    }
    else {
      event.like -= 1
    }

    event.liked = !event.liked
  }

  remove(event: Events) {
    event.removed = true;
  }

}
