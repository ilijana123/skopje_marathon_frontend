export interface Contestant {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  category: string;
  registrationNumber?: string;
  startNumber?: string;
  isPaid: boolean;
}