import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import CardSummaryCard from "./CartSummaryCard/CardSummaryCard";
import { useSelector } from "react-redux";
import { Item, State } from "../../../types";

const CartSummary: React.FC = () => {
  const [cart, setCart] = useState<Item[]>([]);

  const cartData = useSelector((state: State) => state.cart);

  useEffect(() => {
    let url = "/cartData";
    fetch(url, {
      credentials: "include",
      method: "GET",
    })
      .then((res) => res.json())
      .then((data: Item[]) => {
        setCart(data);
      })
      .catch((err) => {
        console.log(err);
      });
    // save cart in store
  }, [cartData]);

  return (
    <Container>
      {cart &&
        cart.map((item: Item) => {
          return <CardSummaryCard key={item.product_id} item={item} />;
        })}
    </Container>
  );
};

export default CartSummary;
