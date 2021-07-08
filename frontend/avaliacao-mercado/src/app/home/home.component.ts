import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers/index';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as ProductActions from '../product/store/action/product.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private readonly store: Store
  ) {
    this.getProdutsWithStore();
  }
  imagePath: string = 'https://localhost:5001/images/';
  storeProducts: Product[] | null = null;
  ngOnInit(): void {
    this.getProdutsWithStore();
    if (this.storeProducts == null) {
      this.store.dispatch(ProductActions.GetProducts());
      this.getProdutsWithStore();
    }
  }

  getProdutsWithStore() {
    this.store
      .select(fromRoot.getProducts)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => (this.storeProducts = data.products));
  }

  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
