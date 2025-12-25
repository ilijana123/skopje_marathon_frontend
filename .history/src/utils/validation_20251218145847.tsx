import { FormData, Contestant } from '../types';
import { MIN_AGE, MESSAGES } from '../constants';

export const validateRegistrationForm = (
  formData: FormData,
  contestants: Contestant[]
): string | null => {
  if (!formData.firstName || !formData.lastName || !formData.email || !formData.age) {
    return MESSAGES.ERROR_REQUIRED_FIELDS;
  }

  if (parseInt(formData.age) < MIN_AGE) {
    return MESSAGES.ERROR_AGE;
  }

  if (contestants.some(p => p.email === formData.email)) {
    return MESSAGES.ERROR_EMAIL_EXISTS;
  }

  return null;
};

export const generateRegistrationNumber = (): string => {
  return `REG${Date.now().toString().slice(-6)}`;
};

export const generateStartNumber = (): string => {
  return `START${Math.floor(1000 + Math.random() * 9000)}`;
};

export const simulatePayment = (): boolean => {
  return Math.random() > 0.2; 
};