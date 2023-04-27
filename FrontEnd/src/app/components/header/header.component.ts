import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  right: boolean ;
  isUser : boolean = true;
  constructor() {
    this.right = true
  }

  ngOnInit(): void {
    this.on();
  }
  on(){
    this.right = true
  }
}
