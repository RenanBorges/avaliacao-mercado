import { Action, createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/models/product';
import * as ProductActions from '../action/product.actions';

export const productFeatureKey = 'product';

export interface ProductState {
  products: Product[] | null;
}

export const initialState: ProductState = {
  products: null,
};

export const reducer = createReducer(
  initialState,
  on(ProductActions.GetProducts, (state) => ({ ...state })),
  on(ProductActions.GetProductsSuccess, (state, results) => ({
    products: results.products,
  })),

  on(ProductActions.AddProduct, (state) => ({ ...state })),
  on(ProductActions.AddProductSuccess, (state, results) => {
    if (results.product.id) {
      return {
        ...state,
        products: [...(state.products ?? []), results.product],
      };
    } else return { ...state };
  }),

  on(ProductActions.EditProduct, (state) => ({ ...state })),
  on(ProductActions.EditProductSuccess, (state, results) => {
    if (state.products) {
      let productIndex = state.products?.findIndex(
        (p) => p.id === results.product.id
      );
      let updatedState = [...state.products];
      updatedState[productIndex] = {
        ...results.product,
        id: results.product.id,
      };
      return {
        ...state,
        products: [...updatedState],
      };
    } else return { ...state };
  })
);

export const getProducts = (state: ProductState) => {
  return {
    products: state.products,
  };
};
