import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-item-in-basket',
  templateUrl: './item-in-basket.component.html',
  styleUrls: ['./item-in-basket.component.css']
})
export class ItemInBasketComponent {
  @Input() item = {
    "id": "9603ae0a-9ba7-436b-8895-d9f3a3542771",
    "name": "Apple iPhone 14 Pro Max 256Gb фиолетовый",
    "description" : "harhdfsfjkgnfosnfsffnaskdfnosidfaosdfoasidfmosdfoiass",
    "price": 205,
    "rating": 4,
    "count" : 4,
    "main_image" : "sdf",
    "is_active" : true,
    "category" : "sd",
    "subCategory" : "sd"
  }
}
