import React, { useState } from "react";
import styles from "./Nav.module.scss";

const Nav: React.FC = () => {
  const [show, setShow] = useState(true);

  const showNav = () => {
    setShow(!show);
  };

  return (
    <div className={styles.container}>
      <div
        onClick={showNav}
        className={`${styles.circle} ${show ? "" : styles.open}`}
      >
        <svg
          className={`${styles.burger} ${
            show ? styles.burgerShow : styles.burgerHidden
          } `}
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

        <svg
          className={`${styles.xHidden} ${show ? "" : styles.xOpen}`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>

        {show ? (
          ""
        ) : (
          <div className={styles.burgerLinks}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Category 1</a>
              </li>
              <li>
                <a href="#">Category 2</a>
              </li>
              <li>
                <a href="#">Category 3</a>
              </li>
              <li>
                <a href="#">Category 4</a>
              </li>
              <li>
                <a href="#">Category 5</a>
              </li>
              <li>
                <a href="#">Category 6</a>
              </li>
              <li>
                <a href="#">Category 7</a>
              </li>
              <li>
                <a href="#">Category 8</a>
              </li>
              <li>
                <a href="#">Category 9</a>
              </li>
              <li>
                <a href="#">Category 10</a>
              </li>
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
          </div>
        )}
      </div>
      <div className={styles.brand}>My Brand Name</div>
      <div className={styles.right}>
        <div className={styles.search}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
            <path d="M19.6 21 13.3 14.7Q12.55 15.3 11.575 15.65Q10.6 16 9.5 16Q6.775 16 4.888 14.113Q3 12.225 3 9.5Q3 6.775 4.888 4.887Q6.775 3 9.5 3Q12.225 3 14.113 4.887Q16 6.775 16 9.5Q16 10.6 15.65 11.575Q15.3 12.55 14.7 13.3L21 19.6ZM9.5 14Q11.375 14 12.688 12.688Q14 11.375 14 9.5Q14 7.625 12.688 6.312Q11.375 5 9.5 5Q7.625 5 6.312 6.312Q5 7.625 5 9.5Q5 11.375 6.312 12.688Q7.625 14 9.5 14Z" />
          </svg>
        </div>
        <div className={styles.login}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
          </svg>
        </div>
        <div className={styles.cart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Nav;
