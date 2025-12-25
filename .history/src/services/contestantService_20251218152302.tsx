import { apiRequest } from "../api/apiRequest";
import { Contestant } from "../types";

export const fetchUsersWithErrorHandling = async (): Promise<UserListResponse | null> => {
  try {
    return await apiRequest<UserListResponse>('/users', 'GET');
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return null;
  }
};