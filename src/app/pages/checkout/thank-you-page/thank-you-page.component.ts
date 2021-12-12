import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thank-you-page',
  template: `
    <div class="container">
      <h1 class="title">Thank you!</h1>
      <p class="content">Your order is on the way!</p>

      <span
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, in
        dolorem! Mollitia modi ratione odio autem, ipsam deleniti incidunt
        laborum voluptatum quaerat molestiae voluptatem, dicta ab quo illo, eum
        beatae!</span
      >
    </div>
  `,
  styleUrls: ['./thank-you-page.component.scss'],
})
export class ThankYouPageComponent {}
