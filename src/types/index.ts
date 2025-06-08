// src/types/index.ts
export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  imageUrl: string;
  category?: string; // Opsiyonel
}