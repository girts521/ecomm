import React from "react";
import { Heading, CategoriesContainer, Category } from "./styles";

const CategoriesIcons: React.FC = () => {
  return (
    <>
      <Heading>Select a category to browse</Heading>

        <CategoriesContainer>

        <Category>
          <img src="t-shirt.png" alt="t-shirt" />
          T-shirts
        </Category>

        <Category>
          <img src="jeans.png" alt="t-shirt" />
          Jeans
        </Category>

        <Category>
          <img src="hoodie.png" alt="t-shirt" />
          Hoodies
        </Category>

        <Category>
          <img src="shirt.png" alt="t-shirt" />
          Shirts
        </Category>

        <Category>
          <img src="sneakers.png" alt="t-shirt" />
          Sneakers
        </Category>

        <Category>
          <img src="high-heel.png" alt="t-shirt" />
          Womens shoes
        </Category>

        <Category>
          <img src="bluse.png" alt="t-shirt" />
          Blouses
        </Category>

        <Category>
          <img src="skirt.png" alt="t-shirt" />
          Skirts
        </Category>

        <Category>
          <img src="dress.png" alt="t-shirt" />
          Dresses
        </Category>

        <Category>
          <img src="sportswear.png" alt="t-shirt" />
          Sportswear
        </Category>
        </CategoriesContainer>
    </>
  );
};

export default CategoriesIcons;
