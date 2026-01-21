import { RegisterTab } from "../components/RegisterTab";
import { OrderForm } from "../components/OrderForm";
import { useContestants } from "../hooks/useContestants";
import { useCategory } from "../hooks/useCategory";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const RegisterContainer = () => {
  const navigate = useNavigate();
  const contestantData = useContestants();
  const { selectedCategory, setSelectedCategory } = useCategory();

  const handleRegisterAndNavigate = async () => {
    await contestantData.handleRegister(() => {
      navigate('/cart', {
        state: {
          selectedCategory,
          contestantData: {
            firstName: contestantData.formData.firstName,
            lastName: contestantData.formData.lastName,
            email: contestantData.formData.email
          }
        }
      });
    });
  };

  return (
    <Box sx={{ 
      display: 'grid', 
      gridTemplateColumns: { xs: '1fr', lg: '1fr 350px' }, 
      gap: 3,
      mb: 3
    }}>
      <RegisterTab 
        formData={contestantData.formData} 
        setFormData={contestantData.setFormData}
        formError={contestantData.formError}
        formSuccess={contestantData.formSuccess}
        onRegister={handleRegisterAndNavigate}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <OrderForm selectedCategory={selectedCategory} />
    </Box>
  );
};