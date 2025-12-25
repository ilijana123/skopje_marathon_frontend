import { styled } from '@mui/material/styles';
import { Card, Paper, Box } from '@mui/material';

export const RootCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),
}));
