import { ActivatedRoute } from '@angular/router';
import { IProducts } from '../iproducts';
import { products } from './../product';
import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  products:IProducts[] = products;
  product:IProducts={} as IProducts;

 constructor(private CS:CartService,private route:ActivatedRoute){}

 ngOnInit(): void {

 }

  addToCart(producto:IProducts){
   this.CS.addToCart(producto)
   Swal.fire({
    position: "center",
    icon: "success",
    title: "Added to cart",
    showConfirmButton: false,
    timer: 1200
  });
  }
 }

