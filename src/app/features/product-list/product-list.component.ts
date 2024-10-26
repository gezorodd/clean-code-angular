import {Component} from '@angular/core';
import {AsyncPipe, CurrencyPipe, NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {map, Observable} from 'rxjs';
import {ProductItem} from './product-item/product-item.model';
import {ActivatedRoute} from '@angular/router';
import {ProductItemComponent} from './product-item/product-item.component';

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
    AsyncPipe,
    ProductItemComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  readonly items$: Observable<ProductItem[]>;

  constructor(activatedRoute: ActivatedRoute) {
    this.items$ = activatedRoute.data
      .pipe(
        map(data => data['items'] as ProductItem[])
      );
  }
}
