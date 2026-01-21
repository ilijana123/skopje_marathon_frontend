import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Paper, Box, Tabs, Tab } from '@mui/material';
import { PersonAdd, Search, People, DirectionsRun, EmojiEvents } from '@mui/icons-material';
import { useContestants } from './hooks/useContestants';
import { useRaces } from './hooks/useRaces';
import { RegisterTab } from './components/RegisterTab';
import { CheckStatusTab } from './components/CheckStatusTab';
import { ContestantsTab } from './components/ContestantsTab';
import { RacesTab } from './components/RacesTab';
import { CommentDialog } from './components/CommentDialog';
import { PaymentForm } from './components/PaymentForm';
import { OrderForm } from './components/OrderForm';
import { ShoppingCart } from './components/ShoppingCart';
import { Category } from './types';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const contestantData = useContestants();
  const raceData = useRaces();
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  
  const paths = ['/register', '/check', '/contestants', '/races'];
  const currentTabIndex = paths.indexOf(location.pathname);
  const activeTab = currentTabIndex === -1 ? 0 : currentTabIndex;

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    navigate(paths[newValue]);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      <AppBar position="static" sx={{ bgcolor: '#ff6f00' }}>
        <Toolbar>
          <EmojiEvents sx={{ mr: 2, fontSize: 40 }} />
          <Box>
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
              Скопје Маратон
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.9 }}>
              Трчај за здравје, трчај за живот
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Paper sx={{ borderRadius: 0 }}>
        <Tabs value={activeTab} onChange={handleTabChange} centered>
          <Tab icon={<PersonAdd />} label="Пријава" />
          <Tab icon={<Search />} label="Проверка" />
          <Tab icon={<People />} label="Трчај со нас" />
          <Tab icon={<DirectionsRun />} label="Минати трки" />
        </Tabs>
      </Paper>

      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/register" replace />} />
          
          <Route path="/register" element={
            <Box>
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
                  onRegister={() => contestantData.handleRegister(() => navigate('/payment'))}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
                
                <OrderForm selectedCategory={selectedCategory} />
              </Box>
              <Box sx={{ 
                bgcolor: '#fff9c4', 
                border: '1px solid #f9a825',
                borderRadius: 1,
                p: 2,
                mb: 3
              }}>
                <Typography variant="body2">
                  Треба да извршите уплата за да регистрацијата биде комплетирана. Регистрација без извршена уплата се смета за невалидна!
                </Typography>
              </Box>
              <ShoppingCart 
                total="2500 ден"
                onAddParticipant={() => console.log('Add participant')}
                onPayByCard={() => console.log('Pay by card')}
                onPayByInvoice={() => console.log('Pay by invoice')}
                onPayOnline={() => navigate('/payment')}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </Box>
          } />  

          <Route path="/check" element={
            <CheckStatusTab 
              checkEmail={contestantData.checkEmail}
              setCheckEmail={contestantData.setCheckEmail}
              checkResult={contestantData.checkResult}
              onCheck={contestantData.handleCheck}
            />
          } />

          <Route path="/contestants" element={
            <ContestantsTab 
              contestants={contestantData.contestants}
              categories={contestantData.categories}
              searchTerm={contestantData.searchTerm}
              setSearchTerm={contestantData.setSearchTerm}
              filterCategory={contestantData.filterCategory}
              setFilterCategory={contestantData.setFilterCategory}
              loading={contestantData.loading}
            />
          } />

          <Route path="/races" element={
            <RacesTab 
              races={raceData.races} 
              onOpenCommentDialog={raceData.openCommentDialog}
            />
          } />

          <Route path="/payment" element={
            <PaymentForm/>
          } />  
        </Routes>
      </Container>

      <CommentDialog
        open={raceData.commentDialog}
        comment={raceData.newComment}
        onCommentChange={raceData.setNewComment}
        onClose={raceData.closeCommentDialog}
        onSubmit={raceData.handleAddComment}
      />
    </Box>
  );
};

export default App;