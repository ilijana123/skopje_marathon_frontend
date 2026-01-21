import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Divider, 
  TextField, 
  Button 
} from '@mui/material';

export const OrderForm = () => {
  return (
    <Card sx={{ 
      borderRadius: 4, // Slightly rounder corners like the image
      boxShadow: '0px 4px 20px rgba(0,0,0,0.05)', 
      border: '1px solid #f0f0f0',
      maxWidth: 350,
      minHeight: 450, // Setting a height to allow space to grow
      display: 'flex',
      flexDirection: 'column'
    }}>
      <CardContent sx={{ 
        p: 3, 
        flexGrow: 1, 
        display: 'flex', 
        flexDirection: 'column' 
      }}>
        
        {/* Header Section */}
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#333' }}>
          Order
        </Typography>

        {/* Item Section */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="body2" sx={{ color: '#555' }}>
            Registration – 42km
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            90,00 лв. / 46,02 €
          </Typography>
        </Box>

        <Divider sx={{ mb: 2, borderColor: '#f0f0f0' }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            Total
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            90,00 лв. / 46,02 €
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
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
              fontSize: '0.8rem'
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