import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';
import { products } from './../product';
import { IProducts } from './../iproducts';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  items:IProducts[];
  item: IProducts;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
   ){
    this.items = products
    const id = +this.route.snapshot.params["x"];
    this.item = this.items[id];
  }

  addToCart(){
     this.cartService.addToCart(this.item)
  }
}

