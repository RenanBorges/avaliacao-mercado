import { createAction, props } from '@ngrx/store';
import { ModelProduct } from 'src/app/models/product';

interface NewProductDTO {
  img: any;
  product: ModelProduct;
}

interface EditProductDTO extends NewProductDTO {
  id: string;
}

export const AddProduct = createAction(
  '[Product] Add Product',
  (product: NewProductDTO) => ({ product })
);

export const AddProductSuccess = createAction(
  '[Product] Add Product Sucess',
  props<any>()
);

export const EditProduct = createAction(
  '[Product] Edit Product',
  (product: EditProductDTO) => ({ product })
);

export const EditProductSuccess = createAction(
  '[Product] Edit Product success',
  props<any>()
);

export const GetProducts = createAction('[Product] Get Products');
export const GetProductsSuccess = createAction(
  '[Product] Get Products Success',
  props<any>()
);
