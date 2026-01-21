import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Paper, Box, Tabs, Tab, Container } from '@mui/material';
import { PersonAdd, Search, People, DirectionsRun, EmojiEvents } from '@mui/icons-material';

import { RegisterContainer } from './containers/RegisterContainer';
import { CheckStatusContainer } from './containers/CheckStatusContainer';
import { ContestantsContainer } from './containers/ContestantsContainer';
import { RacesContainer } from './containers/RacesContainer';
import { PaymentForm } from './components/PaymentForm';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const paths = ['/register', '/check', '/contestants', '/races'];
  const activeTab = paths.indexOf(location.pathname) || 0;

  const handleTabChange = (_: any, newValue: number) => navigate(paths[newValue]);

  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      
      <AppBar position="static" sx={{ bgcolor: '#ff6f00' }}>
        <Toolbar>
          <EmojiEvents sx={{ mr: 2, fontSize: 40 }} />
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Скопје Маратон</Typography>
            <Typography variant="caption">Трчај за здравје, трчај за живот</Typography>
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
          <Route path="/register" element={<RegisterContainer />} />
          <Route path="/check" element={<CheckStatusContainer />} />
          <Route path="/contestants" element={<ContestantsContainer />} />
          <Route path="/races" element={<RacesContainer />} />
          <Route path="/payment" element={<PaymentForm />} />
        </Routes>
      </Container>
    </Box>
  );
};

export default App;
