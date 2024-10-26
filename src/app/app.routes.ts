import {Routes} from '@angular/router';
import {ProductListComponent} from './features/product-list/product-list.component';
import {HomeComponent} from './features/home/home.component';
import {ProductListService} from './features/product-list/product-list.service';
import {inject} from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductListComponent,
    resolve: {
      items: () => {
        const productListService = inject(ProductListService);
        return productListService.getAllProductItems();
      }
    }
  }
];
