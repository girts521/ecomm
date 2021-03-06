import React from "react";
import { Routes, Route } from "react-router-dom";

import "./reset.css";
import styled from "styled-components";
import Nav from "./Components/Nav/Nav";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Category from "./Pages/Category/Category";

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
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/:categoryName" element={<Category />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Container>
  );
};

export default App;
