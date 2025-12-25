import { styled } from '@mui/material/styles';
import { Card, Paper, Box } from '@mui/material';

export const RootCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const FiltersBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const ContestantPaper = styled(Paper)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

export const EmptyState = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(6),
}));
