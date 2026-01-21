import { Box, IconButton, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import { Category } from '../types';
import {
  CartHeader,
  CartTitleBox,
  CartTitle,
  CartDivider,
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
  PaymentWarningBox,
  IconButtonBox,
  CartItemColumn
} from './ShoppingCart.styles';

interface ContestantData {
  firstName: string;
  lastName: string;
  email: string;
}

interface ShoppingCartProps {
  selectedCategory: Category;
  contestantData: ContestantData;
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
  
  const cartItemName = `${contestantData.firstName.toUpperCase()} ${contestantData.lastName.toUpperCase()}`;

  return (
    <CartCard>
      <PaymentWarningBox>
        <Typography variant="body2">
          Треба да извршите уплата за да регистрацијата биде комплетирана. Регистрација без извршена уплата се смета за невалидна!
        </Typography>
      </PaymentWarningBox>
      
        <CartHeader>
          <CartTitleBox>
            <CartTitle variant="h6">
              КОШНИЧКА - ВИЗ ЕР СКОПСКИ МАРАТОН 2026
            </CartTitle>
          </CartTitleBox>
        </CartHeader>

        <CartItemBox>
          <CartItemRow>
            <IconButtonBox>
              <IconButton>
                <Close fontSize="small" />
              </IconButton>
            </IconButtonBox>
            <CartItemColumn>
              <CartItemName variant="body2">
                {cartItemName}
              </CartItemName>
              {contestantData && (
                <Box sx={{ px: 2, py: 1 }}>
                  <Typography variant="caption" color="text.secondary">
                    {contestantData.email}
                  </Typography>
                </Box>
              )}
            </CartItemColumn>  
            <CartItemActions>
              <CartItemPrice variant="body2">
                {selectedCategory.price} ден
              </CartItemPrice>
            </CartItemActions>
          </CartItemRow>
        </CartItemBox>
        <CartDivider />

        <TotalBox>
          <TotalLabel>
            Вкупно:
          </TotalLabel>
          <TotalPrice>
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