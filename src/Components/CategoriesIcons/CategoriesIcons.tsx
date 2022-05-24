import React from "react";
import { Heading, CategoriesContainer, Category } from "./styles";
import { useNavigate } from "react-router-dom";

const CategoriesIcons: React.FC = () => {

  const navigate = useNavigate();

  const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(e.currentTarget.innerText);

    const categoryName = e.currentTarget.innerText.toLowerCase();

    navigate(`/${categoryName}`)

  }

  return (
    <>
      <Heading>Select a category to browse</Heading>

        <CategoriesContainer>

        <Category onClick={clickHandler}>
          <img src="t-shirt.png" alt="t-shirt" />
          T-shirts
        </Category>

        <Category onClick={clickHandler}>
          <img src="jeans.png" alt="t-shirt" />
          Jeans
        </Category>

        <Category onClick={clickHandler}>
          <img src="hoodie.png" alt="t-shirt" />
          Hoodies
        </Category>

        <Category onClick={clickHandler}>
          <img src="shirt.png" alt="t-shirt" />
          Shirts
        </Category>

        <Category onClick={clickHandler}>
          <img src="sneakers.png" alt="t-shirt" />
          Sneakers
        </Category>

        <Category onClick={clickHandler}>
          <img src="high-heel.png" alt="t-shirt" />
          Womens shoes
        </Category>

        <Category onClick={clickHandler}>
          <img src="bluse.png" alt="t-shirt" />
          Blouses
        </Category>

        <Category onClick={clickHandler}>
          <img src="skirt.png" alt="t-shirt" />
          Skirts
        </Category>

        <Category onClick={clickHandler}>
          <img src="dress.png" alt="t-shirt" />
          Dresses
        </Category>

        <Category onClick={clickHandler}>
          <img src="sportswear.png" alt="t-shirt" />
          Sportswear
        </Category>
        </CategoriesContainer>
    </>
  );
};

export default CategoriesIcons;
