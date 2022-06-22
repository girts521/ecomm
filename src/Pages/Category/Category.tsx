import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container, CategoryHeading } from "./styles";
import { CategoryDataType } from "../../types";

import CategoriesBar from "../../Components/CategoriesBar/CategoriesBar";
import Categories from "../../Components/MovingCards/MovingCards";
import Deal from "../../Components/Deal/Deal";
import Products from "../../Components/Products/Products";

const Category: React.FC = () => {
  const { categoryName } = useParams();
  const [validCategory, setValidCategory] = useState(false);

  useEffect(() => {
    fetch("/api/categories", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data: CategoryDataType[]) => {
        const categoryList: string[] = [];
        data.forEach((object: CategoryDataType) => {
          categoryList.push(object.category_name);
        });
        if (categoryList.includes(categoryName!)) {
          setValidCategory(true);
        } else {
          setValidCategory(false);
        }
      });
  }, []);

  return (
    <Container>
      {validCategory ? (
        <>
          <CategoriesBar />
          <CategoryHeading>{categoryName}</CategoryHeading>

          <Deal header={"Hot sale"} />
          <Categories heading={"Best sellers"} />

          <Products category={categoryName} />
        </>
      ) : (
        <h1>Invalid Category</h1>
      )}
    </Container>
  );
};

export default Category;
