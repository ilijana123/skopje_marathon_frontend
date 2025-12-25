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
    setFormError('');
    setFormSuccess('');

    const error = validateRegistrationForm(formData, contestants);
    if (error) {
      setFormError(error);
      return;
    }

    setLoading(true);
    try {
      const requestData = {
        ...formData,
        age: Number(formData.age)
      };

      const response = await registerContestant(requestData);

      if (response) {
        setFormSuccess('Успешно се пријавивте!');
        setFormData(INITIAL_FORM_DATA); 
        await loadContestants(); 
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