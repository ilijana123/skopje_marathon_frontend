import { apiRequest } from "../api/apiRequest";
import { ContestantListResponse } from "../types";

export const fetchContestantsWithErrorHandling = async (): Promise<ContestantListResponse | null> => {
  try {
    return await apiRequest<ContestantListResponse>('/contestants', 'GET');
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return null;
  }
};

// Filter by Category: /contestants/filter?category=...
export const fetchContestantsByCategory = async (category: string): Promise<Contestant[]> => {
  try {
    return await apiRequest<Contestant[]>(`/contestants/filter?category=${category}`, 'GET');
  } catch (error) {
    return [];
  }
};

// Search by Name: /contestants/search?name=...
export const fetchContestantsByName = async (name: string): Promise<Contestant[]> => {
  try {
    return await apiRequest<Contestant[]>(`/contestants/search?name=${name}`, 'GET');
  } catch (error) {
    return [];
  }
};