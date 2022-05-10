import React from "react";
import { Container } from "./style";

const CategoriesBar: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>Category 1</li>
        <li>Category 2</li>
        <li>
          <a href="google.com">Category 3</a>{" "}
        </li>
        <li>Category 4</li>
        <li>Category 5</li>
        <li>Category 6</li>
        <li>Category 7</li>
        <li>Category 8</li>
        <li>Category 9</li>
      </ul>
    </Container>
  );
};

export default CategoriesBar;
