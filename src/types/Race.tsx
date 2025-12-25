import { Comment } from './Comment';

export interface Race {
  id: number;
  name: string;
  date: string;
  participants: number;
  rating?: number;
  comments?: Comment[];
}