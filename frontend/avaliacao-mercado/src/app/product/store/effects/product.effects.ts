import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaust, exhaustMap, map, switchMap } from 'rxjs/operators';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import * as ProductActions from '../action/product.actions';

@Injectable()
export class ProductEffects {
  imagePath: string = 'https://localhost:5001/images/';

  addproject = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.AddProduct),
      exhaustMap((action) =>
        this.productService
          .creatProduct(action.product.product, action.product.img)
          .pipe(
            map((p) => {
              return ProductActions.AddProductSuccess({
                product: { ...p, image: this.imagePath + p.image },
              });
            })
          )
      )
    )
  );

  editproject = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.EditProduct),
      exhaustMap((action) =>
        this.productService
          .editProduct(
            action.product.product,
            action.product.img,
            action.product.id
          )
          .pipe(
            map(() => {
              return ProductActions.EditProductSuccess({
                product: {
                  ...action.product.product,
                  image: action.product.product.fileSource,
                  id: action.product.id,
                },
              });
            })
          )
      )
    )
  );

  loadProjects = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.GetProducts),
      exhaustMap(() =>
        this.productService.getProducts().pipe(
          map((products: Product[]) => {
            const productsArray = products.map((p) => ({
              ...p,
              image: this.imagePath + p.image,
            }));
            return ProductActions.GetProductsSuccess({
              products: productsArray,
            });
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
