import {delay, Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {ProductStock} from './product.stock';

@Injectable({
  providedIn: 'root'
})
export class ProductStockService {

  getAllProductStocks(): Observable<ProductStock[]> {
    return of([
      new ProductStock(1, 1, 6),
      new ProductStock(3, 1, 2),
      new ProductStock(4, 1, 12),
      new ProductStock(5, 1, 8),
      new ProductStock(7, 1, 1),
      new ProductStock(1, 2, 18),
      new ProductStock(2, 2, 15),
      new ProductStock(3, 2, 7),
      new ProductStock(4, 2, 4),
      new ProductStock(5, 2, 11),
      new ProductStock(6, 2, 1),
      new ProductStock(7, 2, 4),
      new ProductStock(8, 2, 14),
      new ProductStock(9, 2, 21),
      new ProductStock(1, 3, 2),
      new ProductStock(2, 3, 9),
      new ProductStock(3, 3, 17),
      new ProductStock(5, 3, 7),
      new ProductStock(6, 3, 2),
      new ProductStock(7, 3, 12),
      new ProductStock(9, 3, 2),
      new ProductStock(1, 4, 35),
      new ProductStock(2, 4, 27),
      new ProductStock(3, 4, 16),
      new ProductStock(4, 4, 19),
      new ProductStock(5, 4, 9),
      new ProductStock(6, 4, 2),
      new ProductStock(7, 4, 36),
      new ProductStock(8, 4, 23),
      new ProductStock(9, 4, 29),
      new ProductStock(1, 5, 1),
      new ProductStock(2, 5, 4),
      new ProductStock(4, 5, 3),
      new ProductStock(5, 5, 7),
      new ProductStock(8, 5, 2),
    ]).pipe(
      delay(750)
    );
  }
}
