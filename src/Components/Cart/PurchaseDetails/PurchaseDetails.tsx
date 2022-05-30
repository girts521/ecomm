import React from "react";
import { Container } from "./styles";

const PurchaseDetails: React.FC = () => {
  return (
    <Container>
      <h1>Purchase Details</h1>
      <h2>Total: $0</h2>
      <button>Proceed to Checkout</button>
    </Container>
  );
};

export default PurchaseDetails;
