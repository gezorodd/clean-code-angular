import {Injectable} from '@angular/core';
import {ProductService} from '../../domain/product/product.service';
import {StoreService} from '../../domain/store/store.service';
import {ProductStockService} from '../../domain/product-stock/product-stock.service';
import {combineLatest, map, Observable} from 'rxjs';
import {ProductItem} from './product-item/product-item.model';
import {Product} from '../../domain/product/product.model';
import {Store} from '../../domain/store/store.model';
import {ProductStock} from '../../domain/product-stock/product.stock';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private productService: ProductService, private storeService: StoreService,
              private productStockService: ProductStockService) {
  }

  getAllProductItems(): Observable<ProductItem[]> {
    const observable: Observable<[Product[], Store[], ProductStock[]]> = combineLatest([
      this.productService.getAllProducts(),
      this.storeService.getAllStores(),
      this.productStockService.getAllProductStocks()
    ]);
    return observable.pipe(
      map(([products, stores, productStocks]) =>
        this.createProductItems(products, stores, productStocks)
      )
    );
  }

  private createProductItems(products: Product[], stores: Store[], productStocks: ProductStock[]): ProductItem[] {
    const productTotalQuantity = new Map<number, number>();
    const productMinDeliveryCosts = new Map<number, number>();
    productStocks.forEach(productStock => {
      const store = stores.find(store => store.id === productStock.storeId);
      if (!store || !store.canDeliverOnline) {
        return;
      }
      const productId = productStock.productId;
      const currentQuantity = productTotalQuantity.get(productId) ?? 0;
      productTotalQuantity.set(productId, currentQuantity + productStock.quantity);
      const currentMinDeliveryCost = productMinDeliveryCosts.get(productId) ?? Number.MAX_VALUE;
      productMinDeliveryCosts.set(productId, Math.min(currentMinDeliveryCost, store.deliveryCosts));
    });

    return products.map(product => {
      const totalQuantity = productTotalQuantity.get(product.id) ?? 0;
      const deliveryCosts = productMinDeliveryCosts.get(product.id);
      return new ProductItem(product.description, product.imageUrl, product.price, totalQuantity, deliveryCosts);
    });
  }
}
