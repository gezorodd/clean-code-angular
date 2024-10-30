export class ProductItem {
  readonly description: string;
  readonly imageUrl: string;
  readonly price: number;
  readonly stockAvailability: StockAvailability;
  readonly deliveryCosts: number;

  constructor(description: string, imageUrl: string, price: number, stockAvailability: StockAvailability, deliveryCosts: number) {
    this.description = description;
    this.imageUrl = imageUrl;
    this.price = price;
    this.stockAvailability = stockAvailability;
    this.deliveryCosts = deliveryCosts;
  }
}

export type StockAvailability = 'in-stock' | 'low-stock' | 'out-of-stock';