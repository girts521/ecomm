import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, CardContent } from "./styles";

import { MovingCardData } from "../../types";

const Card: React.FC<{ data: MovingCardData }> = ({ data }) => {
  const navigate = useNavigate();

  const redirectToProductPage = () => {
    navigate(`/product/${data.id}`);
  };

  return (
    <Container onClick={redirectToProductPage}>
      <img src={data.product_img} alt="product" />
      <CardContent>
        <p>{data.product_name}</p>
        <p>{data.product_price}</p>
      </CardContent>
    </Container>
  );
};

export default Card;
