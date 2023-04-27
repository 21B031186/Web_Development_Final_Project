import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListInCategoryDetailComponent } from './product-list-in-category-detail.component';

describe('ProductListInCategoryDetailComponent', () => {
  let component: ProductListInCategoryDetailComponent;
  let fixture: ComponentFixture<ProductListInCategoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListInCategoryDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListInCategoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
