import { Component } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  isEmpty : boolean = true;
  products = [
    {
      "id": "68c270cb-9660-45bd-8b02-0140ed6a4745",
      "name": "Apple iPhone 14 Pro Max 256Gb фиолетовый",
      "description" : "harhdfsfjkgnfosnfsffnaskdfnosidfaosdfoasidfmosdfoiass",
      "price": 707,
      "rating": 4,
      "count" : 4,
      "main_image" : "sdf",
      "is_active" : true,
      "category" : "sd",
      "subCategory" : "sd"
    },

    {
      "id": "a45eb5d5-d21b-4c14-8511-6934ee84936c",
      "name": "Apple iPhone 14 Pro Max 256Gb фиолетовый",
      "description" : "harhdfsfjkgnfosnfsffnaskdfnosidfaosdfoasidfmosdfoiass",
      "price": 520,
      "rating": 3,
      "count" : 4,
      "main_image" : "sdf",
      "is_active" : true,
      "category" : "sd",
      "subCategory" : "sd"
    },
    {
      "id": "a45eb5d5-d21b-4c14-8511-6934ee84936c",
      "name": "Apple iPhone 14 Pro Max 256Gb фиолетовый",
      "description" : "harhdfsfjkgnfosnfsffnaskdfnosidfaosdfoasidfmosdfoiass",
      "price": 520,
      "rating": 3,
      "count" : 4,
      "main_image" : "sdf",
      "is_active" : true,
      "category" : "sd",
      "subCategory" : "sd"
    }
    ]

}
