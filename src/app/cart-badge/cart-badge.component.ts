import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrl: './cart-badge.component.css'
})
export class CartBadgeComponent implements OnInit {
  itemCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCartItemCount().subscribe(count => {
      this.itemCount = count;
    });
  }
}
