import React, { useEffect, useState } from "react";
import Carousel from "../Components/Carousel/Carousel";
import CategoriesIcons from "../Components/CategoriesIcons/CategoriesIcons";
import MovingCards from "../Components/MovingCards/MovingCards";
import Deal from "../Components/Deal/Deal";
import Products from "../Components/Products/Products";
import Footer from "../Components/Footer/Footer";
import Alert from "../Components/Alert/Alert";

import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { HomeUserDataType } from "../types";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    let url = "/api/user";
    fetch(url, {
      credentials: "include",
      method: "GET",
    })
      .then((res) => res.json())
      .then((data: HomeUserDataType) => {
        if (data.isLoggedIn) {
          setShowAlert(true)
          setTimeout(() => {
            setShowAlert(false)
          }, 3000)
          dispatch(authActions.logout()); 
          dispatch(authActions.setUser(data.loggedUser));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  return (
    <>
      <Carousel />
      {showAlert &&  <Alert text="Welcome to our lovely shop, feel free to browse!" /> }
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
