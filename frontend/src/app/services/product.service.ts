import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL ="http://localhost:8081/shop/product";

  constructor(private httpClient:HttpClient) { 
  }

  getProductsList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.baseURL);
  } 

  createProduct(product:Product):Observable<Object>{
    return this.httpClient.post(this.baseURL,product);
  }

  getProductById(productId:number):Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}/${productId}`);
  }

  updateProduct(productId:number,product:Product):Observable<Object>{
   return this.httpClient.put(`${this.baseURL}/${productId}`,product);
  }

  //delete Product
  deleteProduct(productId:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${productId}`);
   }
 
}
