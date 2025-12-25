import { 
  CardContent, Grid, TextField, Typography, Divider, 
  InputAdornment, FormControl, InputLabel, Select, MenuItem, 
  List, ListItem, ListItemText, Box, Chip, CircularProgress 
} from '@mui/material';
import { Search, FilterList, People } from '@mui/icons-material';
import { useContestants } from '../hooks/useContestants'; // Path to your hook
import { RootCard, FiltersBox, ContestantPaper, EmptyState } from './ContestantTab.styles';
import { Contestant } from '../types';
interface ContestantsTabProps {
  contestants: Contestant[];
}

export const ContestantsTab = ({ contestants }: ContestantsTabProps) => {
  const { 
    categories, 
    searchTerm, 
    setSearchTerm, 
    filterCategory, 
    setFilterCategory, 
    loading 
  } = useContestants();

  return (
    <RootCard>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom fontWeight="bold">Трчај со нас</Typography>
        <Divider sx={{ mb: 3 }} />
        
        <FiltersBox>
          <Grid container spacing={2}>
            <Grid>
              <TextField
                fullWidth
                placeholder="Пребарај по име..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (<InputAdornment position="start"><Search /></InputAdornment>),
                }}
              />
            </Grid>
            <Grid>
              <FormControl fullWidth>
                <InputLabel>Филтер по категорија</InputLabel>
                <Select
                  value={filterCategory}
                  label="Филтер по категорија"
                  onChange={(e) => setFilterCategory(e.target.value)}
                  startAdornment={(<InputAdornment position="start"><FilterList /></InputAdornment>)}
                >
                  <MenuItem value="all">Сите категории</MenuItem>
                  {categories.map(cat => (
                    <MenuItem key={cat.type} value={cat.type}>{cat.type}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>           
        </FiltersBox>

        <Typography variant="body2" color="text.secondary" mb={2}>
          Вкупно учесници: {contestants.length}
        </Typography>

        {loading ? (
          <Box display="flex" justifyContent="center" py={4}><CircularProgress /></Box>
        ) : (
          <List>
            {contestants.map((runner, idx) => (
              <ContestantPaper key={idx}>
                <ListItem>
                  <ListItemText
                    primary={<Typography variant="h6">{runner.firstName} {runner.lastName}</Typography>}
                    secondary={
                      <Box mt={1}>
                        <Chip label={runner.distance} size="small" color="primary" sx={{ mr: 1 }} />
                        <Chip label={`${runner.age} год.`} size="small" />
                      </Box>
                    }
                  />
                </ListItem>
              </ContestantPaper>
            ))}

            {contestants.length === 0 && (
              <EmptyState>
                <People sx={{ fontSize: 80, color: 'text.disabled', mb: 2 }} />
                <Typography color="text.secondary">Нема пронајдени учесници</Typography>
              </EmptyState>
            )}
          </List>
        )}
      </CardContent>
    </RootCard>
  );
};