import { Component, OnInit } from '@angular/core';
import {EventifyService} from "../eventify.service";

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
  company!: string;
  constructor(private service: EventifyService) { }

  ngOnInit(): void {

  }
  createEvent(){
    this.service.createEvent(this.title, this.desc, this.info, this.photo, this.category, this.company).subscribe((res)=>{
      console.log(res);
    }, (err)=>{
      console.log(err);
      location.href = '../home'
    })
  }

}
