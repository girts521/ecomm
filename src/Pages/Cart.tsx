import React from "react";
import { Container, Header } from "./CartStyles";

import CartSummary from "../Components/Cart/CartSummary/CartSummary";
import PurchaseDetails from "../Components/Cart/PurchaseDetails/PurchaseDetails";

const Cart: React.FC = () => {
  return (
    <>
      <Header>Cart</Header>
      <Container>
        <CartSummary />
        <PurchaseDetails />
      </Container>
    </>
  );
};

export default Cart;
