export class Product {
  readonly id: number;
  readonly description: string;
  readonly imageUrl: string;
  readonly price: number;

  constructor(id: number, description: string, imageUrl: string, price: number) {
    this.id = id;
    this.description = description;
    this.imageUrl = imageUrl;
    this.price = price;
  }
}
