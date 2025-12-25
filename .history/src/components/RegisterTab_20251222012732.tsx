import {
  Card, CardContent, Grid, TextField, Button, Alert,
  Typography, Divider, InputAdornment, FormControl,
  InputLabel, Select, MenuItem
} from '@mui/material';
import { Email, Cake, Error, CheckCircle } from '@mui/icons-material';
import { Category, FormData } from '../types';
import { fetchCategoriesWithErrorHandling } from '../services/categoryService';
import { useEffect } from 'react';

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

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const data = await fetchCategoriesWithErrorHandling();
        setCategories(data || []);
      } catch (error) {
        console.error("Fetch categories error:", error);
        setCategories([]);
      }
  return (
    <Grid container justifyContent="center">
      <Grid>
        <Card>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Пријава на учесник
            </Typography>
            <Divider sx={{ mb: 3 }} />
            
            <Grid container spacing={3}>
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
              <Grid>
                <TextField
                  fullWidth
                  label="Е-пошта"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  variant="outlined"
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
              <Grid>
                <FormControl fullWidth>
                  <InputLabel>Категорија</InputLabel>
                  <Select
                    value={formData.category}
                    label="Категорија"
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                  >
                    {CATEGORIES.map((cat: string) => (
                      <MenuItem key={cat} value={cat}>{cat}</MenuItem>
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
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  onClick={onRegister}
                  sx={{ bgcolor: '#ff6f00', '&:hover': { bgcolor: '#f57c00' } }}
                >
                  Пријави се
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};