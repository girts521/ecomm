import React from "react";
import { Container, ProductInfo } from "./styles";
import Quantity from "../../Quantity/Quantity";

import { Item } from "../../../../types";

const CardSummaryCard: React.FC<{ item: Item }> = ({ item }) => {
  return (
    <Container>
      <img src={item.product_img} alt="product" />
      <ProductInfo>
        <h1>{item.product_name}</h1>
        <h2>{item.price}</h2>
        <h3>{item.quantity}</h3>

        <Quantity product={item} />
      </ProductInfo>
    </Container>
  );
};

export default CardSummaryCard;
