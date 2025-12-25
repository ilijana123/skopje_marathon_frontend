import React, { useState } from 'react';
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

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const {
    contestants,
    formData,
    setFormData,
    formError,
    formSuccess,
    checkEmail,
    setCheckEmail,
    checkResult,
    handleRegister,
    handlePayment,
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
        <Tabs 
          value={activeTab} 
          onChange={(e, v) => setActiveTab(v)}
          variant="fullWidth"
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab icon={<PersonAdd />} label="Пријава" />
          <Tab icon={<Search />} label="Проверка" />
          <Tab icon={<People />} label="Трчај со нас" />
          <Tab icon={<DirectionsRun />} label="Минати трки" />
        </Tabs>
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
            onPayment={handlePayment}
          />
        )}

        {activeTab === TABS.CONTESTANTS && (
          <ContestantsTab contestants={contestants} />
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