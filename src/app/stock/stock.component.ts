import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockItem } from '../stockitem';
import { RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation.images"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation.make }} {{ housingLocation.model }}</h2>
      <p class="listing-heading">R{{ housingLocation.costPrice }}, {{ housingLocation.modelYear }}</p>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./stock.component.css'],
})
export class StockComponent {
  @Input() housingLocation!: StockItem;
}
