import { Component, OnInit} from '@angular/core';
import { SkateService } from '../skate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.sass']
})
export class CartViewComponent implements OnInit {

  items = this.skateService.getItems();
  prices = this.skateService.getPrices();
  isShowing: boolean = true;
  showPlaceOrder: boolean = false;
  
  constructor(private skateService: SkateService,
    private router: Router) { }
  
  
  ngOnInit(): void {
    console.log(this.items)
    if(this.items.length != 0)
    {
      this.showPlaceOrder = true
    }
  }

  clearCart() {
    this.skateService.clearCart();
    this.prices.items = "0";
    this.prices.shipping = "0";
    this.prices.beforeTax = "0";
    this.prices.afterTax = "0";
    this.prices.total = "0";
    this.isShowing = false;
    this.showPlaceOrder = false;
    return this.items;
  }

  placeOrder(): void {
    this.skateService.clearCart();
    this.isShowing = false;
    window.alert('Your order has been placed!');
    this.router.navigateByUrl("dashboard");
  }
}
