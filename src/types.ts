export type ProductCategory =
  | 'sand-mixers-xtc'
  | 'furnaces'
  | 'shot-blast'
  | 'casting-machines'
  | 'cooling-systems';

export interface ProductSpec {
  name: string;
  value: string;
  nameEn?: string;
  valueEn?: string;
}

export interface Product {
  id: string;
  category: ProductCategory;
  title: string;
  titleEn?: string;
  model: string;
  description: string;
  descriptionEn?: string;
  features: string[];
  featuresEn?: string[];
  specs: ProductSpec[];
  imageUrl: string;
  capacity?: string;
  capacityEn?: string;
  power?: string;
  powerEn?: string;
}

export interface RFQItem {
  product: Product;
  quantity: number;
  comments?: string;
}

export interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}

export interface CalculatorState {
  mixerCapacity: number; // t/hour
  operatingHours: number; // hours/day
  binderRatio: number; // % (typically 1.0 - 2.0%)
  catalystRatio: number; // % of binder (typically 30 - 50%)
  sandCost: number; // rub/ton
  binderCost: number; // rub/kg
  catalystCost: number; // rub/kg
}
