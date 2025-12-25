import { useState } from 'react';
import { Contestant, FormData } from '../types';
import { 
  validateRegistrationForm
} from '../utils/validation';
import { MESSAGES } from '../constants';
import { CategoryType } from '../types/CategoryType';
//import { useNavigate } from 'react-router-dom';

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
  const [checkEmail, setCheckEmail] = useState('');

  const handleRegister = async () => {
    setFormError('');
    setFormSuccess('');

    const error = validateRegistrationForm(formData, contestants);
    if (error) {
      setFormError(error);
      return;

    setContestants([...contestants, newContestant]);
    setFormSuccess(MESSAGES.SUCCESS_REGISTRATION(registrationNumber));
    setFormData(INITIAL_FORM_DATA);
  };


  return {
    contestants,
    formData,
    setFormData,
    formError,
    formSuccess,
    checkEmail,
    setCheckEmail,
    handleRegister,
  };
};