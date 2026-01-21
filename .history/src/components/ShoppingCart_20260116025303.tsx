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
  PayOnlineButton
} from './ShoppingCart.styles';

interface CartItem {
  name: string;
  price: string;
  quantity: number;
}

interface ShoppingCartProps {
  items?: CartItem[];
  total: string;
  onAddParticipant?: () => void;
  onPayByCard?: () => void;
  onPayByInvoice?: () => void;
  onPayOnline?: () => void;
  selectedCategory: Category | null;
}

export const ShoppingCart = ({ 
  items = [],
  total = '0 ден',
  onAddParticipant,
  onPayByCard,
  onPayByInvoice,
  onPayOnline,
  selectedCategory
}: ShoppingCartProps) => {
  
  const cartItems = selectedCategory ? [
    {
      name: `${selectedCategory.type} (${selectedCategory.price} ден)`,
      price: `${selectedCategory.price} ден`,
      quantity: 1
    }
  ] : items;

  const cartTotal = selectedCategory ? `${selectedCategory.price} ден` : total;

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

        {cartItems.map((item, index) => (
          <CartItemBox key={index}>
            <CartItemRow>
              <CartItemName variant="body2">
                {item.name}
              </CartItemName>
              <CartItemActions>
                <CartItemPrice variant="body2">
                  {item.price}
                </CartItemPrice>
                <IconButton size="small" sx={{ color: 'text.secondary' }}>
                  <Close fontSize="small" />
                </IconButton>
              </CartItemActions>
            </CartItemRow>
          </CartItemBox>
        ))}

        <CartDivider />

        <TotalBox>
          <TotalLabel variant="body1">
            Вкупно:
          </TotalLabel>
          <TotalPrice variant="h6">
            {cartTotal}
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