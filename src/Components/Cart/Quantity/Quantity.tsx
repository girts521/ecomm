import React from "react";
import { useState } from "react";
import { Container } from "./styles";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart";
import { Item } from "../../../types";

const Quantity: React.FC<{ product: Item }> = ({ product }) => {
  const dispatch = useDispatch();

  const removeProducts = (product: Item) => {
    const url = "/api/deleteItem";
    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Credentials: "include",
      },
      body: JSON.stringify({
        product_id: product.product_id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "success") {
          //delete item from cart in redux
          const changedProduct: Item = data.cart.find(
            (item: Item) => item.product_id === product.product_id
          );
          if (changedProduct) {
            dispatch(
              cartActions.removeFromCart({
                id: product.product_id,
                price: changedProduct.price,
              })
            );
          } else {
            dispatch(cartActions.removeFromCart({ id: product.product_id }));
          }
        } else {
          console.log("error");
        }
      });
  };

  //state for product quantity
  const [quantity, setQuantity] = useState(product?.quantity || 1);

  //function to add product quantity
  const addQuantity = () => {
    //if quantity is less than 10, add 1 to quantity
    if (quantity < 10) {
      if (product && product!.product_id) {
        setQuantity(quantity + 1);
        fetch("/api/addToCart", {
          credentials: "include",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Credentials: "include",
          },
          body: JSON.stringify({
            product: {
              product_id: product.product_id,
              product_name: product.product_name,
              quantity: product.quantity + 1,
              product_img: product.product_img,
              price: product.price,
            },
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message === "success") {
              const changedProduct: Item = data.cart.find(
                (item: Item) => item.product_id === product.product_id
              );
              dispatch(
                cartActions.addToCart({
                  id: product!.product_id,
                  price: changedProduct.price,
                })
              );
            } else if (data.message === "error") {
              console.log("error");
            }
          });
      }
    } else {
      return;
    }
  };

  //function to subtract product quantity
  const subtractQuantity = () => {
    //if quantity is 1, do not subtract
    if (quantity === 1) {
      if (product && product!.product_id) {
        //delete item from cart
        removeProducts(product!);
      }
      return;
    }
    //else subtract
    else {
      setQuantity(quantity - 1);
      removeProducts(product!);
    }
  };

  return (
    <Container>
      <button onClick={subtractQuantity}>-</button>
      <input type="number" readOnly min={1} max={10} value={quantity} />
      <button onClick={addQuantity}>+</button>
    </Container>
  );
};

export default Quantity;
