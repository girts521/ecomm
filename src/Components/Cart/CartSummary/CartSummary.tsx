import React from "react";
import {Container} from "./styles"
import CardSummaryCard from "./CartSummaryCard/CardSummaryCard";

const CartSummary: React.FC = () => {

    return (
        <Container>
        <CardSummaryCard />
        <CardSummaryCard />
        <CardSummaryCard />
        </Container>
    )
};

export default CartSummary;