import { apiRequest } from "../api/apiRequest";
import { Contestant } from "../types";
import { RegisterContestantRequest } from "../types/RegisterContestantRequest";
import { RegisterContestantResponse } from "../types/RegisterContestantResponse";

export const fetchContestantsWithErrorHandling = async (): Promise<Contestant[] | null> => {
  try {
    const data = await apiRequest<Contestant[]>('/contestants', 'GET');
    return data; 
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

export const fetchContestants = async (params?: { name?: string; category?: string }): Promise<Contestant[]> => {
  
}

export const registerContestant = async (userData: RegisterContestantRequest): Promise<RegisterContestantResponse> => {
  return await apiRequest<RegisterContestantResponse>('/contestants/register', 'POST', userData);
};