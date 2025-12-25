import { Box, Card, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PageWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: theme.palette.grey[100],
}));

export const PaymentCard = styled(Card)(() => ({
  width: 420,
}));

export const HeaderTitle = styled(Typography)(() => ({
  fontWeight: 'bold',
}));

export const SectionTitle = styled(Typography)(() => ({
  fontWeight: 'bold',
  marginBottom: 16,
}));

export const InfoText = styled(Typography)(() => ({
  cursor: 'pointer',
}));

export const FooterText = styled(Typography)(() => ({
  marginTop: 24,
  textAlign: 'center',
}));
