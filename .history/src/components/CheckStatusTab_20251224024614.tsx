import React from 'react';
import {
  Card, CardContent, TextField, Button, Alert,
  Typography, Divider, InputAdornment, Box, Stack
} from '@mui/material';
import { Search, CheckCircle, Error, CreditCard } from '@mui/icons-material';
import { Contestant } from '../types';
import { MESSAGES } from '../constants';
import Grid from '@mui/material/Grid';

interface CheckStatusTabProps {
  checkEmail: string;
  setCheckEmail: (email: string) => void;
  checkResult: Contestant | null;
  onCheck: () => void;
  onPayment: (email: string) => void;
}

export const CheckStatusTab: React.FC<CheckStatusTabProps> = ({
  checkEmail,
  setCheckEmail,
  checkResult,
  onCheck,
  onPayment
}) => {
  return (
    <Grid container justifyContent="center">
        <Grid>
            <Card>
            <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom fontWeight="bold">
                Проверка на учесник
                </Typography>
                <Divider sx={{ mb: 3 }} />
                
                <Stack spacing={3}>
                <TextField
                    fullWidth
                    label="Е-пошта или регистрациски број"
                    value={checkEmail}
                    onChange={(e) => setCheckEmail(e.target.value)}
                    variant="outlined"
                    placeholder="example@email.com или REG123456"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <Search />
                        </InputAdornment>
                    ),
                    }}
                />

                <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    onClick={onCheck}
                    color="primary"
                >
                    Провери статус
                </Button>

                {checkResult && (
                    <Card variant="outlined" sx={{ bgcolor: '#fafafa' }}>
                    <CardContent>
                        <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                        <Box>
                            <Typography variant="h6" fontWeight="bold">
                            {checkResult.firstName} {checkResult.lastName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {checkResult.email}
                            </Typography>
                        </Box>
                        {checkResult.isPaid ? (
                            <CheckCircle sx={{ color: 'success.main', fontSize: 40 }} />
                        ) : (
                            <Error sx={{ color: 'warning.main', fontSize: 40 }} />
                        )}
                        </Box>

                        <Stack spacing={1} mb={2}>
                        <Typography variant="body2">
                            <strong>Категорија:</strong> {checkResult.}
                        </Typography>
                        <Typography variant="body2">
                            <strong>Регистрациски број:</strong> {checkResult.registrationNumber}
                        </Typography>
                        {checkResult.isPaid && (
                            <Typography variant="body2">
                            <strong>Стартен број:</strong> {checkResult.startNumber}
                            </Typography>
                        )}
                        </Stack>

                        {checkResult.isPaid ? (
                        <Alert severity="success">
                            <Typography variant="subtitle2" fontWeight="bold">
                            ✓ Успешна пријава
                            </Typography>
                            <Typography variant="caption">
                            Вашата котизација е платена
                            </Typography>
                        </Alert>
                        ) : (
                        <Button
                            fullWidth
                            variant="contained"
                            startIcon={<CreditCard />}
                            onClick={() => onPayment(checkResult.email)}
                            sx={{ bgcolor: '#ff6f00', '&:hover': { bgcolor: '#f57c00' } }}
                        >
                            Плати котизација
                        </Button>
                        )}
                    </CardContent>
                    </Card>
              )}

              {checkEmail && !checkResult && checkResult !== null && (
                <Alert severity="error">
                  {MESSAGES.NO_PARTICIPANT_FOUND}
                </Alert>
              )}
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};