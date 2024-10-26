import {Component, Input} from '@angular/core';
import {CurrencyPipe, NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import {ProductItem} from './product-item.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgIf,
    NgSwitchCase,
    NgSwitch
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input({required: true}) item!: ProductItem;
}
