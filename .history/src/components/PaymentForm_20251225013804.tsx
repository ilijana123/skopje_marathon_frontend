import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Grid,
  MenuItem,
  Button,
  Divider,
  Stack
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

const months = Array.from({ length: 12 }, (_, i) =>
  String(i + 1).padStart(2, '0')
);

const years = Array.from({ length: 10 }, (_, i) => 2025 + i);

export const PaymentForm = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Card sx={{ width: 420 }}>
        <CardContent>
          {/* Header */}
          <Stack alignItems="center" spacing={1} mb={2}>
            <LockIcon color="action" />
            <Typography fontWeight="bold">Безбедна форма</Typography>
            <Typography variant="caption" color="text.secondary">
              Податоците се доверливи
            </Typography>
          </Stack>

          <Divider sx={{ mb: 2 }} />

          {/* Title */}
          <Typography fontWeight="bold" mb={2}>
            Податоци за платежна картичка
          </Typography>

          {/* Name */}
          <TextField
            fullWidth
            label="Име и презиме"
            margin="dense"
          />

          {/* Card Number */}
          <TextField
            fullWidth
            label="Број на картичка"
            margin="dense"
          />

          <Grid container spacing={2} mt={0.5}>
            <Grid>
              <TextField
                fullWidth
                label="CVV2/CVC2"
              />
            </Grid>

            <Grid>
              <TextField
                select
                fullWidth
                label="Месец"
                defaultValue="01"
              >
                {months.map(m => (
                  <MenuItem key={m} value={m}>
                    {m}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={4}>
              <TextField
                select
                fullWidth
                label="Година"
                defaultValue={2025}
              >
                {years.map(y => (
                  <MenuItem key={y} value={y}>
                    {y}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>

          <Box mt={2}>
            <Typography variant="body2">
              <b>Износ:</b> 2800 MKD
            </Typography>
            <Typography variant="body2">
              <b>Оригинален износ:</b> 2800 MKD
            </Typography>
          </Box>

          <TextField
            fullWidth
            margin="dense"
            label="Опис"
            value="Order 33328"
            disabled
          />

          <Typography
            variant="caption"
            color="primary"
            sx={{ cursor: 'pointer' }}
          >
            Инфо
          </Typography>

          <Stack direction="row" spacing={2} mt={3}>
            <Button fullWidth variant="contained" color="inherit">
              Откажи
            </Button>
            <Button fullWidth variant="contained" color="primary">
              Потврди
            </Button>
          </Stack>

          <Typography
            variant="caption"
            color="text.secondary"
            display="block"
            mt={3}
            textAlign="center"
          >
            Инфо за процесот на плаќање: +389 2 3293 888
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
