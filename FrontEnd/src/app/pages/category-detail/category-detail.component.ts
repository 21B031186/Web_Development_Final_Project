import {Component, ElementRef, OnInit} from '@angular/core';
import {Category, Product} from "../../models";
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../../services/category/category.service";

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
// name = models.CharField(max_length=255, verbose_name='Name', unique=True)
// main_image = models.ImageField(upload_to='images/%Y/%m/%d', null=True, blank=True, verbose_name='Main Image')
// is_active = models.BooleanField(default=True, verbose_name='Is Active?')
// price = models.FloatField(verbose_name='Price')
// description = models.TextField(null=True, verbose_name='Description')
// count = models.IntegerField(default=0, verbose_name='Quantity')
// rating = models.FloatField(null=True, validators=[validate_rating])
// category
export class CategoryDetailComponent implements OnInit{

  category = {
    name: 'Телефоны'
  }
  r1 = 1;
  r2 = 2;
  r3 = 3;
  r4 = 4;
  r5 = 5;
  currentCategory: string = "Овощи и фрукты";
  // products: Product[] = [];
  // category : Category;


  // constructor(private categoryService: CategoryService, private route : ActivatedRoute) {
  //   // this.category = {} as Category
  //
  // }
  constructor(private elRef: ElementRef) {
  }
  //
  ngOnInit() {
    const myDiv = document.querySelectorAll('.currentCategory');
    console.log(myDiv)
    // @ts-ignore
    for(let div of myDiv){
      // console.log(div)
      if (div.innerText === this.currentCategory) {
        div.style.color = 'black';
        div.style.fontWeight = 'bold';
      }
    }

    // console.log(myDiv)
    // this.route.paramMap.subscribe((params) =>{
    //   const id = Number(params.get('id'));
    //   this.categoryService.getCategory(id).subscribe((category) =>{
    //     this.category = category
    //   })
    //   this.categoryService.getProducts(id).subscribe((products) => {
    //     this.products = products;
    //   });
    // })

  }

}
