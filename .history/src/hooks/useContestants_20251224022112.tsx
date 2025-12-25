import { useState, useEffect } from 'react';
import { Contestant, FormData, Category } from '../types';
import { validateRegistrationForm } from '../utils/validation';
import { 
  registerContestant, 
  fetchContestantsWithErrorHandling, 
  fetchContestantsByCategory, 
  fetchContestantsByName 
} from '../services/contestantService';
import { fetchCategoriesWithErrorHandling } from '../services/categoryService';
import { CategoryType } from '../types/CategoryType';
import { RegisterContestantRequest } from '../types/RegisterContestantRequest';

const INITIAL_FORM_DATA: FormData = {
  firstName: '', lastName: '', gender: '', team: '',
  country: '', email: '', password: '', age: '',
  categoryType: CategoryType.MARATHON
};

export const useContestants = () => {
  const [contestants, setContestants] = useState<Contestant[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchCategoriesWithErrorHandling();
      setCategories(data || []);
    };
    loadCategories();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let data;
        if (searchTerm) {
          data = await fetchContestantsByName(searchTerm);
        } else if (filterCategory !== 'all') {
          data = await fetchContestantsByCategory(filterCategory);
        } else {
          data = await fetchContestantsWithErrorHandling();
        }
        
        const contestantsArray = Array.isArray(data) ? data : [];
        setContestants(contestantsArray);
      } catch (error) {
        setContestants([]);
      } finally {
        setLoading(false);
      }
    };

    const delayDebounce = setTimeout(fetchData, 300);
    return () => clearTimeout(delayDebounce);
  }, [searchTerm, filterCategory]);

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
    const requestData: RegisterContestantRequest = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      gender: formData.gender,
      team: formData.team,
      country: formData.country,
      email: formData.email,
      password: formData.password,
      age: Number(formData.age),
      categoryType: formData.categoryType as CategoryType 
    };

    const response = await registerContestant(requestData);

    if (response) {
      setFormSuccess('Успешно се пријавивте!');
      setFormData(INITIAL_FORM_DATA);
      setFilterCategory('all'); 
      setSearchTerm('');
    }
  } catch (err: any) {
    setFormError(err.message || 'Error occurred');
  } finally {
    setLoading(false);
  }
};

  return {
    contestants,
    categories,
    searchTerm,
    setSearchTerm,
    filterCategory,
     setFilterCategory, loading,
    formData, setFormData, formError, formSuccess, handleRegister
  };
};