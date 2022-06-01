import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  ProductInfo,
  AddToCart,
  Price,
  SmallInfo,
  Size,
  Sizes,
} from "./ProductStyles";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart";
import { productsData } from "../types";

import ProductsCarousel from "../Components/Products.tsx/ProductsCarousel/ProductsCarousel";
import Quantity from "../Components/Cart/Quantity/Quantity";

const Product: React.FC = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<productsData | null>(null);
  const [selected, setSelected] = useState(Number);

  const dispatch = useDispatch();

  useEffect(() => {
    //get product info
    let url = "/products";
    fetch(url, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: productId,
      }),
    })
      .then((res) => res.json())
      .then((data: productsData[]) => {
        setProduct(data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    setSelected(Number(e.currentTarget.innerText));
  };

  const addToCartHandler = () => {
    const cartData = {
      product_id: productId,
      product_name: product?.product_name,
      size: selected,
      quantity: 1,
      price: parseFloat(product!.product_price),
      product_img: product?.product_img,
    };

    dispatch(cartActions.addToCart(cartData));

    //add product to cart in db
    let url = "/addToCart";
    fetch(url, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product: {
          product_id: productId,
          product_name: product?.product_name,
          quantity: cartData.quantity,
          product_img: cartData.product_img,
          price: cartData.price,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <h1>{product && product.product_name}</h1>

      <ProductsCarousel />

      <ProductInfo>
        <Price>{product && product.product_price}</Price>
        <SmallInfo>{product && product.product_desc}</SmallInfo>
        <SmallInfo>Selected Size: {selected}</SmallInfo>

        <Sizes>
          <Size
            onClick={(e) => {
              clickHandler(e);
            }}
          >
            42
          </Size>
          <Size
            onClick={(e) => {
              clickHandler(e);
            }}
          >
            43
          </Size>
          <Size
            onClick={(e) => {
              clickHandler(e);
            }}
          >
            44
          </Size>
          <Size
            onClick={(e) => {
              clickHandler(e);
            }}
          >
            45
          </Size>
          <Size
            onClick={(e) => {
              clickHandler(e);
            }}
          >
            46
          </Size>
          <Size
            onClick={(e) => {
              clickHandler(e);
            }}
          >
            47
          </Size>
          <Size
            onClick={(e) => {
              clickHandler(e);
            }}
          >
            48
          </Size>
          <Size
            onClick={(e) => {
              clickHandler(e);
            }}
          >
            49
          </Size>
        </Sizes>

        <Quantity />
      </ProductInfo>
      <AddToCart>
        <button onClick={addToCartHandler}>Add to cart</button>
      </AddToCart>
    </Container>
  );
};

export default Product;
