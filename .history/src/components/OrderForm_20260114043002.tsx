import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  TextField, 
  Button 
} from '@mui/material';

export const OrderForm = () => {
  return (
    <Card sx={{ 
      borderRadius: 2, 
      boxShadow: 1, 
      border: '1px solid #e0e0e0',
      maxWidth: 300
    }}>
      <CardContent sx={{ p: 3 }}>
        
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
          Order
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
          <Typography variant="body2" color="text.secondary">
            Registration – 42km
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            90,00 лв. / 46,02 €
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            Total
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            90,00 лв. / 46,02 €
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <TextField
            size="small"
            placeholder="Coupon code"
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#fafafa'
              }
            }}
          />
          <Button
            variant="outlined"
            sx={{ 
              textTransform: 'none',
              color: '#d32f2f',
              borderColor: '#d32f2f',
              '&:hover': {
                borderColor: '#d32f2f',
                backgroundColor: 'rgba(211, 47, 47, 0.04)'
              },
              whiteSpace: 'nowrap',
              minWidth: 'auto',
              px: 2
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
            bgcolor: '#616161',
            color: 'white',
            textTransform: 'none',
            py: 1.5,
            '&:hover': {
              bgcolor: '#424242'
            }
          }}
        >
          Continue
        </Button>

      </CardContent>
    </Card>
  );
};