export interface Contestant {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  distance: string;
  registrationNumber?: string;
  startNumber?: string;
  isPaid: boolean;
}