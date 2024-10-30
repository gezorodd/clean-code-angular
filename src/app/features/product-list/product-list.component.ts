import {Component} from '@angular/core';
import {AsyncPipe, CurrencyPipe, NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProductItemComponent} from "./product-item/product-item.component";
import {ProductItem} from "./product-item/product-item.model";
import {ActivatedRoute} from "@angular/router";
import {map, Observable} from "rxjs";

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
    NgIf,
    ProductItemComponent,
    AsyncPipe
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  items$: Observable<ProductItem[]>;

  constructor(activatedRoute: ActivatedRoute) {
    this.items$ = activatedRoute.data
      .pipe(
        map(data => data['items'])
      );
  }
}