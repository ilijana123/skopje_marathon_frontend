import { apiRequest } from "../api/apiRequest";
import { Category } from "../types";

export const fetchCWithErrorHandling = async (): Promise<Category[] | null> => {
  try {
    const data = await apiRequest<Contestant[]>('/contestants', 'GET');
    return data; 
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return null;
  }
};