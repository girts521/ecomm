import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./reset.css";
// import styles from "./App.module.scss";
import styled from "styled-components";
import Nav from "./Components/Nav/Nav";
import Carousel from "./Components/Carousel/Carousel";
import CategoriesIcons from "./Components/CategoriesIcons/CategoriesIcons";
import Categories from "./Components/Categories/Categories";
import CategoriesBar from "./Components/CategoriesBar/CategoriesBar";
import Deal from "./Components/Deal/Deal";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";

const Container = styled.main`
    background: linear-gradient(318deg, #f8f9fa, #e9ecef);
    background-size: 200% 200%;
`;


const App: React.FC = () => {
  return (
      <Container>
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
      </Container>
  );
};

export default App;
