import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromProduct from '../product/store/reducer/product.reducer';

export interface State {
  products: fromProduct.ProductState;
}

export const reducers: ActionReducerMap<State> = {
  products: fromProduct.reducer,
};

export const getProductState =
  createFeatureSelector<fromProduct.ProductState>('products');
export const getProducts = createSelector(
  getProductState,
  fromProduct.getProducts
);

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}
