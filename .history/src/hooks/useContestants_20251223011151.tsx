import { useState } from 'react';
import { Contestant, FormData } from '../types';
import { 
  validateRegistrationForm, 
  generateRegistrationNumber, 
  generateStartNumber,
  simulatePayment 
} from '../utils/validation';
import { MESSAGES } from '../constants';
import { CategoryType } from '../types/CategoryType';
const INITIAL_FORM_DATA: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  age: '',
  category: '5km'
};

export const useContestants = () => {
  const [contestants, setContestants] = useState<Contestant[]>([]);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');
  const [checkEmail, setCheckEmail] = useState('');
  const [checkResult, setCheckResult] = useState<Contestant | null>(null);

  const handleRegister = () => {
    setFormError('');
    setFormSuccess('');

    const error = validateRegistrationForm(formData, contestants);
    if (error) {
      setFormError(error);
      return;
    }

    const registrationNumber = generateRegistrationNumber();
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

  const handlePayment = (email: string) => {
    const isSuccess = simulatePayment();
    
    setContestants(contestants.map(p => {
      if (p.email === email && !p.isPaid && isSuccess) {
        return { ...p, isPaid: true, startNumber: generateStartNumber() };
      }
      return p;
    }));

    if (isSuccess) {
      alert(MESSAGES.SUCCESS_PAYMENT);
      setCheckResult(null);
      setCheckEmail('');
    } else {
      alert(MESSAGES.ERROR_PAYMENT);
    }
  };

  const handleCheck = () => {
    const contestant = contestants.find(p => 
      p.email === checkEmail || p.registrationNumber === checkEmail
    );
    setCheckResult(contestant || null);
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