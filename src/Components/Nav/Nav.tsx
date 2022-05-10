import React, { useState } from "react";
import {
  NavContainer,
  Backdrop,
  Brand,
  RightNav,
  Search,
  Login,
  Cart,
} from "./styles";
import NavMenu from "./NavMenu";

const Nav: React.FC = () => {
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showBrand, setShowBrand] = useState(true);

  //change nav state on click
  const showNav = (state: boolean) => {
    setShow(state);
  };

  //change search state on click
  const showSearchBar = () => {
    setShowSearch(!showSearch);
    if (window.innerWidth < 768) {
      setShowBrand(!showBrand); 
    }
  };

  return (
    <NavContainer>
      {show && <Backdrop onClick={() => showNav(false)} />}

      <NavMenu show={show} setShow={setShow} />

      {showBrand ? <Brand> My Brand Name</Brand> : ""}

      <RightNav>
        {showSearch && (
          <div>
            <input type="text" autoFocus />
          </div>
        )}

        <Search
          onClick={() => {
            showSearchBar();
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
            <path d="M19.6 21 13.3 14.7Q12.55 15.3 11.575 15.65Q10.6 16 9.5 16Q6.775 16 4.888 14.113Q3 12.225 3 9.5Q3 6.775 4.888 4.887Q6.775 3 9.5 3Q12.225 3 14.113 4.887Q16 6.775 16 9.5Q16 10.6 15.65 11.575Q15.3 12.55 14.7 13.3L21 19.6ZM9.5 14Q11.375 14 12.688 12.688Q14 11.375 14 9.5Q14 7.625 12.688 6.312Q11.375 5 9.5 5Q7.625 5 6.312 6.312Q5 7.625 5 9.5Q5 11.375 6.312 12.688Q7.625 14 9.5 14Z" />
          </svg>
        </Search>

        <Login>
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
        </Login>

        <Cart>
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
        </Cart>
      </RightNav>
    </NavContainer>
  );
};

export default Nav;
