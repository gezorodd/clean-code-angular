export class ProductItem {
  readonly description: string;
  readonly imageUrl: string;
  readonly price: number;
  readonly totalQuantity: number;
  readonly deliveryCosts?: number;

  constructor(description: string, imageUrl: string, price: number, totalQuantity: number, deliveryCosts?: number) {
    this.description = description;
    this.imageUrl = imageUrl;
    this.price = price;
    this.totalQuantity = totalQuantity;
    this.deliveryCosts = deliveryCosts;
  }

  get stockAvailability(): StockAvailability {
    if (this.totalQuantity === 0) {
      return 'out-of-stock';
    } else if (this.totalQuantity <= 10) {
      return 'low-stock';
    } else {
      return 'in-stock';
    }
  }
}

type StockAvailability = 'in-stock' | 'low-stock' | 'out-of-stock';
