import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  isManager: boolean | undefined;
  constructor() { }

  ngOnInit(): void {
    const u_type = localStorage.getItem('user_type');
    if (u_type == "Manager") this.isManager = true;
  }

}
