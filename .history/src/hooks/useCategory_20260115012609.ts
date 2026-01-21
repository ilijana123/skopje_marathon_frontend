import { useState } from 'react';
import { Category } from '../types';

export const useCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  return {
    selectedCategory,
    setSelectedCategory,
  };
};