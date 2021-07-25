import * as fromProduct from './product.actions';

describe('loadProducts', () => {
  it('should return an action', () => {
    expect(fromProduct.GetProducts().type).toBe('[Product] Get Products');
  });
});
