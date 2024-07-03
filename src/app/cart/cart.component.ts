import { Component } from '@angular/core';
import { IProducts } from '../iproducts';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartItems: IProducts[];
  total: number = 0;
  serviceCharge: number = 0;
  discount: number = 0;
  totalWithService: number = 0;
  finalTotal: number = 0;

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.cartItems;
    this.calculateTotals();
  }

  calculateTotals() {
    this.total = this.cartService.getTotal();
    this.serviceCharge = this.total * 0.10;
    this.totalWithService = this.total + this.serviceCharge;
    if (this.totalWithService > 40) {
      this.discount = this.totalWithService * 0.15;
    } else {
      this.discount = 0;
    }
    this.finalTotal = this.totalWithService - this.discount;
  }

  onIncreaseQtty(item: IProducts) {
    this.cartService.increaseQtty(item);
    this.calculateTotals();
  }

  onDecreaseQtty(item: IProducts) {
    this.cartService.decreaseQtty(item);
    this.calculateTotals();
    this.cartItems = this.cartService.cartItems;
  }

  onDelete(item: IProducts) {
    this.cartService.deleteItem(item);
    this.calculateTotals();
    this.cartItems = this.cartService.cartItems;
  }
}
