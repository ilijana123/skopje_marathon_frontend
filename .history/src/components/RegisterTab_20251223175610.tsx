import {
  CardContent, Grid, TextField, Alert,
  Typography, Divider, InputAdornment, FormControl,
  InputLabel, Select, MenuItem
} from '@mui/material';
import { Email, Cake, Error, CheckCircle, Password } from '@mui/icons-material';
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
}

export const RegisterTab = ({
  formData,
  setFormData,
  formError,
  formSuccess,
  onRegister
} : RegisterTabProps) => {
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
        <FormCard>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Пријава на учесник
            </Typography>
            <Divider sx={{ mb: 3 }} />
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid>
                <TextField
                  fullWidth
                  label="Име"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  variant="outlined"
                />
              </Grid>
              <Grid>
                <TextField
                  fullWidth
                  label="Презиме"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  variant="outlined"
                />
              </Grid>
              <Grid size={2}>
                <FormControl fullWidth>
                  <InputLabel>Пол</InputLabel>
                  <Select
                    value={formData.gender}
                    label="Пол"
                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                  >
                    {genders.map((gender: string) => (
                      <MenuItem key={gender} value={gender}>{gender}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid>
                <TextField
                  fullWidth
                  label="Тим"
                  value={formData.team}
                  onChange={(e) => setFormData({...formData, team: e.target.value})}
                  variant="outlined"
                />
              </Grid>
              <Grid size = {2}>
                <FormControl fullWidth>
                  <InputLabel>Земја</InputLabel>
                  <Select
                    value={formData.country}
                    label="Земја"
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                  >
                    {countries.map((country: string) => (
                      <MenuItem key={country} value={country}>{country}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid>
                <TextField
                  fullWidth
                  label="Е-пошта"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  variant="outlined"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email />
                        </InputAdornment>
                      ),
                    },
                }}
                />
              </Grid>
              <Grid>
                <TextField
                  fullWidth
                  label="Лозинка"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  variant="outlined"
                  slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Password />
                      </InputAdornment>
                    ),
                  },
                }}
                />
              </Grid>
              <Grid>
                <TextField
                  fullWidth
                  label="Возраст"
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Cake />
                      </InputAdornment>
                    ),
                    inputProps: { min: 16 }
                  }}
                />
              </Grid>
              <Grid size={2}>
                <FormControl fullWidth>
                  <InputLabel>Категорија</InputLabel>
                  <Select
                    value={formData.categoryType}
                    label="Категорија"
                    onChange={(e) => setFormData({...formData, categoryType: e.target.value})}
                  >
                    {categories.map((cat: Category) => (
                      <MenuItem key={cat.type} value={cat.type}>{cat.type}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {formError && (
                <Grid>
                  <Alert severity="error" icon={<Error />}>
                    {formError}
                  </Alert>
                </Grid>
              )}

              {formSuccess && (
                <Grid>
                  <Alert severity="success" icon={<CheckCircle />}>
                    {formSuccess}
                  </Alert>
                </Grid>
              )}

              <Grid>
                <SubmitButton
                  fullWidth
                  variant="contained"
                  size="large"
                  onClick={onRegister}
                  sx={{ bgcolor: '#ff6f00', '&:hover': { bgcolor: '#f57c00' } }}
                >
                  Пријави се
                </SubmitButton>
              </Grid>
            </Grid>
          </CardContent>
        </FormCard>
      </Grid>
    </RootGrid>
  );
};