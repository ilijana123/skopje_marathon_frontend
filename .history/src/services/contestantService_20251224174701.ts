import { apiRequest } from "../api/apiRequest";
import { Contestant } from "../types";
import { RegisterContestantRequest } from "../types/RegisterContestantRequest";
import { RegisterContestantResponse } from "../types/RegisterContestantResponse";

export const fetchContestants = async (params?: { searchTerm?: string; filterCategory?: string }): Promise<Contestant[]> => {
  try {
    let path = '/contestants';
    if (params?.searchTerm) {
      path = `/contestants/search?name=${params.searchTerm}`;
    } else if (params?.filterCategory && params.filterCategory !== 'all') {
      path = `/contestants/filter?category=${encodeURIComponent(params.filterCategory)}`;
    }

    const data = await apiRequest<Contestant[]>(path, 'GET');
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Failed to fetch contestants:', error);
    return [];
  }
}

export const registerContestant = async (userData: RegisterContestantRequest): Promise<RegisterContestantResponse> => {
  return await apiRequest<RegisterContestantResponse>('/contestants/register', 'POST', userData);
};