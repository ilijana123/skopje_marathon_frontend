import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Divider, 
  TextField, 
  Button 
} from '@mui/material';
import { Category } from '../types';

interface OrderFormProps {
  selectedCategory: Category | null;
}

export const OrderForm = ({ selectedCategory }: OrderFormProps) => {
  return (
    <Card sx={{ 
      borderRadius: 4, 
      boxShadow: '0px 4px 20px rgba(0,0,0,0.05)', 
      border: '1px solid #f0f0f0',
      maxWidth: 350,
      minHeight: 450, 
      display: 'flex',
      flexDirection: 'column'
    }}>
      <CardContent sx={{ 
        p: 3, 
        flexGrow: 1, 
        display: 'flex', 
        flexDirection: 'column' 
      }}>
        
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#333' }}>
          Order
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="body2" sx={{ color: '#555' }}>
            Registration – {selectedCategory?.distance || '42'}km
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {selectedCategory?.price || '90,00'} ден.
          </Typography>
        </Box>

        <Divider sx={{ mb: 2, borderColor: '#f0f0f0' }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            Total
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            {selectedCategory?.price || '90,00'} лв. / 46,02 €
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: 'flex', mb: 2 }}>
          <TextField
            size="small"
            placeholder="Coupon code"
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#fff',
                borderRadius: 2,
                fontSize: '0.875rem'
              }
            }}
          />
          <Button
            variant="outlined"
            sx={{ 
              textTransform: 'none',
              color: '#e91e63', 
              borderColor: '#e91e63',
              borderRadius: 2,
              '&:hover': {
                borderColor: '#c2185b',
                backgroundColor: 'rgba(233, 30, 99, 0.04)'
              },
              whiteSpace: 'nowrap',
              px: 2,
              fontSize: '0.8rem',
              justifyContent: 'center',
            }}
          >
            Apply coupon
          </Button>
        </Box>

        <Button
          fullWidth
          variant="contained"
          size="large"
          sx={{
            bgcolor: '#757575', 
            color: 'white',
            textTransform: 'none',
            borderRadius: 2,
            py: 1.5,
            boxShadow: 'none',
            '&:hover': {
              bgcolor: '#616161',
              boxShadow: 'none'
            }
          }}
        >
          Continue
        </Button>

      </CardContent>
    </Card>
  );
};