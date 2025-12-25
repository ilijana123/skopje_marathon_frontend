import React from 'react';
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

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const contestantData = useContestants();
  const raceData = useRaces();

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

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/register" replace />} />
          
          <Route path="/register" element={
            <RegisterTab 
              formData={contestantData.formData} 
              setFormData={contestantData.setFormData}
              formError={contestantData.formError}
              formSuccess={contestantData.formSuccess}
              onRegister={() => contestantData.handleRegister()}
            />
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