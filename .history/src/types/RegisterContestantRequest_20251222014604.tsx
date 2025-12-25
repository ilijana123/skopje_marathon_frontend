import { CategoryYpe } from "./Category";

export interface RegisterContestantRequest {
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