import React, { useEffect } from "react";
import Carousel from "../Components/Carousel/Carousel";
import CategoriesIcons from "../Components/CategoriesIcons/CategoriesIcons";
import MovingCards from "../Components/MovingCards/MovingCards";
import Deal from "../Components/Deal/Deal";
import Products from "../Components/Products/Products";
import Footer from "../Components/Footer/Footer";

import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { HomeUserDataType } from "../types";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let url = "/user";
    fetch(url, {
      credentials: "include",
      method: "GET",
    })
      .then((res) => res.json())
      .then((data: HomeUserDataType) => {
        if (data.isLoggedIn) {
          dispatch(authActions.login());
          dispatch(authActions.setUser(data.loggedUser));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const logout = () => {
    let url = "/logout";
    fetch(url, {
      credentials: "include",
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }
  return (
    <>
      <Carousel />
      <button onClick={logout}>logout</button>
      <CategoriesIcons />
      <MovingCards heading={"Lightning Deals"} />
      <Deal header={"Hot sale"} />
      <MovingCards heading={"New arrivals"} />
      <Deal header={"Spring sale"} />
      <Deal header={"Mothers Day"} />
      <Deal header={"Special sale"} />
      <Products />
      <Footer />
    </>
  );
};

export default Home;
