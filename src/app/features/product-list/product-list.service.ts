import {Injectable} from '@angular/core';
import {StoreService} from "../../domain/store/store.service";
import {ProductService} from "../../domain/product/product.service";
import {ProductStockService} from "../../domain/product-stock/product-stock.service";
import {combineLatest, map, Observable} from "rxjs";
import {Store} from "../../domain/store/store.model";
import {Product} from "../../domain/product/product.model";
import {ProductStock} from "../../domain/product-stock/product.stock";
import {ProductItem, StockAvailability} from "./product-item/product-item.model";

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private storeService: StoreService, private productService: ProductService,
              private productStockService: ProductStockService) {
  }

  getProductItems(): Observable<ProductItem[]> {
    const combined$ = combineLatest<[Store[], Product[], ProductStock[]]>([
      this.storeService.getAllStores(),
      this.productService.getAllProducts(),
      this.productStockService.getAllProductStocks()
    ]);
    return combined$.pipe(
      map(([stores, products, productStocks]) =>
        this.createProductItems(products, stores, productStocks)
      )
    );
  }

  private createProductItems(products: Product[], stores: Store[], productStocks: ProductStock[]): ProductItem[] {
    return products.map((product: Product) => {
      const relevantStoreQuantities = this.computeRelevantStoreQuantities(productStocks, product, stores);
      const stockAvailability = this.computeStockStatus(relevantStoreQuantities);
      const deliveryCost = this.computeDeliveryCost(relevantStoreQuantities);
      return new ProductItem(product.description, product.imageUrl, product.price, stockAvailability, deliveryCost);
    });
  }

  private computeRelevantStoreQuantities(productStocks: ProductStock[], product: Product, stores: Store[]): StoreQuantity[] {
    return productStocks
      .filter(productStock => productStock.productId === product.id)
      .map(productStock => {
        const store = stores.find(store => store.id === productStock.storeId);
        if (store?.canDeliverOnline) {
          return {
            store,
            quantity: productStock.quantity
          };
        }
        return undefined;
      })
      .filter(storeQuantity => !!storeQuantity)
      .map(storeQuantity => storeQuantity as StoreQuantity);
  }

  private computeStockStatus(relevantStoreQuantities: StoreQuantity[]): StockAvailability {
    const totalQuantity = relevantStoreQuantities
      .map(storeQuantity => storeQuantity.quantity)
      .reduce((q1, q2) => q1 + q2, 0);
    return this.computeStockAvailability(totalQuantity);
  }

  private computeStockAvailability(totalQuantity: number): StockAvailability {
    if (totalQuantity === 0) {
      return 'out-of-stock';
    } else if (totalQuantity <= 10) {
      return 'low-stock';
    } else {
      return 'in-stock';
    }
  }

  private computeDeliveryCost(relevantStoreQuantities: StoreQuantity[]): number {
    let deliveryCost = 0;
    const deliveryCostArray = relevantStoreQuantities
      .map(storeQuantity => storeQuantity.store.deliveryCosts);
    if (deliveryCostArray.length > 0) {
      deliveryCost = deliveryCostArray
        .reduce((c1, c2) => Math.min(c1, c2));
    }
    return deliveryCost;
  }
}

interface StoreQuantity {
  store: Store,
  quantity: number
}