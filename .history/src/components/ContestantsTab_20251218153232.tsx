import React, { useState, useMemo } from 'react';
import {
  Card, CardContent, Grid, TextField, Typography, Divider,
  InputAdornment, FormControl, InputLabel, Select, MenuItem,
  List, ListItem, ListItemAvatar, ListItemText, Avatar,
  Paper, Box, Chip
} from '@mui/material';
import { Search, FilterList, People } from '@mui/icons-material';
import { Contestant } from '../types';
import { CATEGORIES } from '../constants';
import { fetchContestantsWithErrorHandling } from '../services/contestantService';

interface ContestantsTabProps {
  contestants: Contestant[];
}          

export const ContestantsTab = ({ contestants }: ContestantsTabProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const filteredContestants = useMemo(() => {
    return contestants
      .filter(p => p.isPaid)
      .filter(p => {
        const matchesSearch = `${p.firstName} ${p.lastName}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesCategory = filterCategory === 'all' || p.category === filterCategory;
        return matchesSearch && matchesCategory;
      });
  }, [contestants, searchTerm, filterCategory]);

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

        <List>
          {filteredContestants.map((runner, idx) => (
            <Paper key={idx} sx={{ mb: 1 }}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: '#ff6f00', width: 56, height: 56 }}>
                    <Typography variant="h6">
                      {runner.startNumber?.slice(-3)}
                    </Typography>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="h6">
                      {runner.firstName} {runner.lastName}
                    </Typography>
                  }
                  secondary={
                    <Box>
                      <Chip label={runner.category} size="small" color="primary" sx={{ mr: 1 }} />
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
      </CardContent>
    </Card>
  );
};