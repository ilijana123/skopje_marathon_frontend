import { Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ShoppingCart } from '../components/ShoppingCart';
import { Category } from '../types';

interface LocationState {
  selectedCategory: Category;
  contestantData: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

export const ShoppingCartContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState | undefined;

  useEffect(() => {
    if (!state || !state.selectedCategory || !state.contestantData) {
      navigate('/register', { replace: true });
    }
  }, [state, navigate]);

  if (!state || !state.selectedCategory || !state.contestantData) {
    return null;
  }

  const { selectedCategory, contestantData } = state;

  const handleAddParticipant = () => {
    navigate('/register');
  };

  const handlePayByCard = () => {
    console.log('Pay by card');
    // TODO: Implement card payment
  };

  const handlePayByInvoice = () => {
    console.log('Pay by invoice');
    // TODO: Implement invoice payment
  };

  const handlePayOnline = () => {
    console.log('Pay online');
    navigate('/payment', { 
      state: { 
        selectedCategory,
        contestantData
      } 
    });
  };

  return (
    <Box}>
      <ShoppingCart
        selectedCategory={selectedCategory}
        contestantData={contestantData}
        onAddParticipant={handleAddParticipant}
        onPayByCard={handlePayByCard}
        onPayByInvoice={handlePayByInvoice}
        onPayOnline={handlePayOnline}
      />
    </Box>
  );
};      