import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInBasketComponent } from './item-in-basket.component';

describe('ItemInBasketComponent', () => {
  let component: ItemInBasketComponent;
  let fixture: ComponentFixture<ItemInBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemInBasketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemInBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
