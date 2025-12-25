import { apiRequest } from "../api/apiRequest";
import { Category } from "../types";

export const fetchCategories = async (): Promise<Category[]> => {
    try {   
        return await apiRequest<Category[]>('/categories', 'GET');
    } catch (error) {
        console.error('Failed to fetch categories:', error);
        return [];
    }           
};