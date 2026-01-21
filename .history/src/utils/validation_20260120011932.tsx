import { FormData, Contestant } from '../types';
import { MIN_AGE, MESSAGES } from '../constants';

export const validateRegistrationForm = (
  formData: FormData,
  contestants: Contestant[]
): string | null => {
  if (!formData.firstName || !formData.lastName || !formData.email || !formData.country || !formData.birthDate  || !formData.phoneNumber || !formData.gender) {
    return MESSAGES.ERROR_REQUIRED_FIELDS;
  }

  if (contestants.some(p => p.email === formData.email)) {
    return MESSAGES.ERROR_EMAIL_EXISTS;
  }

  return null;
};
