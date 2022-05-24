import React, {useState} from "react";
import { Container, ProductInfo } from "./styles";
import Quantity from "../../Quantity/Quantity";

type Item = {
    product_id: string;
    product_name: string;
    price: string;
    quantity: number;
    product_img: string;
    user_id: number;
    session_id: string;
  };


const CardSummaryCard: React.FC<{item: Item }> = ({item}) => {

    return (
        <Container>
        <img src={item.product_img} alt="product" />
        <ProductInfo>
        <h1>{item.product_name}</h1>
        <h2>{item.price}</h2>
        <h3>{item.quantity}</h3> 

        <Quantity />
        </ProductInfo>
        </Container>
    )
};

export default CardSummaryCard;
