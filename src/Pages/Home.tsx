import React from "react";
import Carousel from "../Components/Carousel/Carousel";
import CategoriesIcons from "../Components/CategoriesIcons/CategoriesIcons";
import Categories from "../Components/Categories/Categories";
import CategoriesBar from "../Components/CategoriesBar/CategoriesBar";
import Deal from "../Components/Deal/Deal";
import Products from "../Components/Products/Products";
import Footer from "../Components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <>
      <CategoriesBar />
      <Carousel />
      <CategoriesIcons />
      <Categories heading={"Lightning Deals"} />
      <Deal header={"Hot sale"} />
      <Categories heading={"New arrivals"} />
      <Deal header={"Spring sale"} />
      <Deal header={"Mothers Day"} />
      <Deal header={"Special sale"} />
      <Products />
      <Footer />

    </>
  );
};

export default Home;
