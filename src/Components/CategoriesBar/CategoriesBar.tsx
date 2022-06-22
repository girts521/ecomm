import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";
import {CategoriesFromDB} from "../../types";

const CategoriesBar: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    let url = "/api/categories";
    fetch(url, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Credentials: "include",
      },
    })
      .then((res) => res.json())
      .then((data: CategoriesFromDB[]) => {
        console.log(data);
        if (data.length > 0) {
          data.forEach((item: CategoriesFromDB) => {
            setCategories((categories) => [...categories, item.category_name]);
          });
        }
      });
  }, []);

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
