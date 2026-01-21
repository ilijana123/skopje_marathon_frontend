import { Box, IconButton, Typography } from '@mui/material';
import { ShoppingBasket, Close } from '@mui/icons-material';
import { Category } from '../types/Category';
import {
  CartCard,
  CartCardContent,
  CartHeader,
  CartTitleBox,
  CartTitle,
  CartDivider,
  OrgBox,
  OrgName,
  OrgEmail,
  CartItemBox,
  CartItemRow,
  CartItemName,
  CartItemActions,
  CartItemPrice,
  TotalBox,
  TotalLabel,
  TotalPrice,
  AddParticipantButtonBox,
  AddParticipantButton,
  PaymentButtonsBox,
  BankButton,
  InvoiceButton,
  PayOnlineButton,
  PaymentWarningBox
} from './ShoppingCart.styles';

interface ContestantData {
  firstName: string;
  lastName: string;
  email: string;
}

interface ShoppingCartProps {
  selectedCategory: Category | null;
  contestantData?: ContestantData;
  onAddParticipant?: () => void;
  onPayByCard?: () => void;
  onPayByInvoice?: () => void;
  onPayOnline?: () => void;
}

export const ShoppingCart = ({ 
  selectedCategory,
  contestantData,
  onAddParticipant,
  onPayByCard,
  onPayByInvoice,
  onPayOnline
}: ShoppingCartProps) => {
  
  if (!selectedCategory) {
    return (
      <CartCard>
        <CartCardContent>
          <Typography variant="body1" color="text.secondary" align="center">
            Нема ставки во кошничката
          </Typography>
        </CartCardContent>
      </CartCard>
    );
  }

  const cartItemName = contestantData 
    ? `${contestantData.firstName} ${contestantData.lastName} - ${selectedCategory.type}`
    : `${selectedCategory.type} (${selectedCategory.distance}km)`;

  return (
    <CartCard>
      <PaymentWarningBox>
        <Typography variant="body2">
          Треба да извршите уплата за да регистрацијата биде комплетирана. Регистрација без извршена уплата се смета за невалидна!
        </Typography>
      </PaymentWarningBox>
      
      <CartCardContent>
        <CartHeader>
          <CartTitleBox>
            <ShoppingBasket sx={{ fontSize: 20 }} />
            <CartTitle variant="h6">
              Кошничка - Виза ЕР Скопски Маратон 2025
            </CartTitle>
          </CartTitleBox>
        </CartHeader>

        <CartDivider />

        <OrgBox>
          <OrgName variant="body2">
            МАРАТОНЕС 5К
          </OrgName>
          <OrgEmail variant="caption" color="text.secondary">
            maratones@outlook.com
          </OrgEmail>
        </OrgBox>

        <CartItemBox>
          <CartItemRow>
            <CartItemName variant="body2">
              {cartItemName}
            </CartItemName>
            <CartItemActions>
              <CartItemPrice variant="body2">
                {selectedCategory.price} ден
              </CartItemPrice>
              <IconButton size="small" sx={{ color: 'text.secondary' }}>
                <Close fontSize="small" />
              </IconButton>
            </CartItemActions>
          </CartItemRow>
        </CartItemBox>

        {contestantData && (
          <Box sx={{ px: 2, py: 1 }}>
            <Typography variant="caption" color="text.secondary">
              Email: {contestantData.email}
            </Typography>
          </Box>
        )}

        <CartDivider />

        <TotalBox>
          <TotalLabel variant="body1">
            Вкупно:
          </TotalLabel>
          <TotalPrice variant="h6">
            {selectedCategory.price} ден
          </TotalPrice>
        </TotalBox>

        <AddParticipantButtonBox>
          <AddParticipantButton
            variant="outlined"
            onClick={onAddParticipant}
          >
            ПРИЈАВИ НОВ УЧЕСНИК
          </AddParticipantButton>
        </AddParticipantButtonBox>

        <PaymentButtonsBox>
          <BankButton
            variant="outlined"
            onClick={onPayByCard}
          >
            ПЛАТИ ПРЕКУ БАНКА
          </BankButton>
          <InvoiceButton
            variant="outlined"
            onClick={onPayByInvoice}
          >
            ПЛАТИ СО ФАКТУРА
          </InvoiceButton>
          <PayOnlineButton
            variant="contained"
            onClick={onPayOnline}
          >
            ПЛАТИ ОНЛАЈН →
          </PayOnlineButton>
        </PaymentButtonsBox>
      </CartCardContent>
    </CartCard>
  );
};