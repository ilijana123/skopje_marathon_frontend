import { Contestant } from './Contestant';
export interface ContestantListResponse {
  contestants: Contestant[];
  total: number;
}