import { styled } from '@mui/material/styles';
import { Card, Paper, Box } from '@mui/material';

export const RootCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const FiltersBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
  flexWrap: 'wrap',
}));
