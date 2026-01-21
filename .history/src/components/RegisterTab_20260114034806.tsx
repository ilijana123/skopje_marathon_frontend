import {
  CardContent,
  Grid,
  TextField,
  Alert,
  Typography,
  Divider,
  FormControl,
  Select,
  MenuItem,
  Button,
  Box
} from '@mui/material';
import { Error, CheckCircle } from '@mui/icons-material';
import { Category, FormData } from '../types';
import { fetchCategoriesWithErrorHandling } from '../services/categoryService';
import { useEffect, useState } from 'react';
import { RootGrid, FormCard, SubmitButton } from './RegisterTab.styles';

interface RegisterTabProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  formError: string;
  formSuccess: string;
  onRegister: () => void;
  onRemove?: () => void;
}

export const RegisterTab = ({
  formData,
  setFormData,
  formError,
  formSuccess,
  onRegister,
  onRemove
}: RegisterTabProps) => {

  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  const genders = ['Male', 'Female', 'Other'];
  const countries = ['Macedonia', 'Serbia', 'Bulgaria', 'Greece', 'Albania', 'Other'];

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const data = await fetchCategoriesWithErrorHandling();
        setCategories(data || []);
      } catch (error) {
        console.error("Fetch categories error:", error);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
      <FormCard sx={{ borderRadius: 2, boxShadow: 1, border: '1px solid #e0e0e0' }}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                Contestant
              </Typography>
              <Typography variant="body2" color="text.secondary">
                42km
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                90,00 лв. / 46,02 €
              </Typography>
              <Button 
                size="small" 
                sx={{ 
                  minWidth: 'auto', 
                  p: 0.5,
                  border: '1px solid #ddd',
                  borderRadius: 1
                }}
              >
                ⌄
              </Button>
            </Box>
          </Box>

          <Divider sx={{ mb: 3 }} />

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>

            <Box>
              <Typography variant="body2" sx={{ mb: 0.5, fontSize: '0.875rem' }}>
                First Name <span style={{ color: '#d32f2f' }}>*</span>
              </Typography>
              <TextField
                fullWidth
                size="small"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#fafafa'
                  }
                }}
              />
            </Box>

            <Box>
              <Typography variant="body2" sx={{ mb: 0.5, fontSize: '0.875rem' }}>
                Last Name <span style={{ color: '#d32f2f' }}>*</span>
              </Typography>
              <TextField
                fullWidth
                size="small"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#fafafa'
                  }
                }}
              />
            </Box>

            <Box>
              <Typography variant="body2" sx={{ mb: 0.5, fontSize: '0.875rem' }}>
                Email <span style={{ color: '#d32f2f' }}>*</span>
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#fafafa'
                  }
                }}
              />
            </Box>

            <Box>
              <Typography variant="body2" sx={{ mb: 0.5, fontSize: '0.875rem' }}>
                Team
              </Typography>
              <TextField
                fullWidth
                size="small"
                value={formData.team}
                onChange={(e) => setFormData({ ...formData, team: e.target.value })}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#fafafa'
                  }
                }}
              />
            </Box>

            <Box>
              <Typography variant="body2" sx={{ mb: 0.5, fontSize: '0.875rem' }}>
                Country <span style={{ color: '#d32f2f' }}>*</span>
              </Typography>
              <FormControl fullWidth size="small">
                <Select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  displayEmpty
                  sx={{
                    backgroundColor: '#fafafa'
                  }}
                >
                  <MenuItem value="">—</MenuItem>
                  {countries.map((country) => (
                    <MenuItem key={country} value={country}>{country}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box>
              <Typography variant="body2" sx={{ mb: 0.5, fontSize: '0.875rem' }}>
                Gender <span style={{ color: '#d32f2f' }}>*</span>
              </Typography>
              <FormControl fullWidth size="small">
                <Select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  displayEmpty
                  sx={{
                    backgroundColor: '#fafafa'
                  }}
                >
                  <MenuItem value="">—</MenuItem>
                  {genders.map((gender) => (
                    <MenuItem key={gender} value={gender}>{gender}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box>
              <Typography variant="body2" sx={{ mb: 0.5, fontSize: '0.875rem' }}>
                Date of Birth <span style={{ color: '#d32f2f' }}>*</span>
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="date"
                value={formData.birthDate}
                onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#fafafa'
                  }
                }}
              />
            </Box>

            <Box>
              <Typography variant="body2" sx={{ mb: 0.5, fontSize: '0.875rem' }}>
                Phone Number
              </Typography>
              <TextField
                fullWidth
                size="small"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#fafafa'
                  }
                }}
              />
            </Box>

            {formError && (
              <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1' } }}>
                <Alert severity="error" icon={<Error />}>
                  {formError}
                </Alert>
              </Box>
            )}

            {formSuccess && (
              <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1' } }}>
                <Alert severity="success" icon={<CheckCircle />}>
                  {formSuccess}
                </Alert>
              </Box>
            )}

            {onRemove && (
              <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1' } }}>
                <Button
                  variant="text"
                  color="error"
                  onClick={onRemove}
                  startIcon={<span>🗑</span>}
                  sx={{ 
                    textTransform: 'none',
                    fontWeight: 400,
                    '&:hover': {
                      backgroundColor: 'transparent',
                      textDecoration: 'underline'
                    }
                  }}
                >
                  Remove contestant
                </Button>
              </Box>
            )}
          </Box>
        </CardContent>
      </FormCard>
    </Box>
  );
};