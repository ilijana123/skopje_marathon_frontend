import {
  CardContent,
  Grid,
  TextField,
  Alert,
  Typography,
  Divider,
  FormControl,
  Select,
  MenuItem,
  Button,
  Box,
  Menu,
  IconButton
} from '@mui/material';
import { Error, CheckCircle, KeyboardArrowDown, Delete } from '@mui/icons-material';
import { Category, FormData } from '../types';
import { fetchCategoriesWithErrorHandling } from '../services/categoryService';
import { useEffect, useState } from 'react';
import { RootGrid, FormCard, SubmitButton } from './RegisterTab.styles';

interface RegisterTabProps {
  form