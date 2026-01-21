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

export const calculateAge = (birthDate: string): number => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
};

export const validateForm = (formData: RegisterContestantRequest, age: number): string | null => {
  if (!formData.firstName.trim()) {
    return 'First name is required';
  }
  
  if (!formData.lastName.trim()) {
    return 'Last name is required';
  }
  
  if (!formData.email.trim()) {
    return 'Email is required';
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    return 'Invalid email format';
  }

  
  if (!formData.gender) {
    return 'Gender is required';
  }
  
  if (!formData.country) {
    return 'Country is required';
  }
  
  if (!formData.birthDate) {
    return 'Date of birth is required';
  }
  
  if (age < 16) {
    return 'Age must be at least 16 years';
  }
  
  if (!formData.categoryType) {
    return 'Category is required';
  }
  
  return null;
};