import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../models";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {
  // @Input() product: Product  ;
  @Input() item !: Product
  @Output() remove = new EventEmitter();
  constructor(
  ) {}
  // @Input() items: IProduct[];
  // constructor(
  //   private http: HttpClient,
  //   private productsService: ProductsService
  // ) {}
  //
  // deleteItem(id: number, name: string) {
  //   this.http.delete(this.productsService.getURL() + `/${id}`).subscribe(() => {
  //     this.items = this.items.filter((x) => x.id !== id);
  //     alert(`${name} will be DELETED!`);
  //   });
  // }
  // @Input() product: Product;
// <img src="{{product.main_image}}" alt="">-->
//   <!--      <img src="assets/media/images/Products/Iphone14ProMax256GbPink.jpg" alt="">-->
//   <!--      <a href="">{{product.name}}</a>-->
// <!--      <div class="rating-in-stars">-->
// <!--        <ngb-rating [max]="5" [(rate)]="product.rating" [readonly]="true"></ngb-rating>-->
// <!--      </div>-->
// <!--      <div class="price">-->
// <!--        <p>Цена</p>-->
// <!--        <span>{{product.price}}</span>-->
// <!--      </div>-->
}
