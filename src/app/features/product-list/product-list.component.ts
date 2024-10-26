import {Component} from '@angular/core';
import {StoreService} from '../../domain/store/store.service';
import {Store} from '../../domain/store/store.model';
import {CurrencyPipe, NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase} from '@angular/common';
import {Product} from '../../domain/product/product.model';
import {ProductService} from '../../domain/product/product.service';
import {ProductStock} from '../../domain/product-stock/product.stock';
import {ProductStockService} from '../../domain/product-stock/product-stock.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    NgForOf,
    CurrencyPipe,
    FormsModule,
    NgClass,
    NgSwitch,
    NgSwitchCase,
    NgIf
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  stores?: Store[];
  products?: Product[];
  productStocks?: ProductStock[];

  constructor(private storeService: StoreService, private productService: ProductService,
              private productStockService: ProductStockService) {
    this.storeService.getAllStores()
      .subscribe(stores => this.stores = stores);
    this.productService.getAllProducts()
      .subscribe(products => this.products = products);
    this.productStockService.getAllProductStocks()
      .subscribe(productStocks => this.productStocks = productStocks);
  }

  getStockAvailability(product: Product): StockAvailability | null {
    if (!this.productStocks) {
      return null;
    }
    const totalQuantity = this.productStocks
      .filter(productStock => {
        if (!this.stores) {
          return false;
        }
        const store = this.stores.find(store => store.id === productStock.storeId);
        const canDeliverOnline = store?.canDeliverOnline ?? false;
        const isSameProduct = productStock.productId === product.id;
        return canDeliverOnline && isSameProduct;
      })
      .map(productStock => productStock.quantity)
      .reduce((q1, q2) => q1 + q2, 0);

    if (totalQuantity === 0) {
      return 'out-of-stock';
    } else if (totalQuantity <= 10) {
      return 'low-stock';
    } else {
      return 'in-stock';
    }
  }

  getDeliveryCost(product: Product): number {
    if (!this.productStocks) {
      return 0;
    }
    return this.productStocks
      .filter(productStock => productStock.productId === product.id)
      .map(productStock => {
        if (!this.stores) {
          return undefined;
        }
        const store = this.stores.find(store => store.id === productStock.storeId);
        if (store?.canDeliverOnline) {
          return store.deliveryCosts
        } else {
          return undefined;
        }
      })
      .filter(deliveryCosts => !!deliveryCosts)
      .map(deliveryCosts => deliveryCosts!)
      .reduce((c1, c2) => Math.min(c1, c2));
  }
}

type StockAvailability = 'in-stock' | 'low-stock' | 'out-of-stock';
