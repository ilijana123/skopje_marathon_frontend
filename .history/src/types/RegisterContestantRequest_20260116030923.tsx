import { CategoryType } from "./CategoryType";

export interface RegisterContestantRequest {
  birthDate: any;
  firstName: string;
  lastName: string;
  gender: string;
  team: string;
  country: string;
  email: string;
  password: string;
  age: number;
  categoryType: CategoryType;
}   