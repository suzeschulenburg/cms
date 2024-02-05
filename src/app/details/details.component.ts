import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../stock.service';
import { StockItem } from '../stockitem';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article class="details-article">
      <div class="details-header">
        <img class="listing-photo" [src]="stockItem?.images" alt="Stock Item Image" crossorigin />
        <div class="listing-description">
          <h2 class="listing-heading">{{ stockItem?.make }} </h2>
          <p class="listing-location">{{ stockItem?.model }}</p>
        </div>
      </div>

      <section class="listing-features">
        <h2 class="section-heading">About this stock item</h2>
        <ul>
          <li *ngIf="!isEditMode">
            <strong>Kilometers:</strong> {{ stockItem?.kms }}
          </li>
          <li *ngIf="isEditMode">
            <input formControlName="kms" type="number" placeholder="Enter Kilometers" />
          </li>

          <li *ngIf="!isEditMode">
            <strong>Vehicle Colour:</strong> {{ stockItem?.colour }}
          </li>
          <li *ngIf="isEditMode">
            <input formControlName="colour" type="text" placeholder="Enter Vehicle Colour" />
          </li>

          <li *ngIf="!isEditMode">
            <strong>Date added:</strong> {{ stockItem?.dtCreated | date:'yyyy-MM-dd' }}
          </li>
          <li *ngIf="isEditMode">
            <input formControlName="dtCreated" type="date" placeholder="Select Date" />
          </li>
        </ul>
      </section>

      <section class="listing-apply">
        <ng-container *ngIf="!isEditMode; else editModeTemplate">
          <button type="button" class="primary" (click)="enterEditMode()">Edit</button>
        </ng-container>
        <ng-template #editModeTemplate>
          <form *ngIf="stockItem" [formGroup]="editForm" (submit)="saveChanges()">
            <!-- Your edit form controls go here -->
            <button type="submit" class="primary">Save Changes</button>
            <button type="button" class="secondary" (click)="cancelEdit()">Cancel</button>
          </form>
        </ng-template>

        <!-- Delete button -->
        <button type="button" class="delete" (click)="deleteStockItem()">Delete</button>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  stockService = inject(StockService);
  stockItem: StockItem | undefined;
  editForm!: FormGroup; 
  isEditMode = false;

  constructor() {
    const stockItemId = parseInt(this.route.snapshot.params['id'], 10);
    this.stockItem = this.stockService.getStockItemById(stockItemId);
    this.initForm();
  }

  initForm(): void {
    this.editForm = new FormGroup({
      kms: new FormControl(),
      colour: new FormControl(),
      dtCreated: new FormControl(),
    });
  }

  enterEditMode(): void {
    if (this.stockItem) {
      this.editForm.patchValue(this.stockItem);
      this.isEditMode = true;
    }
  }

  saveChanges(): void {
    if (this.stockItem) {
      this.stockItem = { ...this.stockItem, ...this.editForm.value };
      this.isEditMode = false;
    } else {
      console.error("StockItem is undefined");
    }
  }

  cancelEdit(): void {
    this.isEditMode = false;
  }

  deleteStockItem(): void {
    if (this.stockItem) {
      this.stockService.deleteStockItem(this.stockItem.id);
      console.log('StockItem deleted successfully');
      this.router.navigate(['/']); 
    } else {
      console.error("StockItem is undefined");
    }
  }
}
