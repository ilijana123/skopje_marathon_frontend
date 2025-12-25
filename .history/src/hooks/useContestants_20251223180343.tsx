import { useState, useEffect } from 'react';
import { Contestant, FormData } from '../types';
import { validateRegistrationForm } from '../utils/validation';
import { registerContestant, fetchContestantsWithErrorHandling } from '../services/contestantService';
import { CategoryType } from '../types/CategoryType';

const INITIAL_FORM_DATA: FormData = {
  firstName: '',
  lastName: '',
  gender: '',
  team: '',
  country: '',  
  email: '',
  password: '',
  age: '',
  categoryType: CategoryType.FIVE_KM
};

export const useContestants = () => {
  const [contestants, setContestants] = useState<Contestant[]>([]);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  // Load contestants on mount
  useEffect(() => {
    loadContestants();
  }, []);

  const loadContestants = async () => {
    const data = await fetchContestantsWithErrorHandling();
    if (data) setContestants(data);
  };

  const handleRegister = async () => {
    // 1. Reset states
    setFormError('');
    setFormSuccess('');

    // 2. Client-side Validation
    const error = validateRegistrationForm(formData, contestants);
    if (error) {
      setFormError(error);
      return;
    }

    setLoading(true);
    try {
      // 3. Prepare data (convert age string to number)
      const requestData = {
        ...formData,
        age: Number(formData.age)
      };

      // 4. API Call
      const response = await registerContestant(requestData);

      if (response) {
        setFormSuccess('Успешно се пријавивте!');
        setFormData(INITIAL_FORM_DATA); // Clear form
        await loadContestants(); // Refresh the list
      }
    } catch (err: any) {
      setFormError(err.message || 'Проблем со серверот. Обидете се подоцна.');
    } finally {
      setLoading(false);
    }
  };

  return {
    contestants,
    formData,
    setFormData,
    formError,
    formSuccess,
    loading,
    handleRegister,
  };
};