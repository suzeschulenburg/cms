// new-stockitem.component.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StockService } from '../stock.service';
import { StockItem } from '../stockitem';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-stockitem',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="new-stock-form">
      <h2>Create New Stock Item</h2>
      <form [formGroup]="newStockForm" (submit)="saveNewStockItem()">
        <div class="form-group">
          <label for="make">Make:</label>
          <input formControlName="make" type="text" required />
        </div>

        <div class="form-group">
          <label for="model">Model:</label>
          <input formControlName="model" type="text" required />
        </div>

        <div class="form-group">
          <label for="kms">Kilometers:</label>
          <input formControlName="kms" type="text" pattern="[0-9]+" required />
          <small *ngIf="newStockForm.get('kms')?.hasError('pattern')">Please enter a valid number.</small>
        </div>

        <div class="form-group">
          <label for="colour">Color:</label>
          <input formControlName="colour" type="text" required />
        </div>

        <div class="form-group">
          <label for="costPrice">Price:</label>
          <input formControlName="costPrice" type="text" pattern="[0-9]+" required />
          <small *ngIf="newStockForm.get('costPrice')?.hasError('pattern')">Please enter a valid number.</small>
        </div>

        <div class="form-group">
          <label for="dtCreated">Date Created:</label>
          <input formControlName="dtCreated" type="date" required />
        </div>

        <div class="form-group">
          <label for="image">Upload Image:</label>
          <input formControlName="image" type="file" accept="image/*" />
        </div>

        <button type="submit" class="primary">Save Stock Item</button>
      </form>
    </div>
  `,
  styleUrls: ['./create.stcokitem.component.css'],
})
export class CreateStockItemComponent {

  router: Router = inject(Router);
  stockService = inject(StockService);
  newStockForm: FormGroup;

  constructor() {
    this.newStockForm = new FormGroup({
      make: new FormControl(),
      model: new FormControl(),
      kms: new FormControl(),
      colour: new FormControl(),
      costPrice: new FormControl(),
      dtCreated: new FormControl(),
      image: new FormControl(),
      // Add more form controls as needed
    });
  }

  saveNewStockItem(): void {
    const newStockItem: StockItem = this.newStockForm.value;
    // You might want to add validation and error handling here

    this.stockService.addStockItem(newStockItem);
    console.log('New StockItem added successfully');
    this.router.navigate(['/']); // Navigate back to the home page or stock list
  }
}
