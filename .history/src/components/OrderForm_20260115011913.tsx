import { Category } from '../types';
import {
  OrderCard,
  OrderCardContent,
  OrderTitle,
  OrderItemBox,
  OrderItemLabel,
  OrderItemPrice,
  OrderDivider,
  TotalBox,
  TotalLabel,
  TotalPrice,
  Spacer,
  CouponBox,
  CouponTextField,
  ApplyCouponButton,
  ContinueButton,
} from './OrderForm.styles';

interface OrderFormProps {
  selectedCategory: Category | null;
}

export const OrderForm = ({ selectedCategory }: OrderFormProps) => {
  return (
    <OrderCard>
      <OrderCardContent>
        <OrderTitle variant="h6">
          Order
        </OrderTitle>

        <OrderItemBox>
          <OrderItemLabel variant="body2">
            Registration – {selectedCategory?.distance || '42'}km
          </OrderItemLabel>
          <OrderItemPrice variant="body2">
            {selectedCategory?.price || '100'} ден.
          </OrderItemPrice>
        </OrderItemBox>

        <OrderDivider />

        <TotalBox>
          <TotalLabel variant="body1">
            Total
          </TotalLabel>
          <TotalPrice variant="body1">
            {selectedCategory?.price || '100'} ден.
          </TotalPrice>
        </TotalBox>

        <Spacer />

        <CouponBox>
          <CouponTextField
            size="small"
            placeholder="Coupon code"
            fullWidth
          />
          <ApplyCouponButton variant="outlined">
            Apply coupon
          </ApplyCouponButton>
        </CouponBox>

        <ContinueButton
          fullWidth
          variant="contained"
          size="large"
        >
          Continue
        </ContinueButton>
      </OrderCardContent>
    </OrderCard>
  );
};