import React, {useState} from "react";
import { Container, ProductInfo } from "./styles";
import Quantity from "../../Quantity/Quantity";

const CardSummaryCard: React.FC = () => {


    return (
        <Container>
        <img src="https://via.placeholder.com/150" alt="product" />
        <ProductInfo>
        <h1>Product Name</h1>
        <h2>Product Price</h2>
        <h3>Product Quantity</h3> 

        <Quantity />

        </ProductInfo>

        </Container>
    )
};

export default CardSummaryCard;
