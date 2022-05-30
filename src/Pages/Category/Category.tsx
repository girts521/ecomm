import React from "react";
import { useParams } from "react-router-dom";

import { Container, CategoryHeading } from "./styles";

import CategoriesBar from "../../Components/CategoriesBar/CategoriesBar";
import Categories from "../../Components/MovingCards/MovingCards";
import Deal from "../../Components/Deal/Deal";
import Products from "../../Components/Products/Products";

const Category: React.FC = () => {
  const { categoryName } = useParams();

  return (
    <Container>
      <CategoriesBar />
      <CategoryHeading>{categoryName}</CategoryHeading>

      <Deal header={"Hot sale"} />
      <Categories heading={"Best sellers"} />

      <Products category={categoryName} />
    </Container>
  );
};

export default Category;
