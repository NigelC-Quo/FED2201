import { Injectable } from '@angular/core';
import { Products } from './interfaces/products';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SkateService {
  url: string =
    'https://ecommercesite-aeedc-default-rtdb.firebaseio.com/products';
  jsonExt: string = '.json';
  items: Products[] = [];

  constructor(private http: HttpClient) {}

  public getDBProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.url + this.jsonExt);
  }

  addToCart(product: Products, qty: number) {
    let singlePrice = product.price;
    product.quantity = qty;
    product.price = (singlePrice * qty)
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  getPrices() {
    let sum = 0;
    let tax = 0.04;
    let sAndH = 0;
    this.items.forEach(function (value) {
      sum += value.price;
      sAndH = 3.99;
    });

    let prices = {
      items: sum.toFixed(2),
      shipping: sAndH.toFixed(2),
      beforeTax: (sum + sAndH).toFixed(2),
      afterTax: (sum * tax).toFixed(2),
      total: (sum + sAndH + tax * sum).toFixed(2),
    };

    return prices;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
