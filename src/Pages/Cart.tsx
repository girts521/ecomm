import React from "react";
import { Container, Header, CartInfo } from "./CartStyles";

import CartSummary from "../Components/Cart/CartSummary/CartSummary";
import PurchaseDetails from "../Components/Cart/PurchaseDetails/PurchaseDetails";
import Categories from "../Components/Categories/Categories";

const Cart: React.FC = () => {
  return (
    <>
      <Header>Cart</Header>
      <Container>
          <CartInfo>
        <CartSummary />
        <PurchaseDetails />
        </CartInfo>
        <Categories heading={'You might also like:'}/>
      </Container>
    </>
  );
};

export default Cart;
