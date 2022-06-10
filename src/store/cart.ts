import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../types";

const initialCartState: CartState = {cart: []};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      let product
      //check if cart contains the product
      console.log(state.cart.length > 0 )
      if( state.cart.length > 0 ) {
        console.log('cart in redux', state.cart.length)
       product = state.cart.find((item) => item.product_id === action.payload.id)
      }
      console.log('found product in redux',product)
      console.log("id:", action.payload.id)
      if(product){
        console.log('product exists, changing quantity')
        product.quantity += 1
        product.price = action.payload.price
      }else{
        console.log('adding the product to cart')
        console.log(action.payload.item)
        state.cart.push(action.payload.item)
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
      const product = state.cart.find((item) => item.product_id === action.payload.id)
      if(product && product.quantity > 1){
        console.log('product exists, changing quantity')
        product.quantity -= 1
        product.price = action.payload.price
      }
      else if(product && product.quantity === 1){
        console.log('product exists, removing from cart')
      const updatedCart = state.cart.filter((item) => item.product_id != action.payload.id);
      state.cart = updatedCart;
      }

    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
