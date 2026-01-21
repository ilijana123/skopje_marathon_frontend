import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Paper, Box, Tabs, Tab, Container } from '@mui/material';
import { PersonAdd, Search, People, DirectionsRun, EmojiEvents } from '@mui/icons-material';
import { RegisterContainer } from './containers/RegisterContainer';
import { CheckStatusContainer } from './containers/CheckStatusContainer';
import { ContestantsContainer } from './containers/ContestantsContainer';
import { RacesContainer } from './containers/RacesContainer';
import { ShoppingCartContainer } from './containers/ShoppingCartContainer';
import { PaymentForm } from './components/PaymentForm';
import { appStyles } from './appStyles';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const paths = ['/register', '/check', '/contestants', '/races'];
  const activeTab = paths.indexOf(location.pathname);
  
  const currentTab = activeTab === -1 ? false : activeTab;
  
  const handleTabChange = (_: any, newValue: number) => navigate(paths[newValue]);

  return (
    <Box sx={appStyles.root}>
      
      <AppBar position="static" sx={appStyles.appBar}>
        <Toolbar>
          <EmojiEvents sx={appStyles.titleIcon} />
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              Скопје Маратон
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Paper sx={appStyles.tabsPaper}>
        <Tabs value={currentTab} onChange={handleTabChange} centered>
          <Tab icon={<PersonAdd />} label="Пријава" />
          <Tab icon={<Search />} label="Проверка" />
          <Tab icon={<People />} label="Трчај со нас" />
          <Tab icon={<DirectionsRun />} label="Минати трки" />
        </Tabs>
      </Paper>

      <Container maxWidth="xl" sx={appStyles.container}>
        <Routes>
          <Route path="/" element={<Navigate to="/register" replace />} />
          <Route path="/register" element={<RegisterContainer />} />
          <Route path="/check" element={<CheckStatusContainer />} />
          <Route path="/contestants" element={<ContestantsContainer />} />
          <Route path="/races" element={<RacesContainer />} />
          <Route path="/cart" element={<ShoppingCartContainer />} />
          <Route path="/payment" element={<PaymentForm />} />
        </Routes>
      </Container>
    </Box>
  );
};

export default App;