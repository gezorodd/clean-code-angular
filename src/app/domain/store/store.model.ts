export class Store {
  readonly id: number;
  readonly location: string;
  readonly canDeliverOnline: boolean;
  readonly deliveryCosts: number;

  constructor(id: number, location: string, canDeliverOnline: boolean, deliveryCosts?: number) {
    this.id = id;
    this.location = location;
    this.canDeliverOnline = canDeliverOnline;
    this.deliveryCosts = deliveryCosts ?? 0;
  }
}
