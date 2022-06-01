import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";

const CategoriesBar: React.FC = () => {
  const categories = [
    "T-shirts",
    "Jeans",
    "Hoodies",
    "Shirts",
    "Sneakers",
    "Womens shoes",
    "Blouses",
    "Skirts",
    "Dresses",
    "Sportswear",
  ];

  return (
    <Container>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category}>
              <Link to={`/${category}`}>{category}</Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default CategoriesBar;
