import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../types";

const initialCartState: CartState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    setQuantity(state, action) {
      state = state.map((item) => {
        if (item.product_id === action.payload.product_id) {
          item.quantity = action.payload.quantity;
        }
        return item;
      });
    },
    removeFromCart(state, action) {
      state = state.filter(
        (item) => item.product_id !== action.payload.product_id
      );
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
