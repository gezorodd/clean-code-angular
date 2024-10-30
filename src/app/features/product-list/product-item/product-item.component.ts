import {Component, Input} from '@angular/core';
import {CurrencyPipe, NgIf, NgOptimizedImage, NgSwitch, NgSwitchCase} from "@angular/common";
import {ProductItem} from "./product-item.model";

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgSwitch,
    NgSwitchCase,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input({required: true}) item!: ProductItem;
}
