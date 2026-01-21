import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography, Box, Divider, TextField, Button } from '@mui/material';

export const OrderCard = styled(Card)({
  borderRadius: 16,
  boxShadow: '0px 4px 20px rgba(0,0,0,0.05)',
  border: '1px solid #f0f0f0',
  maxWidth: 350,
  minHeight: 450,
  display: 'flex',
  flexDirection: 'column',
});

export const OrderCardContent = styled(CardContent)({
  padding: 24,
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
});

export const OrderTitle = styled(Typography)({
  fontWeight: 700,
  marginBottom: 24,
  color: '#333',
});

export const OrderItemBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 16,
});

export const OrderItemLabel = styled(Typography)({
  color: '#555',
});

export const OrderItemPrice = styled(Typography)({
  fontWeight: 500,
});

export const OrderDivider = styled(Divider)({
  marginBottom: 16,
  borderColor: '#f0f0f0',
});

export const TotalBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
});

export const TotalLabel = styled(Typography)({
  fontWeight: 600,
});

export const TotalPrice = styled(Typography)({
  fontWeight: 600,
});

export const Spacer = styled(Box)({
  flexGrow: 1,
});

export const CouponBox = styled(Box)({
  display: 'flex',
  marginBottom: 16,
});

export const CouponTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#fff',
    borderRadius: 8,
    fontSize: '0.875rem',
  },
});

export const ApplyCouponButton = styled(Button)({
  textTransform: 'none',
  color: '#e91e63',
  borderColor: '#e91e63',
  borderRadius: 8,
  whiteSpace: 'nowrap',
  paddingLeft: 16,
  paddingRight: 16,
  fontSize: '0.8rem',
  justifyContent: 'center',
  '&:hover': {
    borderColor: '#c2185b',
    backgroundColor: 'rgba(233, 30, 99, 0.04)',
  },
});

export const ContinueButton = styled(Button)({
  backgroundColor: '#757575',
  color: 'white',
  textTransform: 'none',
  borderRadius: 8,
  paddingTop: 12,
  paddingBottom: 12,
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#616161',
    boxShadow: 'none',
  },
});