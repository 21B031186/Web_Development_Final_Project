import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  logged = false;
  constructor() { }

  ngOnInit(): void {
    this.loadUser();
  }
  loadUser(): void{
    const token = localStorage.getItem('token');
    console.log(token)
    if(token){

      this.logged = true;
    }
  }

  logOut():void{
    localStorage.removeItem('token');
    this.logged = false;
  }
}
