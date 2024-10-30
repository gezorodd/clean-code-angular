import {Routes} from '@angular/router';
import {ProductListComponent} from './features/product-list/product-list.component';
import {HomeComponent} from './features/home/home.component';
import {inject} from "@angular/core";
import {ProductListService} from "./features/product-list/product-list.service";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductListComponent,
    resolve: {
      items: () => inject(ProductListService).getProductItems()
    }
  }
];
