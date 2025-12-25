import React, { useState, useEffect } from 'react';
import {
  Card, CardContent, Grid, TextField, Typography, Divider,
  InputAdornment, FormControl, InputLabel, Select, MenuItem,
  List, ListItem, ListItemAvatar, ListItemText, Avatar,
  Paper, Box, Chip, CircularProgress
} from '@mui/material';
import { Search, FilterList, People } from '@mui/icons-material';
import { Contestant, Category } from '../types';
import { 
  fetchContestantsWithErrorHandling, 
  fetchContestantsByCategory, 
  fetchContestantsByName 
} from '../services/contestantService';
import {
  fetchCategoriesWithErrorHandling
} from '../services/categoryService';

interface ContestantsTabProps {
  contestants?: Contestant[]; 
}

export const ContestantsTab = ({} :ContestantsTabProps) => {
  const [filteredContestants, setFilteredContestants] = useState<Contestant[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
  })
  useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      let data: any = [];
      
      if (searchTerm) {
        data = await fetchContestantsByName(searchTerm);
      } else if (filterCategory !== 'all') {
        data = await fetchContestantsByCategory(filterCategory);
      } else {
        data = await fetchContestantsWithErrorHandling();
      }
      
      const contestantsArray = Array.isArray(data) ? data : (data?.contestants || []);
      
      setFilteredContestants(contestantsArray); 
      
      console.log('Fetched contestants:', contestantsArray);
    } catch (error) {
      console.error("Fetch error:", error);
      setFilteredContestants([]); 
    } finally {
      setLoading(false);
    }
  };

  const delayDebounce = setTimeout(() => {
    fetchData();
  }, 300);

  return () => clearTimeout(delayDebounce);
}, [searchTerm, filterCategory]);

  return (
    <Card>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom fontWeight="bold">
          Трчај со нас
        </Typography>
        <Divider sx={{ mb: 3 }} />
        
        <Grid container spacing={2} mb={3}>
          <Grid>
            <TextField
              fullWidth
              placeholder="Пребарај по име..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
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
                startAdornment={
                  <InputAdornment position="start">
                    <FilterList />
                  </InputAdornment>
                }
              >
                <MenuItem value="all">Сите категории</MenuItem>
                {CATEGORIES.map(cat => (
                  <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Typography variant="body2" color="text.secondary" mb={2}>
          Вкупно учесници: {filteredContestants.length}
        </Typography>

        {loading ? (
          <Box display="flex" justifyContent="center" py={4}>
            <CircularProgress />
          </Box>
        ) : (
          <List>
            {filteredContestants.map((runner: Contestant, idx: number) => (
              <Paper key={idx} sx={{ mb: 1 }}>
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography variant="h6">
                        {runner.firstName} {runner.lastName}
                      </Typography>
                    }
                    secondary={
                      <Box>
                        <Chip label={runner.distance} size="small" color="primary" sx={{ mr: 1 }} />
                        <Chip label={`${runner.age} год.`} size="small" />
                      </Box>
                    }
                  />
                </ListItem>
              </Paper>
            ))}

            {filteredContestants.length === 0 && (
              <Box textAlign="center" py={6}>
                <People sx={{ fontSize: 80, color: 'text.disabled', mb: 2 }} />
                <Typography color="text.secondary">
                  Нема пронајдени учесници
                </Typography>
              </Box>
            )}
          </List>
        )}
      </CardContent>
    </Card>
  );
};