import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary">
      <span>My Store</span>
      {{ quantity$ | async | json }} - quantity
      {{ total$ | async | json }} - total
    </mat-toolbar>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  quantity$ = this.ShoppinCartSvg.quantityAction$;
  total$ = this.ShoppinCartSvg.totalAction$;
  cart$ = this.ShoppinCartSvg.cartAction$;

  constructor(private ShoppinCartSvg: ShoppingCartService) {}
}
