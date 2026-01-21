import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Divider, 
  Button,
  IconButton
} from '@mui/material';
import { ShoppingBasket, Close } from '@mui/icons-material';
import { Category } from '../types/Category';

interface CartItem {
  name: string;
  price: string;
  quantity: number;
}

interface ShoppingCartProps {
  items?: CartItem[];
  total: string;
  onAddParticipant?: () => void;
  onPayByCard?: () => void;
  onPayByInvoice?: () => void;
  onPayOnline?: () => void;
  selectedCategory: Category | null;
}

export const ShoppingCart = ({ 
  items = [{ name: 'Полумаратон (2500 ден)', price: '2500 ден', quantity: 1 }],
  total = '2500 ден',
  onAddParticipant,
  onPayByCard,
  onPayByInvoice,
  onPayOnline
  selectedCate
}: ShoppingCartProps) => {
  return (
    <Card sx={{ 
      borderRadius: 2, 
      boxShadow: 1, 
      border: '1px solid #e0e0e0',
      bgcolor: '#f9f9f9'
    }}>
      <CardContent sx={{ p: 3 }}>
        
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ShoppingBasket />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              КОШНИЧКА - ВИЗА ЕР СКОПСКИ МАРАТОН 2025
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Organization Info */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
            МАРАТОНЕС 5К
          </Typography>
          <Typography variant="caption" color="text.secondary">
            maratones@outlook.com
          </Typography>
        </Box>

        {/* Cart Items */}
        {items.map((item, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body2">
                {item.name}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {item.price}
                </Typography>
                <IconButton size="small" sx={{ color: 'text.secondary' }}>
                  <Close fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          </Box>
        ))}

        <Divider sx={{ my: 2 }} />

        {/* Total */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            Вкупно:
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {total}
          </Typography>
        </Box>

        {/* Add Participant Button */}
        <Button
          fullWidth
          variant="outlined"
          onClick={onAddParticipant}
          sx={{
            mb: 2,
            textTransform: 'none',
            borderColor: '#ddd',
            color: 'text.primary',
            '&:hover': {
              borderColor: '#bbb',
              bgcolor: '#f5f5f5'
            }
          }}
        >
          ПРИЛАГАЈ НОВ УЧЕСНИК
        </Button>

        {/* Payment Buttons */}
        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <Button
            fullWidth
            variant="outlined"
            onClick={onPayByCard}
            sx={{
              textTransform: 'none',
              borderColor: '#ddd',
              color: 'text.primary',
              fontSize: '0.75rem',
              '&:hover': {
                borderColor: '#bbb',
                bgcolor: '#f5f5f5'
              }
            }}
          >
            ПЛАТИ ПРЕКУ БАНКА
          </Button>
          <Button
            fullWidth
            variant="outlined"
            onClick={onPayByInvoice}
            sx={{
              textTransform: 'none',
              borderColor: '#ddd',
              color: 'text.primary',
              fontSize: '0.75rem',
              '&:hover': {
                borderColor: '#bbb',
                bgcolor: '#f5f5f5'
              }
            }}
          >
            ПЛАТИ СО ФАКТУРА
          </Button>
        </Box>

        {/* Pay Online Button */}
        <Button
          fullWidth
          variant="contained"
          onClick={onPayOnline}
          sx={{
            bgcolor: '#4caf50',
            color: 'white',
            textTransform: 'none',
            py: 1.5,
            fontWeight: 600,
            '&:hover': {
              bgcolor: '#45a049'
            }
          }}
        >
          ПЛАТИ ОНЛАЈН →
        </Button>

      </CardContent>
    </Card>
  );
};