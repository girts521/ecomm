import React, {useState} from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  ProductInfo,
  AddToCart,
  Price,
  SmallInfo,
  Size,
  Sizes
} from "./ProductStyles";

import ProductsCarousel from "../Components/Products.tsx/ProductsCarousel/ProductsCarousel";
import Quantity from "../Components/Cart/Quantity/Quantity";

const Product: React.FC = () => {
  const { productName, categoryName } = useParams();

  const [selected, setSelected] = useState(Number);

  let select = false;


    const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
        setSelected(Number(e.currentTarget.innerText));
    }



  return (
    <Container>
      <h1>{productName}</h1>

      <ProductsCarousel />

      <ProductInfo>
        <Price>50$</Price>
        <SmallInfo>
          Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsa maiores blanditiis dignissimos debitis quisquam enim reiciendis.
          Iure, doloremque molestiae, a nemo provident consectetur, laboriosam
          vel veniam est nobis aperiam ducimus?{" "}
        </SmallInfo>
        <SmallInfo> Brand: Nike</SmallInfo>
        <SmallInfo>Selected Size: {selected}</SmallInfo>

        <Sizes>
        <Size onClick={(e) => {clickHandler(e)}}>42</Size>
        <Size onClick={(e) => {clickHandler(e)}}>43</Size>
        <Size onClick={(e) => {clickHandler(e)}}>44</Size>
        <Size onClick={(e) => {clickHandler(e)}}>45</Size>
        <Size onClick={(e) => {clickHandler(e)}}>46</Size>
        <Size onClick={(e) => {clickHandler(e)}}>47</Size>
        <Size onClick={(e) => {clickHandler(e)}}>48</Size>
        <Size onClick={(e) => {clickHandler(e)}}>49</Size>
        </Sizes>



        <SmallInfo>Color: White/black</SmallInfo>
        <Quantity />
      </ProductInfo>
      <AddToCart>
        <button>Add to cart</button>
      </AddToCart>
    </Container>
  );
};

export default Product;
