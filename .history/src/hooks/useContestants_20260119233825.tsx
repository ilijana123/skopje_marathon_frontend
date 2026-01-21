import { useState, useEffect } from 'react';
import { Contestant, FormData, Category } from '../types';
import { validateRegistrationForm } from '../utils/validation';
import { 
  registerContestant, 
  fetchContestants,
} from '../services/contestantService';
import { fetchCategoriesWithErrorHandling } from '../services/categoryService';
import { CategoryType } from '../types/CategoryType';
import { RegisterContestantRequest } from '../types/RegisterContestantRequest';

const INITIAL_FORM_DATA: FormData = {
  firstName: '', lastName: '', gender: '', team: '',
  country: '', email: '', birthDate: '',
  categoryType: CategoryType.MARATHON,
  phone: ''
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
  const [checkEmail, setCheckEmail] = useState('');
  const [checkResult, setCheckResult] = useState<Contestant | null>(null);

  const handleCheck = async () => {
    setFormError('');
    if (!checkEmail) {
      setFormError('Внесете е-маил за проверка');
      return;
    }
    
    const result = contestants.find(c => c.email === checkEmail);
    if (result) {
      setCheckResult(result);
    } else {
      setCheckResult(null);
      setFormError('Не е пронајден учесник со овој е-маил');
    }
  };

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
          data = await fetchContestants({ searchTerm });
        } else if (filterCategory !== 'all') {
          data = await fetchContestants({ filterCategory });
        } else {
          data = await fetchContestants();
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

  const handleRegister = async (onSuccessCallback?: () => void) => {
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
        birthDate: formData.birthDate,
        phoneNumber: formData.phoneNumber,
        categoryType: formData.categoryType as CategoryType 
      };

      const response = await registerContestant(requestData);

      if (response) {
        setFormSuccess('Успешно се пријавивте!');
        if (onSuccessCallback) {
          onSuccessCallback();
        }
        setTimeout(() => {
          setFormData(INITIAL_FORM_DATA);
        }, 100);
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
    setFilterCategory,
    loading,
    formData,
    setFormData,
    formError,
    formSuccess,
    handleRegister,
    checkResult,   
    handleCheck,
    checkEmail,    
    setCheckEmail
  };
};