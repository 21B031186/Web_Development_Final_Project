import { Component } from '@angular/core';

@Component({
  selector: 'app-categories-slider',
  templateUrl: './categories-slider.component.html',
  styleUrls: ['./categories-slider.component.css']
})
export class CategoriesSliderComponent {
  slides: { img: string; name: string }[] = [
    { name: "Телефоны и гаджеты", img: "./assets/media/images/category-images/phones.png" },
    { name: "Бытовая техника", img: "./assets/media/images/category-images/appliances.png" },
    { name: "Компьютеры", img: "./assets/media/images/category-images/computers.png" },
    { name: "Продукты питания", img: "./assets/media/images/category-images/foods.png" },
    { name: "Мебель", img: "./assets/media/images/category-images/furnitures.png" },
    { name: "Гаджеты", img: "./assets/media/images/category-images/phones.png" },
    { name: "ТВ, Аудио", img: "./assets/media/images/category-images/tv.png" },
    // { img: "./assets/media/images/category-images/" },
    // { img: "./assets/media/images/category-images/" },
  ];
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

  constructor() {}
  ngOnInit(): void {}
}
