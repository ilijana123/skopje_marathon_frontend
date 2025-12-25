import { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Paper, Box, Tabs, Tab } from '@mui/material';
import { PersonAdd, Search, People, DirectionsRun, EmojiEvents } from '@mui/icons-material';
import { useContestants } from './hooks/useContestants';
import { useRaces } from './hooks/useRaces';
import { RegisterTab } from './components/RegisterTab';
import { CheckStatusTab } from './components/CheckStatusTab';
import { ContestantsTab } from './components/ContestantsTab';
import { RacesTab } from './components/RacesTab';
import { CommentDialog } from './components/CommentDialog';
import { TABS } from './constants';
import { BrowseRouter, Route, Routes, useNavigate, useLocation } from 'react-router-dom';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const pathToTab = {
    '/register': 0,
    '/check': 1,
    '/contestants': 2,
    '/races': 3
  };

  const handleTabChange = (event, newValue) => {
    const paths = ['/register', '/check', '/contestants', '/races'];
    navigate(paths[newValue]);
  };

  const {
    contestants,
    categories,
    searchTerm,
    setSearchTerm,
    filterCategory,
    setFilterCategory,
    loading,
    formData,
    setFormData,
    formError,
    formSuccess,
    checkEmail,
    setCheckEmail,
    checkResult,
    handleRegister,
    handleCheck
  } = useContestants();

  const {
    races,
    commentDialog,
    newComment,
    setNewComment,
    openCommentDialog,
    closeCommentDialog,
    handleAddComment
  } = useRaces();

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
        <Box>
          <Tabs value={pathToTab[location.pathname] || 0} onChange={handleTabChange}>
            <Tab icon={<PersonAdd />} label="Пријава" />
            <Tab icon={<Search />} label="Проверка" />
            <Tab icon={<People />} label="Трчај со нас" />
            <Tab icon={<DirectionsRun />} label="Минати трки" />
          </Tabs>
          <Routes>
            <Route path="/register" element={<RegisterTab {...props} />} />
            <Route path="/check" element={<CheckStatusTab {...props} />} />
            <Route path="/contestants" element={<ContestantsTab {...props} />} />
            <Route path="/races" element={<RacesTab {...props} />} />
            <Route path="/" element={<Navigate to="/register" replace />} />
          </Routes>
  </Box>
      </Paper>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {activeTab === TABS.REGISTER && (
          <RegisterTab
            formData={formData}
            setFormData={setFormData}
            formError={formError}
            formSuccess={formSuccess}
            onRegister={handleRegister}
          />
        )}

        {activeTab === TABS.CHECK && (
          <CheckStatusTab
            checkEmail={checkEmail}
            setCheckEmail={setCheckEmail}
            checkResult={checkResult}
            onCheck={handleCheck}
            //onPayment={handlePayment}
          />
        )}

        {activeTab === TABS.CONTESTANTS && (
          <ContestantsTab
            contestants={contestants}
            categories={categories}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filterCategory={filterCategory}
            setFilterCategory={setFilterCategory}
            loading={loading}
          />
        )}

        {activeTab === TABS.RACES && (
          <RacesTab 
            races={races} 
            onOpenCommentDialog={openCommentDialog}
          />
        )}
      </Container>

      <CommentDialog
        open={commentDialog}
        comment={newComment}
        onCommentChange={setNewComment}
        onClose={closeCommentDialog}
        onSubmit={handleAddComment}
      />
    </Box>
  );
};

export default App;