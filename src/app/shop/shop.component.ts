import { IProducts } from '../iproducts';
import { products } from './../product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  products: IProducts[] = products;
}
