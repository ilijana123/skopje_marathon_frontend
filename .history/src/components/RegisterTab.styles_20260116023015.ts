import { styled } from '@mui/material/styles';
import { Card, Grid, Button, Box, TextField, IconButton, Typography } from '@mui/material';

export const RootGrid = styled(Grid)({
    justifyContent: 'center',
});

export const FormCard = styled(Card)(({ theme }) => ({
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[1],
    border: '1px solid #e0e0e0',
}));

export const CardContentWrapper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
}));

export const HeaderBox = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
});

export const ContestantTitle = styled(Typography)({
    fontWeight: 600,
    marginBottom: 4,
});

export const DistanceText = styled(Typography)({
    // color is handled by color="text.secondary" prop
});

export const PriceBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: 8,
});

export const PriceText = styled(Typography)({
    fontWeight: 500,
});

export const CategoryIconButton = styled(IconButton)({
    border: '1.5px solid #ba0666ff',
    borderRadius: '4px',
    width: '35px',
    height: '35px',
    padding: 0,
    '&:hover': {
        backgroundColor: '#f5f5f5',
        border: '1px solid #bbb',
    },
});

export const FormGrid = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: '1fr 1fr',
    },
}));

export const FieldBox = styled(Box)({
    // Container for each field
});

export const FieldLabel = styled(Typography)({
    marginBottom: 4,
    fontSize: '0.875rem',
});

export const RequiredAsterisk = styled('span')({
    color: '#d32f2f',
});

export const StyledTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        backgroundColor: '#fafafa',
    },
});

export const AlertBox = styled(Box)(({ theme }) => ({
    gridColumn: '1',
    [theme.breakpoints.up('sm')]: {
        gridColumn: '1 / -1',
    },
}));

export const RemoveButtonBox = styled(Box)(({ theme }) => ({
    gridColumn: '1',
    marginTop: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
        gridColumn: '1 / -1',
    },
}));

export const RemoveButton = styled(Button)({
    textTransform: 'none',
    fontWeight: 400,
    backgroundColor: '#ffebee',
    color: '#d32f2f',
    boxShadow: 'none',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 4,
    '&:hover': {
        backgroundColor: '#ffcdd2',
        boxShadow: 'none',
    },
});

export const CategoryMenuItemBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
});

export const CategoryTypeText = styled(Typography)({
    fontWeight: 500,
});

export const SubmitButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#ff6f00',
    '&:hover': {
        backgroundColor: '#f57c00',
    },
}));

