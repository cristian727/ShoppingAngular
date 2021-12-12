import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Product } from 'src/app/pages/products/interfaces/product.interface';

@Injectable({ providedIn: 'root' })
export class ShoppingCartService {
  produts: Product[] = [];

  private cartSubject = new BehaviorSubject<Product[]>([]);
  private totalSubject = new BehaviorSubject<number>(0);
  private quantitySubject = new BehaviorSubject<number>(0);

  get cartAction$(): Observable<Product[]> {
    return this.cartSubject.asObservable();
  }

  get totalAction$(): Observable<number> {
    return this.totalSubject.asObservable();
  }

  get quantityAction$(): Observable<number> {
    return this.quantitySubject.asObservable();
  }

  updateCart(product: Product): void {
    this.addToCart(product);
    this.quantityProducts();
    this.calcTotal();
  }

  resetCart(): void {
    this.cartSubject.next([]);
    this.totalSubject.next(0);
    this.quantitySubject.next(0);
    this.produts = [];
  }

  private addToCart(product: Product): void {
    const isProductInCart = this.produts.find(({ id }) => id === product.id);

    if (isProductInCart) {
      isProductInCart.qty += 1;
    } else {
      this.produts.push({ ...product, qty: 1 });
    }

    this.cartSubject.next(this.produts);
  }

  private quantityProducts(): void {
    const quantity = this.produts.reduce((acc, prod) => (acc += prod.qty), 0);
    this.quantitySubject.next(quantity);
  }

  private calcTotal(): void {
    const total = this.produts.reduce(
      (acc, prod) => (acc += prod.price * prod.qty),
      0
    );
    this.totalSubject.next(total);
  }
}
