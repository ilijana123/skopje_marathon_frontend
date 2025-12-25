import { useState } from 'react';
import { Contestant, FormData } from '../types';
import { 
  validateRegistrationForm
} from '../utils/validation';
import { MESSAGES } from '../constants';
import { CategoryType } from '../types/CategoryType';
import { useNavigate } from 'react-router-dom';

const INITIAL_FORM_DATA: FormData = {
  firstName: '',
  lastName: '',
  ge
  email: '',
  age: '',
  category: CategoryType.FIVE_KM
};
{
  "firstName": "Radovan",
  "lastName": "Simonovski",
  "gender": "Male",
  "team": "KU",
  "country": "Macedonia",
  "email": "radovan@example.com",
  "password": "Radovan123!",
  "age": 50,
  "categoryType": "TEN_KM"
}

export const useContestants = () => {
  const navigate = useNavigate();
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
    }

    const newContestant: Contestant = {
      ...formData,
      age: parseInt(formData.age),
      registrationNumber,
      isPaid: false
    };

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
    checkResult,
    handleRegister,
    handlePayment,
    handleCheck
  };
};