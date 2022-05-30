import React, { useEffect, useState } from "react";

import { Container, Header, CartInfo } from "./CartStyles";

import CartSummary from "../Components/Cart/CartSummary/CartSummary";
import PurchaseDetails from "../Components/Cart/PurchaseDetails/PurchaseDetails";
import Categories from "../Components/MovingCards/MovingCards";

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


  return (
    <>
      <Header>Cart</Header>
      <Container>
          <CartInfo>
        <CartSummary  />
        <PurchaseDetails />
        </CartInfo>
        <Categories heading={'You might also like:'}/>
      </Container>
    </> 
  );
};

export default Cart;
