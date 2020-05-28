import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart/cart.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  cartTotal: number = 0;
  cartItems: CartItem[] = [];

  constructor() { }

  ngOnInit() {
    this.updateCartTotal();    
  }

  onCartItemDeleted(productData:{productId: number}) {
    const index = this.cartItems.findIndex( elem => elem.id == productData.productId )
    this.cartItems.splice(index,1);
    this.updateCartTotal();
  }

  onCartItemChanged(productData:{productId: number}) {
    this.updateCartTotal();
  }

  onCartUpdated(productData: {
                productId: number,
                productName: string,
                productPrice: number} ) {
    const index = this.cartItems.findIndex( elem => elem.id == productData.productId )
    if (index===-1) {
      this.cartItems.push({
          id: productData.productId,
          name: productData.productName,
          price: productData.productPrice,
          total: productData.productPrice * 1
      });
    } else {
      this.cartItems[index].id = productData.productId;
      this.cartItems[index].name = productData.productName;
  
      this.cartItems[index].price = productData.productPrice;
      this.cartItems[index].total = this.cartItems[index].price ;
    }
      this.updateCartTotal();
  }

  updateCartTotal() {
    
    let total = 0;
    this.cartItems.map( elem => total = total + elem.price);
    this.cartTotal = total;
    
    
    if ( total < 1000) {
      alert("Transaction Success!");
    }

    else 
    alert("You don’t have enough gold!");
 }   

}
