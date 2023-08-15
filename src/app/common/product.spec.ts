import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    const emptyProduct = Product.createEmpty();
    expect(emptyProduct).toBeTruthy();
  });
});
