import { apiRequest } from "../api/apiRequest";
import { Contestant } from "../types";
import { RegisterContestantRequest } from "../types/RegisterContestantRequest";
import { RegisterContestantResponse } from "../types/RegisterContestantResponse";

export const fetchContestants = async (params?: { searchTerm?: string; filterCategory?: string }): Promise<Contestant[]> => {
  try {
    let url = '/contestants';
    if (params?.searchTerm) {
      url += `/search?name=${encodeURIComponent(params.searchTerm)}`;
    } else if (params?.filterCategory) {
      url += `/filter?category=${encodeURIComponent(params.fi)}`;
    }

    const data = await apiRequest<Contestant[]>(url, 'GET');
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Failed to fetch contestants:', error);
    return [];
  }
}

export const registerContestant = async (userData: RegisterContestantRequest): Promise<RegisterContestantResponse> => {
  return await apiRequest<RegisterContestantResponse>('/contestants/register', 'POST', userData);
};