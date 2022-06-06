import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../types";

const initialCartState: CartState = {cart: []};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      //check if cart contains the product
      const product = state.cart.find((item) => item.product_id === action.payload.id)
      console.log(product)
      if(product){
        console.log('product exists, changing quantity')
        product.quantity += 1
        product.price = action.payload.price
      }else{
        console.log('adding the product to cart')
        state.cart.push(action.payload)
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
      const product = state.cart.find((item) => item.product_id === action.payload)
      if(product && product.quantity > 1){
        console.log('product exists, changing quantity')
        product.quantity -= 1
      }
      else if(product && product.quantity === 1){
        console.log('product exists, removing from cart')
      const updatedCart = state.cart.filter((item) => item.product_id != action.payload);
      state.cart = updatedCart;
      }

    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
