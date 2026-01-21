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

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 350px' }, gap: 3, mb: 3 }}>
      <RegisterTab
        formData={contestantData.formData}
        setFormData={contestantData.setFormData}
        formError={contestantData.formError}
        formSuccess={contestantData.formSuccess}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onRegister={() => contestantData.handleRegister(() => navigate('/payment'))}
      />

      <OrderForm 
        selectedCategory={selectedCategory}
      />
    </Box>
  );
};
