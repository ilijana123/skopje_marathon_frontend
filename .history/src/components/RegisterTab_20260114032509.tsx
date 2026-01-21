import {
  CardContent,
  Grid,
  TextField,
  Alert,
  Typography,
  Divider,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box
} from '@mui/material';
import { Email, Cake, Error, CheckCircle } from '@mui/icons-material';
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
    <RootGrid container>
      <Grid>
        <FormCard sx={{ borderRadius: 3, boxShadow: 3 }}>
          <CardContent sx={{ p: 3 }}>
            
            {/* Header */}
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Contestant
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  42km
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="body1" sx={{ color: '#1a237e', fontWeight: 'bold' }}>
                  90,00 лв. / 46,02 €
                </Typography>
              </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />

            {/* FORM FIELDS */}
            <Grid container spacing={2}>

              <Grid>
                <TextField
                  fullWidth
                  label="First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </Grid>

              <Grid>
                <TextField
                  fullWidth
                  label="Last Name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </Grid>

              <Grid>
                <FormControl fullWidth>
                  <InputLabel>Gender</InputLabel>
                  <Select
                    value={formData.gender}
                    label="Gender"
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  >
                    {genders.map((gender) => (
                      <MenuItem key={gender} value={gender}>{gender}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid>
                <TextField
                  fullWidth
                  label="Team"
                  value={formData.team}
                  onChange={(e) => setFormData({ ...formData, team: e.target.value })}
                />
              </Grid>

              <Grid>
                <FormControl fullWidth>
                  <InputLabel>Country</InputLabel>
                  <Select
                    value={formData.country}
                    label="Country"
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  >
                    {countries.map((country) => (
                      <MenuItem key={country} value={country}>{country}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid>
                <TextField
                  fullWidth
                  type="email"
                  label="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid>
                <TextField
                  fullWidth
                  label="Date of Birth"
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Cake />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid>
                <TextField
                  fullWidth
                  label="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </Grid>

              {/* ERROR MESSAGE */}
              {formError && (
                <Grid>
                  <Alert severity="error" icon={<Error />}>
                    {formError}
                  </Alert>
                </Grid>
              )}

              {/* SUCCESS MESSAGE */}
              {formSuccess && (
                <Grid>
                  <Alert severity="success" icon={<CheckCircle />}>
                    {formSuccess}
                  </Alert>
                </Grid>
              )}

              {/* REMOVE BUTTON */}
              {onRemove && (
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={onRemove}
                    startIcon={<span style={{ fontWeight: 'bold' }}>🗑</span>}
                  >
                    Remove contestant
                  </Button>
                </Grid>
              )}

              {/* SUBMIT */}
              <Grid item xs={12}>
                <SubmitButton
                  fullWidth
                  variant="contained"
                  size="large"
                  onClick={onRegister}
                  sx={{ bgcolor: '#ff6f00', '&:hover': { bgcolor: '#f57c00' } }}
                >
                  Register
                </SubmitButton>
              </Grid>

            </Grid>
          </CardContent>
        </FormCard>
      </Grid>
    </RootGrid>
  );
};
