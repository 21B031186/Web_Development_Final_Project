import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models";


@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.css']
})
export class ItemCartComponent implements OnInit{
  // @Input() item !: Product;
  mainImage : string = "assets/media/images/Products/Iphone14ProMax256GbPink.jpg"
  item = {
    "id": "a45eb5d5-d21b-4c14-8511-6934ee84936c",
    "name": "Apple iPhone 14 Pro Max 256Gb фиолетовый",
    "description" : "- технология NFC: Да_\n" +
      "- цвет: черный_\n" +
      "- тип экрана: OLED, Super Retina XDR_\n" +
      "- диагональ: 6.1 дюйм_\n" +
      "- размер оперативной памяти: 4 ГБ_\n" +
      "- процессор: 6-ядерный Apple A15 Bionic_\n" +
      "- объем встроенной памяти: 128 ГБ_\n" +
      "- емкость аккумулятора: 3095 мАч_",
    "price": 520,
    "rating": 3,
    "count" : 4,
    "main_image" : "sdf",
    "is_active" : true,
    "category" : "sd",
    "subCategory" : "sd"
  }
  ngOnInit(): void {
    this.item.description = this.item.description.replace(/_/g, '<br>');
  }

  changeMainImage(event: any){
    // this.mainImage = img;
    const imageSrc = event.target.src;
    // event.target.style.border = "1px solid blue"
    if(event.target.src == this.mainImage){
    }
    // event.style.border = "1px solid blue"
    this.mainImage = imageSrc;
  }
}
