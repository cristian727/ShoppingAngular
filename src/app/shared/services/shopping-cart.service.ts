import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from 'src/app/pages/products/interfaces/product.interface';

@Injectable({ providedIn: 'root' })
export class ShoppingCartService {
  produts: Product[] = [];

  private cartSubject = new Subject<Product[]>();
  private totalSubject = new Subject<number>();
  private quantitySubject = new Subject<number>();

  get cartAction$(): Observable<Product[]> {
    return this.cartSubject.asObservable();
  }

  get totalAction$(): Observable<number> {
    return this.totalSubject.asObservable();
  }

  get quantityAction$(): Observable<number> {
    return this.quantitySubject.asObservable();
  }

  updateCart(product:Product):void{
    this.addToCart(product);
    this.quantityProducts();
    this.calcTotal();
  }

  private addToCart(product: Product): void {
    this.produts.push(product);
    this.cartSubject.next(this.produts);
  }

  private quantityProducts(): void {
    const quantity = this.produts.length;
    this.quantitySubject.next(quantity);
  }

  private calcTotal(): void {
    const total = this.produts.reduce((acc, prod) => (acc += prod.price), 0);
    this.totalSubject.next(total);
  }
}
