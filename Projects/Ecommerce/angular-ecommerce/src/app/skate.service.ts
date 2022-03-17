import { Injectable } from '@angular/core';
import { Products } from './interfaces/products';
import { PRODUCTS } from './mock/mock-products';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkateService {

  url: string = 'https://ecommercesite-aeedc-default-rtdb.firebaseio.com/products';
  jsonExt: string = '.json'

  constructor(private http: HttpClient) { }


  public getDBProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.url + this.jsonExt);
  }

  getProducts(type: string): Observable<Products[]> {
    const products = of(PRODUCTS.filter(p => p.type === type));
    return products;
  }

  getProduct(id: number): Observable<Products> {
    const products = PRODUCTS.find(p => p.id === id)!;
    return of(products);
  }
}
