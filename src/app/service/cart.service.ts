import { IProducts } from './../iproducts';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: IProducts[] = [];
  formData!: string;
  private cartItemCount = new BehaviorSubject<number>(0);

  constructor() { }

  addToCart(item: IProducts) {
    if (this.cartItems.includes(item)) {
      item.quantity++;
    } else {
      this.cartItems.push(item);
    }
    this.updateCartItemCount();
  }

  increaseQtty(item: IProducts) {
    item.quantity++;
    this.updateCartItemCount();
  }

  decreaseQtty(item: IProducts) {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.deleteItem(item);
    }
    this.updateCartItemCount();
  }

  deleteItem(item: IProducts) {
    item.quantity = 1;
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
    this.updateCartItemCount();
  }

  getData() {
    return this.cartItems;
  }

  addData(data: string) {
    this.formData = data;
  }

  getTotal(): number {
    let total = 0;
    this.cartItems.forEach(item => total += item.price * item.quantity);
    return total;
  }

  getCartItemCount() {
    return this.cartItemCount.asObservable();
  }

  private updateCartItemCount() {
    let count = this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    this.cartItemCount.next(count);
  }
}
