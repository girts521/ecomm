import { createSlice } from '@reduxjs/toolkit';




type Item = {
    product_id: string;
    product_name: string;
    price: string;
    quantity: number;
    product_img: string;
    user_id: number;
    session_id: string;
  };

type cartState = Item[]



const initialCartState: cartState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
        },
        setQuantity(state, action) {
            state = state.map(item => {
                if (item.product_id === action.payload.product_id) {
                    item.quantity = action.payload.quantity
                }
                return item
            })
        },
        removeFromCart(state, action) {
            state = state.filter(item => item.product_id !== action.payload.product_id)
        }


    },
  });

  export const cartActions = cartSlice.actions;
  
  export default cartSlice.reducer;


