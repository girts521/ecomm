import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./reset.css";
// import styles from "./App.module.scss";
import styled from "styled-components";
import Nav from "./Components/Nav/Nav";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

const Container = styled.main`
    background: linear-gradient(318deg, #f8f9fa, #e9ecef);
    background-size: 200% 200%;
`;


const App: React.FC = () => {
  return (
      <Container>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      </Container>
  );
};

export default App;


