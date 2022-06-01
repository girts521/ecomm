import React from "react";
import { Heading, CategoriesContainer, Category } from "./styles";
import { useNavigate } from "react-router-dom";

const CategoriesIcons: React.FC = () => {
  const navigate = useNavigate();

  const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const categoryName = e.currentTarget.innerText.toLowerCase();
    navigate(`/${categoryName}`);
  };

  const categories = [
    {
      name: "T-shirts",
      img: "t-shirt.png",
    },
    {
      name: "Jeans",
      img: "jeans.png",
    },
    {
      name: "Hoodies",
      img: "hoodie.png",
    },
    {
      name: "Shirts",
      img: "shirt.png",
    },
    {
      name: "Sneakers",
      img: "sneakers.png",
    },
    {
      name: "Womens shoes",
      img: "high-heel.png",
    },
    {
      name: "Blouses",
      img: "bluse.png",
    },
    {
      name: "Skirts",
      img: "skirt.png",
    },
    {
      name: "Dresses",
      img: "dress.png",
    },
    {
      name: "Sportswear",
      img: "sportswear.png",
    },
  ];

  return (
    <>
      <Heading>Select a category to browse</Heading>

      <CategoriesContainer>
        {categories.map((category) => {
          return (
            <Category key={category.name} onClick={clickHandler}>
              <img src={`${category.img}`} alt={category.name} />
              <span>{category.name}</span>
            </Category>
          );
        })}
      </CategoriesContainer>
    </>
  );
};

export default CategoriesIcons;
