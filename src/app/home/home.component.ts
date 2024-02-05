import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from '../stock/stock.component';
import { StockItem } from '../stockitem';
import { StockService } from '../stock.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, StockComponent],
  template: `
    <section>
      <form class="search-form">
        <input type="text" placeholder="Filter by make" #filter />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
      <button class="primary" type="button" (click)="createNewStockItem()">Add New+</button>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let stockItem of pagedLocationList"
        [housingLocation]="stockItem"
      ></app-housing-location>
      <div class="pagination">
        <button (click)="prevPage()" [disabled]="currentPage === 0"> << </button>
        <span>{{ currentPage + 1 }} / {{ totalPages }}</span>
        <button (click)="nextPage()" [disabled]="currentPage === totalPages - 1"> >> </button>
      </div>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  stockItemList: StockItem[] = [];
  stockService: StockService = inject(StockService);
  filteredLocationList: StockItem[] = [];
  pagedLocationList: StockItem[] = [];
  pageSize = 4; 
  currentPage = 0;
  totalPages = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.stockItemList = this.stockService.getAllStockItems();
    this.filteredLocationList = this.stockItemList;
    this.calculateTotalPages();
    this.updatePagedLocationList();
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.stockItemList;
    } else {
      this.filteredLocationList = this.stockItemList.filter((stockItem) =>
        stockItem?.make.toLowerCase().includes(text.toLowerCase())
      );
    }

    this.calculateTotalPages();
    this.updatePagedLocationList();
  }

  updatePagedLocationList() {
    const startIndex = this.currentPage * this.pageSize;
    this.pagedLocationList = this.filteredLocationList.slice(startIndex, startIndex + this.pageSize);
  }

  calculateTotalPages() {
    this.totalPages = Math.ceil(this.filteredLocationList.length / this.pageSize);
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updatePagedLocationList();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.updatePagedLocationList();
    }
  }

  createNewStockItem() {
    this.router.navigate(['/create-stockitem']);
  }
}
