export class ProductStock {
  readonly productId: number;
  readonly storeId: number;
  readonly quantity: number;

  constructor(productId: number, storeId: number, quantity: number) {
    this.productId = productId;
    this.storeId = storeId;
    this.quantity = quantity;
  }
}
