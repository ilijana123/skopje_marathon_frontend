import { styled } from '@mui/material/styles';
import { Card, Grid, Button } from '@mui/material';

export const RootGrid = styled(Grid)({
    justifyContent: 'center',
});

export const FormCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(4),
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#ff6f00',
    '&:hover': {
        backgroundColor: '#e65c00',
    },
}));
    }