import { products } from 'src/app/models/material/products.model';
import { Observable, BehaviorSubject, Subject  } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cart = new BehaviorSubject(0); // 0 is the initial value
  serverUrl = environment.serverUrl;

  getAllProducts(): Observable<products[]>{
    return this.httpClient.get<products[]>(`${this.serverUrl}products`);
  }

  getCart(){
    return this.cart;
  }

  addToCart(id:number): BehaviorSubject<number>{
    this.cart.next(this.cart.value + 1);
    localStorage.setItem("cart", "d");

    alert("פריט נוסף לסל בהצלחה")
    return this.cart;
  }

  deleteProduct(id:number):Observable<products[]>{
    return this.httpClient.delete<any[]>(`${this.serverUrl}products/${id}`);
  }

  selectId(id:number):Observable<products[]>{
    return this.httpClient.get<products[]>(`${this.serverUrl}products/${id}`);
  }



  constructor(private httpClient:HttpClient) { }


}
