import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../types";

const initialCartState: CartState = { cart: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      let product;
      //check if cart contains the product
      if (state.cart.length > 0) {
        product = state.cart.find(
          (item) => item.product_id === action.payload.id
        );
      }

      if (product) {
        product.quantity += 1;
        product.price = action.payload.price;
      } else {
        state.cart.push(action.payload.item);
      }
    },
    setQuantity(state, action) {
      state.cart = state.cart.map((item) => {
        if (item.product_id === action.payload.product_id) {
          item.quantity = action.payload.quantity;
        }
        return item;
      });
    },
    removeFromCart(state, action) {
      //check if cart contains the product and the quantity is greater than 1
      const product = state.cart.find(
        (item) => item.product_id === action.payload.id
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        product.price = action.payload.price;
      } else if (product && product.quantity === 1) {
        const updatedCart = state.cart.filter(
          (item) => item.product_id != action.payload.id
        );
        state.cart = updatedCart;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
