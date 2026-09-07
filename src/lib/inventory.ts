// src/lib/inventory.ts
//
// Typed access to the mock inventory. The raw data lives in
// src/data/inventory.json so it reads like a feed export; this module
// gives it a type and a couple of derived helpers.

import raw from '../data/inventory.json';

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  trim: string;
  bodyType: 'Hatchback' | 'Estate' | 'SUV' | string;
  fuel: string;
  transmission: string;
  mileageKm: number;
  priceGross: number;
  vatIncluded: boolean;
  vatRate: number;
  priceNet: number;
  vatAmount: number;
  images: string[];
  location: 'Stuttgart' | 'Luxembourg' | string;
  blurb: string;
}

export const inventory = raw as Vehicle[];

export const makes = [...new Set(inventory.map((v) => v.make))].sort();
export const bodyTypes = [...new Set(inventory.map((v) => v.bodyType))].sort();
