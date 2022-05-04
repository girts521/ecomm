import React, { useState, useEffect } from "react";
import "./reset.css";
import styles from "./App.module.scss";
import Nav from "./Components/Nav/Nav";
import Carousel from "./Components/Carousel/Carousel";
import CategoriesIcons from "./Components/CategoriesIcons/CategoriesIcons";
import Categories from "./Components/Categories/Categories";
import CategoriesBar from "./Components/CategoriesBar/CategoriesBar";
import Deal from "./Components/Deal/Deal";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <CategoriesBar />
      <Carousel />
      <CategoriesIcons />
      <Categories heading={"Lightning Deals"} />
      <Deal header={'Hot sale'} />
      <Categories heading={"New arrivals"} />
      <Deal header={'Spring sale'}/>
      <Deal header={'Mothers Day'}/>
      <Deal header={'Special sale'}/>
      <Products />
      <Footer />
    </div>
  );
};

export default App;
