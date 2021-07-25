import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Product } from '../models/product';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let storeStub: Partial<Store>;
  const products: Product[] = [
    { id: 1, name: 'test', price: 100, image: 'img', fileSource: 'img/src' },
    { id: 2, name: 'test2', price: 100, image: 'img', fileSource: 'img/src' },
    { id: 2, name: 'test3', price: 100, image: 'img', fileSource: 'img/src' },
  ];
  storeStub = {
    select(calledSector: any) {
      return of({ products: products });
    },
    dispatch(action: any) {
      of();
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ provide: Store, useValue: storeStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load products', () => {
    const compiled = fixture.debugElement;
    console.log(compiled.queryAll(By.css('.table tbody tr')).length);

    const compiled2 = fixture.nativeElement;
    console.log(compiled2.querySelectorAll('.table tbody tr'));
    expect(compiled.queryAll(By.css('.table tbody tr')).length).toBe(
      products.length
    );
  });
});
