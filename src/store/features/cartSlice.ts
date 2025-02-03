import { CartType } from "@/api/product/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { ProductType } from "@/shared/types";
import { toast } from "@/hooks/use-toast";

interface CartState {
  cartItems: CartType[];
}

const initialState: CartState = {
  cartItems: [],
};

export const selectTotalQuantity = (state: RootState): number => {
  return state.cart.cartItems.reduce(
    (total: number, item: CartType) => total + item.quantity,
    0
  );
};

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const product = action.payload;

      if (product.remainingStock === 0) {
        toast({
          title: "Product is out of stock!",
          variant: "destructive",
          duration: 600,
        });
        return;
      }

      const existingItem = state.cartItems.find(
        (item) => item.productID === product.productID
      );

      if (existingItem) {
        const checkQty = existingItem.quantity + 1;
        if (existingItem.quantity < product.remainingStock) {
          existingItem.quantity += 1;
        } else if (product.remainingStock < checkQty) {
          toast({
            title: "Remaining Stock is not enough!",
            variant: "destructive",
            duration: 600,
          });
          return;
        }
      } else {
        const cartItems: CartType = {
          ...product,
          quantity: 1,
        };
        state.cartItems.push(cartItems);
      }
      toast({
        title: "Successfully added to cart!",
        duration: 600,
      });
    },

    reduceCartItems: (state, action: PayloadAction<string>) => {
      const existingItem = state.cartItems.find(
        (item) => item.productID === action.payload
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.productID !== action.payload
          );
          toast({
            title: "Remaining Stock is not enough!",
            variant: "destructive",
            duration: 600,
          });
          return;
        }
        toast({
          title: "Successfully removed from cart!",
          duration: 600,
        });
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.productID !== action.payload
      );
    },

    increaseItem: (state, action: PayloadAction<CartType>) => {
      const product = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.productID === product.productID
      );

      if (existingItem && existingItem.quantity < product.remainingStock) {
        existingItem.quantity += 1;
      } else if (existingItem?.quantity === product.remainingStock) {
        toast({
          title: "Remaining Stock is not enough!",
          variant: "destructive",
          duration: 600,
        });
        return;
      } else {
        const cartItems: CartType = {
          ...product,
          quantity: 1,
        };
        state.cartItems.push(cartItems);
      }
      toast({
        title: "Successfully added to cart!",
        duration: 600,
      });
    },

    reduceItem: (state, action: PayloadAction<string>) => {
      const existingItem = state.cartItems.find(
        (item) => item.productID === action.payload
      );

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.productID != action.payload
        );
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  reduceCartItems,
  increaseItem,
  reduceItem,
  clearCart,
} = CartSlice.actions;

export default CartSlice.reducer;
