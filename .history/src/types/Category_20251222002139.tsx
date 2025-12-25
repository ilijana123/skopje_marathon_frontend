export enum CategoryType {
  FIVE_KM = "5k
import { CategoryType } from "./CategoryType";

export interface Category {
  type: CategoryType;
  price: number;
  distance: number;
}
