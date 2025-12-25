import { apiRequest } from "../api/apiRequest";
import { Contestant, ContestantListResponse } from "../types";

export const fetchContestantsWithErrorHandling = async (): Promise<ContestantListResponse | null> => {
  try {
    return await apiRequest<UserListResponse>('/users', 'GET');
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return null;
  }
};