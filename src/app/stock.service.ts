import { Injectable } from '@angular/core';
import { StockItem } from './stockitem';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  readonly baseUrl = 'https://angular.dev/assets/tutorials/common';

  protected stockItemList: StockItem[] = [
    {
      id: 0,
      regNo: 'ABC123', 
      make: 'Mercedes-Benz',
      model: 'GLE Coupe',
      modelYear: 2022,
      kms: 5000,
      colour: 'Silver',
      vin: 'VIN123456789',
      retailPrice: 45000,
      costPrice: 35000,
      dtCreated: new Date(),
      dtUpdated: new Date(),
      images: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
    },
    {
      id: 1,
      regNo: 'XYZ789', 
      make: 'Nissan',
      model: 'Rogue',
      modelYear: 2021,
      kms: 2000,
      colour: 'Blue',
      vin: 'VIN987654321',
      retailPrice: 30000,
      costPrice: 25000,
      dtCreated: new Date(),
      dtUpdated: new Date(),
      images: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
     
    },
    {
      id: 2,
      regNo: 'XYZ789', 
      make: 'Toyota',
      model: 'Camry',
      modelYear: 2021,
      kms: 2000,
      colour: 'Red',
      vin: 'VIN987654321',
      retailPrice: 30000,
      costPrice: 25000,
      dtCreated: new Date(),
      dtUpdated: new Date(),
      images: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,

    },
    {
      id: 3,
      regNo: 'XYZ789', 
      make: 'Honda',
      model: 'Accord',
      modelYear: 2021,
      kms: 2000,
      colour: 'Green',
      vin: 'VIN987654321',
      retailPrice: 30000,
      costPrice: 25000,
      dtCreated: new Date(),
      dtUpdated: new Date(),
      images: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
      
    },
    {
      id: 4,
      regNo: 'XYZ789', 
      make: 'Ford',
      model: 'Mustang',
      modelYear: 2021,
      kms: 2000,
      colour: 'Yellow',
      vin: 'VIN987654321',
      retailPrice: 30000,
      costPrice: 25000,
      dtCreated: new Date(),
      dtUpdated: new Date(),
    },
    {
      id: 5,
      regNo: 'XYZ789', 
      make: 'Chevrolet',
      model: 'Camaro',
      modelYear: 2021,
      kms: 2000,
      colour: 'Orange',
      vin: 'VIN987654321',
      retailPrice: 30000,
      costPrice: 25000,
      dtCreated: new Date(),
      dtUpdated: new Date(),
    },
    {
      id: 6,
      regNo: 'XYZ789', 
      make: 'BMW',
      model: '3 Series',
      modelYear: 2021,
      kms: 2000,
      colour: 'Purple',
      vin: 'VIN987654321',
      retailPrice: 30000,
      costPrice: 25000,
      dtCreated: new Date(),
      dtUpdated: new Date(),
    },
    {
      id: 7,
      regNo: 'XYZ789', 
      make: 'Audi',
      model: 'A4',
      modelYear: 2021,
      kms: 2000,
      colour: 'Black',
      vin: 'VIN987654321',
      retailPrice: 30000,
      costPrice: 25000,
      dtCreated: new Date(),
      dtUpdated: new Date(),
    },
    {
      id: 8,
      regNo: 'XYZ789', 
      make: 'Hyundai',
      model: 'Elantra',
      modelYear: 2021,
      kms: 2000,
      colour: 'White',
      vin: 'VIN987654321',
      retailPrice: 30000,
      costPrice: 25000,
      dtCreated: new Date(),
      dtUpdated: new Date(),
    },
    {
      id: 9,
      regNo: 'XYZ789', 
      make: 'Lexus',
      model: 'RX',
      modelYear: 2021,
      kms: 2000,
      colour: 'Silver',
      vin: 'VIN987654321',
      retailPrice: 30000,
      costPrice: 25000,
      dtCreated: new Date(),
      dtUpdated: new Date(),
    },
    {
      id: 10,
      regNo: 'XYZ789', 
      make: 'Tesla',
      model: 'Model S',
      modelYear: 2021,
      kms: 2000,
      colour: 'Blue',
      vin: 'VIN987654321',
      retailPrice: 30000,
      costPrice: 25000,
      dtCreated: new Date(),
      dtUpdated: new Date(),
      images: `${this.baseUrl}/grahame-jenkins-p7tai9P7H-s-unsplash.jpg`
    },
    {
      id: 11,
      regNo: 'XYZ789', 
      make: 'Tesla',
      model: 'Model S',
      modelYear: 2021,
      kms: 2000,
      colour: 'Blue',
      vin: 'VIN987654321',
      retailPrice: 30000,
      costPrice: 25000,
      dtCreated: new Date(),
      dtUpdated: new Date(),
      images: `${this.baseUrl}/grahame-jenkins-p7tai9P7H-s-unsplash.jpg`

    }
    

  ];

  getAllStockItems(): StockItem[] {
    return this.stockItemList;
  }

  getStockItemById(id: number): StockItem | undefined {
    return this.stockItemList.find((stockItem) => stockItem.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Stock item application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }


  updateStockItem(updatedStockItem: StockItem): void {
    const index = this.stockItemList.findIndex(item => item.id === updatedStockItem.id);
  
    if (index !== -1) {
      this.stockItemList[index] = updatedStockItem;
    }
  }
  

  deleteStockItem(id: number): void {
    this.stockItemList = this.stockItemList.filter(item => item.id !== id);
  }


  private generateUniqueId(): number {
    const maxId = Math.max(...this.stockItemList.map(item => item.id), 0);
    return maxId + 1;
  }

  addStockItem(newStockItem: StockItem): void {
    newStockItem.id = this.generateUniqueId();

    this.stockItemList.push(newStockItem);
  }
  
}
