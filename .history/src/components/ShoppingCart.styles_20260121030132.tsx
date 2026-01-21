import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';

export const PaymentWarningBox = styled(Box)({
  backgroundColor: '#fff9c4',
  border: '1px solid #f9a825',
  borderRadius: 4,
  padding: '12px 16px',
  marginBottom: 16,
});

export const CartCard = styled(Card)({
  borderRadius: 8,
  boxShadow: '0px 2px 8px rgba(0,0,0,0.08)',
  border: '1px solid #e0e0e0',
  backgroundColor: '#fafafa',
});

export const CartCardContent = styled(CardContent)({
  padding: 24,
  '&:last-child': {
    paddingBottom: 24,
  }
});

export const CartHeader = styled(Box)({
  marginBottom: 20,
});

export const CartTitleBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const CartTitle = styled(Typography)({
  fontWeight: 300,
  fontSize: '0.85rem',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  color: '#333',
});

export const OrgBox = styled(Box)({
  marginBottom: 24,
});

export const OrgName = styled(Typography)({
  fontWeight: 600,
  marginBottom: 2,
  fontSize: '0.875rem',
  color: '#333',
});

export const OrgEmail = styled(Typography)({
  fontSize: '0.75rem',
  color: '#666',
});

export const CartItemBox = styled(Box)({
  backgroundColor: 'white',
  padding: 16,
  borderRadius: 4,
  marginBottom: 16,
});

export const CartItemRow = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 12,
});

export const CartItemName = styled(Typography)({
  fontWeight: 600,
  fontSize: '1rem',
});

export const CartItemPrice = styled(Typography)({
  fontWeight: 600,
  fontSize: '0.875rem',
  color: '#333',
  textAlign: 'right',
});

export const TotalBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: 8,
  marginBottom: 24,
  paddingTop: 8,
});

export const TotalLabel = styled(Typography)({
  fontWeight: 600,
  fontSize: '1rem',
  color: '#333',
});

export const TotalPrice = styled(Typography)({
  fontWeight: 600,
  fontSize: '1rem',
  color: '#333',
});

export const AddParticipantButtonBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: 16,
});

export const AddParticipantButton = styled(Button)({
  textTransform: 'none',
  borderColor: '#ddd',
  color: '#333',
  fontSize: '0.75rem',
  fontWeight: 500,
  padding: '8px 16px',
  '&:hover': {
    borderColor: '#bbb',
    backgroundColor: '#f5f5f5',
  },
});

export const PaymentButtonsBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: 8,
  flexWrap: 'wrap',
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
  padding: '10px 20px',
  fontWeight: 600,
  fontSize: '0.75rem',
  '&:hover': {
    backgroundColor: '#45a049',
  },
});

export const IconButtonBox = styled(Box)({
  border: '1px solid #ddd',
  borderRadius: 4,
  padding: 6,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#f5f5f5',
  }
});

export const CartItemColumn = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  justifyContent: 'flex-start',
});

export const PriceBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: 4,
});

export const RemoveButton = styled(Button)({
  minWidth: 'auto',
  padding: '4px 12px',
  fontSize: '0.7rem',
  textTransform: 'none',
  border: '1px solid #ddd',
  color: '#666',
  '&:hover': {
    backgroundColor: '#f5f5f5',
  }
});