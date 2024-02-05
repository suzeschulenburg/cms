


export interface StockItem {
  id: number;
  regNo: string;
  make: string; 
  model: string; 
  modelYear: number; 
  kms: number; 
  colour: string; 
  vin: string;
  retailPrice: number; 
  costPrice: number; 
  accessories?: string[]; 
  images?: string; 
  dtCreated: Date; 
  dtUpdated: Date; 
}
