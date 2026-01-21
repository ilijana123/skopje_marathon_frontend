import { CheckCircle, Delete, Error, KeyboardArrowDown } from '@mui/icons-material';
import {
  Alert,
  CardContent,
  FormControl,
  Menu,
  MenuItem,
  Select,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchCategoriesWithErrorHandling } from '../services/categoryService';
import { Category, FormData } from '../types';
import {
  AlertBox,
  CategoryIconButton,
  CategoryMenuItemBox,
  CategoryTypeText,
  ContestantTitle,
  DistanceText,
  FieldBox,
  FieldLabel,
  FormCard,
  FormGrid,
  HeaderBox,
  PriceBox,
  PriceText,
  RegisterContestantButton,
  RegisterContestantButtonBox,
  RemoveButton,
  RemoveButtonBox,
  RequiredAsterisk,
  StyledTextField
} from './RegisterTab.styles';

interface RegisterTabProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  formError: string;
  formSuccess: string;
  onRegister: () => void;
  onRemove?: () => void;
  selectedCategory: Category | null;
  setSelectedCategory: (category: Category | null) => void;
}

export const RegisterTab = ({
  formData,
  setFormData,
  formError,
  formSuccess,
  onRegister,
  onRemove,
  selectedCategory,
  setSelectedCategory
}: RegisterTabProps) => {

  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const genders = ['Male', 'Female'];
  const countries = ['Macedonia', 'Serbia', 'Bulgaria', 'Greece', 'Albania', 'Other'];

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const data = await fetchCategoriesWithErrorHandling();
        setCategories(data || []);
        if (data && data.length > 0 && !selectedCategory) {
          setSelectedCategory(data[0]);
        }
      } catch (error) {
        console.error("Fetch categories error:", error);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCategoryClose = () => {
    setAnchorEl(null);
  };

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    setFormData({ ...formData, categoryType: category.type });
    handleCategoryClose();
  };

  const open = Boolean(anchorEl);

  return (
    <FormCard>
      <CardContent sx={{ p: 3 }}>
        <HeaderBox>
          <FieldBox>
            <ContestantTitle variant="h6">
              Contestant
            </ContestantTitle>
            <DistanceText variant="body2" color="text.secondary">
              {selectedCategory?.distance + "km" || '5km'}
            </DistanceText>
          </FieldBox>
          <PriceBox>
            <PriceText variant="body1">
              {selectedCategory?.price + "ден" || '100ден / xxx€'}
            </PriceText>
            <CategoryIconButton 
              size="small"
              onClick={handleCategoryClick}
            >
              <KeyboardArrowDown 
                sx={{ 
                  fontSize: '25px',
                  color: 'gray.600'
                }} 
              />
            </CategoryIconButton>
      
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleCategoryClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              {categories.map((category) => (
                <MenuItem 
                  key={category.distance || category.type}
                  onClick={() => handleCategorySelect(category)}
                  selected={selectedCategory?.type === category.type}
                >
                  <CategoryMenuItemBox>
                    <CategoryTypeText variant="body2">
                      {category.type}
                    </CategoryTypeText>
                    <DistanceText variant="caption" color="text.secondary">
                      {category.price + "ден"}
                    </DistanceText>
                  </CategoryMenuItemBox>
                </MenuItem>
              ))}
            </Menu>
          </PriceBox>
        </HeaderBox>

        <FormGrid>
          <FieldBox>
            <FieldLabel variant="body2">
              First Name <RequiredAsterisk>*</RequiredAsterisk>
            </FieldLabel>
            <StyledTextField
              fullWidth
              size="small"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
          </FieldBox>

          <FieldBox>
            <FieldLabel variant="body2">
              Last Name <RequiredAsterisk>*</RequiredAsterisk>
            </FieldLabel>
            <StyledTextField
              fullWidth
              size="small"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
          </FieldBox>

          <FieldBox>
            <FieldLabel variant="body2">
              Email <RequiredAsterisk>*</RequiredAsterisk>
            </FieldLabel>
            <StyledTextField
              fullWidth
              size="small"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </FieldBox>

          <FieldBox>
            <FieldLabel variant="body2">
              Team
            </FieldLabel>
            <StyledTextField
              fullWidth
              size="small"
              value={formData.team}
              onChange={(e) => setFormData({ ...formData, team: e.target.value })}
            />
          </FieldBox>

          <FieldBox>
            <FieldLabel variant="body2">
              Country <RequiredAsterisk>*</RequiredAsterisk>
            </FieldLabel>
            <FormControl fullWidth size="small">
              <Select
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                displayEmpty
                sx={{ backgroundColor: '#fafafa' }}
              >
                <MenuItem value="">—</MenuItem>
                {countries.map((country) => (
                  <MenuItem key={country} value={country}>{country}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </FieldBox>

          <FieldBox>
            <FieldLabel variant="body2">
              Gender <RequiredAsterisk>*</RequiredAsterisk>
            </FieldLabel>
            <FormControl fullWidth size="small">
              <Select
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                displayEmpty
                sx={{ backgroundColor: '#fafafa' }}
              >
                <MenuItem value="">—</MenuItem>
                {genders.map((gender) => (
                  <MenuItem key={gender} value={gender}>{gender}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </FieldBox>

          <FieldBox>
            <FieldLabel variant="body2">
              Date of Birth <RequiredAsterisk>*</RequiredAsterisk>
            </FieldLabel>
            <StyledTextField
              fullWidth
              size="small"
              type="date"
              value={formData.birthDate}
              onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
            />
          </FieldBox>

          <FieldBox>
            <FieldLabel variant="body2">
              Phone Number
            </FieldLabel>
            <StyledTextField
              fullWidth
              size="small"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            />
          </FieldBox>
          {formError && (
            <AlertBox>
              <Alert severity="error" icon={<Error />}>
                {formError}
              </Alert>
            </AlertBox>
          )}

          {formSuccess && (
            <AlertBox>
              <Alert severity="success" icon={<CheckCircle />}>
                {formSuccess}
              </Alert>
            </AlertBox>
          )}

          {onRemove && (
            <RemoveButtonBox>
              <RemoveButton
                variant="contained"
                color="error"
                onClick={onRemove}
                startIcon={<Delete />}
              >
                Remove contestant
              </RemoveButton>
            </RemoveButtonBox>
          )}
        </FormGrid>
        <RegisterContestantButtonBox>
          <RegisterContestantButton
              variant="contained"
              onClick={onRegister}
          >
          РЕГИСТРИРАЈ УЧЕСНИК →
          </RegisterContestantButton>   
        </RegisterContestantButtonBox>
      </CardContent>
    </FormCard>
  );
};