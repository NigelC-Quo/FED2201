import { Injectable } from '@angular/core';
import { Products } from './interfaces/products';
import { PRODUCTS } from './mock/mock-products';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkateService {

  constructor() { }

  getProducts(type: string): Observable<Products[]> {
    const products = of(PRODUCTS.filter(p => p.type === type));
    return products;
  }

  getProduct(id: number): Observable<Products> {
    const products = PRODUCTS.find(p => p.id === id)!;
    return of(products);
  }
}
