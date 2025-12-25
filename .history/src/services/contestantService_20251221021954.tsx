import { apiRequest } from "../api/apiRequest";
import { Contestant, ContestantListResponse } from "../types";

export const fetchContestantsWithErrorHandling = async (): Promise<Contestant[] | null> => {
  try {
    const response = await apiRequest<ContestantListResponse>('/contestants', 'GET');
    return response.contestants;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return null;
  }
};


export const fetchContestantsByCategory = async (category: string): Promise<Contestant[]> => {
  try {
    return await apiRequest<Contestant[]>(`/contestants/filter?category=${category}`, 'GET');
  } catch (error) {
    return [];
  }
};


export const fetchContestantsByName = async (name: string): Promise<Contestant[]> => {
  try {
    return await apiRequest<Contestant[]>(`/contestants/search?name=${name}`, 'GET');
  } catch (error) {
    return [];
  }
};