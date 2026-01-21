import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography, Box, Divider, Button } from '@mui/material';

export const CartCard = styled(Card)({
  borderRadius: 8,
  boxShadow: '0px 2px 8px rgba(0,0,0,0.08)',
  border: '1px solid #e0e0e0',
  backgroundColor: '#fafafa',
});

export const CartCardContent = styled(CardContent)({
  padding: 24,
});

export const CartHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 16,
});

export const CartTitleBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const CartTitle = styled(Typography)({
  fontWeight: 600,
  fontSize: '0.95rem',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
});

export const CartDivider = styled(Divider)({
  marginBottom: 16,
});

export const OrgBox = styled(Box)({
  marginBottom: 24,
});

export const OrgName = styled(Typography)({
  fontWeight: 600,
  marginBottom: 4,
  fontSize: '0.875rem',
});

export const OrgEmail = styled(Typography)({
  fontSize: '0.75rem',
});

export const CartItemBox = styled(Box)({
  marginBottom: 16,
});

export const CartItemRow = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const CartItemName = styled(Typography)({
  fontSize: '0.875rem',
});

export const CartItemActions = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const CartItemPrice = styled(Typography)({
  fontWeight: 500,
  fontSize: '0.875rem',
});

export const TotalBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 24,
  marginTop: 16,
});

export const TotalLabel = styled(Typography)({
  fontWeight: 600,
  fontSize: '1rem',
});

export const TotalPrice = styled(Typography)({
  fontWeight: 700,
  fontSize: '1.25rem',
});

export const AddParticipantButton = styled(Button)({
  marginBottom: 16,
  padding:
  textTransform: 'none',
  borderColor: '#ddd',
  color: '#333',
  fontSize: '0.8rem',
  fontWeight: 500,
  padding: '2px 2px',
  '&:hover': {
    borderColor: '#bbb',
    backgroundColor: '#f5f5f5',
  },
});

export const PaymentButtonsBox = styled(Box)({
  display: 'flex',
  gap: 8,
  marginBottom: 16,
});

export const BankButton = styled(Button)({
  textTransform: 'none',
  borderColor: '#ddd',
  color: '#333',
  fontSize: '0.75rem',
  fontWeight: 500,
  padding: '10px 12px',
  '&:hover': {
    borderColor: '#bbb',
    backgroundColor: '#f5f5f5',
  },
});

export const InvoiceButton = styled(Button)({
  textTransform: 'none',
  borderColor: '#ddd',
  color: '#333',
  fontSize: '0.75rem',
  fontWeight: 500,
  padding: '10px 12px',
  '&:hover': {
    borderColor: '#bbb',
    backgroundColor: '#f5f5f5',
  },
});

export const PayOnlineButton = styled(Button)({
  backgroundColor: '#4caf50',
  color: 'white',
  textTransform: 'none',
  paddingTop: 12,
  paddingBottom: 12,
  fontWeight: 600,
  fontSize: '0.875rem',
  '&:hover': {
    backgroundColor: '#45a049',
  },
});