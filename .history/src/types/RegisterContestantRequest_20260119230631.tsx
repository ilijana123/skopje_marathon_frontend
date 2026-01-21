import { CategoryType } from "./CategoryType";

export interface RegisterContestantRequest {
  firstName: string;
  lastName: string;
  gender: string;
  team: string;
  country: string;
  email: string;
  birthDate: string;
  categoryType: CategoryType;
}   