import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Circle, Burger, CloseBtn, BurgerLinks } from "./styles";
import {CategoriesFromDB} from '../../types'

const NavMenu: React.FC<{
  setShow: (state: boolean) => void;
  show: Boolean;
}> = ({ setShow, show }) => {
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
    <Circle open={show}>
      <Burger show={show}>
        <svg
          onClick={() => {
            setShow(true);
          }}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 384.97 384.97"
        >
          <path d="M12.03,84.212h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03    C5.39,60.152,0,65.541,0,72.182C0,78.823,5.39,84.212,12.03,84.212z" />
          <path d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03    S379.58,180.455,372.939,180.455z" />
          <path d="M372.939,300.758H12.03c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h360.909    c6.641,0,12.03-5.39,12.03-12.03C384.97,306.147,379.58,300.758,372.939,300.758z" />
        </svg>
      </Burger>

      <CloseBtn show={show} onClick={() => setShow(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </CloseBtn>
      {show && (
        <BurgerLinks>
          <ul>
            <li onClick={() => setShow(false)}>
              <Link to={"/"}>Home</Link>
            </li>
            {categories.map((category) => {
              return (
                <li onClick={() => setShow(false)} key={category}>
                  <Link to={`/${category}`}>{category}</Link>
                </li>
              );
            })}
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </BurgerLinks>
      )}
    </Circle>
  );
};

export default NavMenu;
