export enum CategoryType {
  FIVE_KM = "5km",
  TEN_KM = "10km",
  HALF_MARATHON = "Half Marathon",
  MARATHON = "Marathon",
}
import { CategoryType } from "./CategoryType";

export interface Category {
  type: CategoryType;
  price: number;
  distance: number;
}
