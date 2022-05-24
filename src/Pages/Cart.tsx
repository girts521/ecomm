import React, { useEffect, useState } from "react";
import { cartActions } from "../store/cart";
import { useSelector, useDispatch } from "react-redux";

import { Container, Header, CartInfo } from "./CartStyles";

import CartSummary from "../Components/Cart/CartSummary/CartSummary";
import PurchaseDetails from "../Components/Cart/PurchaseDetails/PurchaseDetails";
import Categories from "../Components/Categories/Categories";

type AuthState = {
  isLoggedIn: boolean;
  user: {
    id: string;
    firstName: string;
    email: string;
    lastName: string;
    isAdmin: boolean;
    cart: string[];
  };
};

type Item = {
  product_id: string;
  product_name: string;
  price: string;
  quantity: number;
  product_img: string;
  user_id: number;
  session_id: string;
};

type CartState = Item[];

type State = {
  cart: CartState;
  auth: AuthState;
};

const Cart: React.FC = () => {
  const [cart, setCart] = useState<Item[]>([]);

  const dispatch = useDispatch();
  const cartData = useSelector((state: State) => state.cart);

  useEffect(() => {
    // check redux store for cart
    if (cartData.length > 0) {
      setCart(cartData);
    }
    // if store doesnt have cart, fetch cart from db
    else {
      let url = `/cartData`;
      fetch(url, {
        credentials: "include",
        method: "GET"
      })
        .then(res => res.json())
        .then(data => {
          setCart(data);
        })
        .catch(err => {
          console.log(err);
        });
        // save cart in store
       cart.forEach(item => {
         dispatch(cartActions.addToCart(item));
       })
    }
  } , []);

  return (
    <>
      <Header>Cart</Header>
      <Container>
          <CartInfo>
        <CartSummary cartProducts={cart} />
        <PurchaseDetails />
        </CartInfo>
        <Categories heading={'You might also like:'}/>
      </Container>
    </> 
  );
};

export default Cart;
