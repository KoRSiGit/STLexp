import { Product } from '../types';
import { PRODUCTS_XTC } from './products_xtc';
import { PRODUCTS_FURNACES } from './products_furnaces';
import { PRODUCTS_PGS } from './products_pgs';
import { PRODUCTS_OTHERS } from './products_others';

export const PRODUCTS: Product[] = [
  ...PRODUCTS_XTC,
  ...PRODUCTS_FURNACES,
  ...PRODUCTS_PGS,
  ...PRODUCTS_OTHERS
];
