import React from 'react';
import {
  CardContent,
  TextField,
  Grid,
  MenuItem,
  Button,
  Divider,
  Stack,
  Typography,
  Box
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

import {
  PageWrapper,
  PaymentCard,
  HeaderTitle,
  SectionTitle,
  InfoText,
  FooterText
} from './PaymentForm.styles';

const months: string[] = Array.from({ length: 12 }, (_, i) =>
  String(i + 1).padStart(2, '0')
);

const years: number[] = Array.from({ length: 10 }, (_, i) => 2025 + i);

export const PaymentForm = () => {
  return (
    <PageWrapper>
      <PaymentCard>
        <CardContent>
          <Stack alignItems="center" spacing={1} mb={2}>
            <LockIcon color="action" />
            <HeaderTitle variant="body1">
              Безбедна форма
            </HeaderTitle>
            <Typography variant="caption" color="text.secondary">
              Податоците се доверливи
            </Typography>
          </Stack>

          <Divider sx={{ mb: 2 }} />

          <SectionTitle variant="body1">
            Податоци за платежна картичка
          </SectionTitle>

          <TextField
            fullWidth
            label="Име и презиме"
            margin="dense"
          />

          <TextField
            fullWidth
            label="Број на картичка"
            margin="dense"
          />

          <Grid container spacing={2} mt={0.5}>
            <Grid>
              <TextField fullWidth label="CVV2/CVC2" />
            </Grid>

            <Grid>
              <TextField
                select
                fullWidth
                label="Месец"
                defaultValue="01"
              >
                {months.map((m: string) => (
                  <MenuItem key={m} value={m}>
                    {m}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid>
              <TextField
                select
                fullWidth
                label="Година"
                defaultValue={2025}
              >
                {years.map((y: number) => (
                  <MenuItem key={y} value={y}>
                    {y}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>

          <Box mt={2}>
            <Typography variant="body2">
              <strong>Износ:</strong> 2800 MKD
            </Typography>
            <Typography variant="body2">
              <strong>Оригинален износ:</strong> 2800 MKD
            </Typography>
          </Box>

          <TextField
            fullWidth
            margin="dense"
            label="Опис"
            value="Order 33328"
            disabled
          />

          <InfoText variant="caption" color="primary">
            Инфо
          </InfoText>

          <Stack direction="row" spacing={2} mt={3}>
            <Button fullWidth variant="contained" color="inherit">
              Откажи
            </Button>
            <Button fullWidth variant="contained">
              Потврди
            </Button>
          </Stack>

          <FooterText variant="caption" color="text.secondary">
            Инфо за процесот на плаќање: +389 2 3293 888
          </FooterText>
        </CardContent>
      </PaymentCard>
    </PageWrapper>
  );
};

export default PaymentForm;
