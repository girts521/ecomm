import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import CardSummaryCard from "./CartSummaryCard/CardSummaryCard";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart";
import { Item, State } from "../../../types";

const CartSummary: React.FC = () => {
  const [cart, setCart] = useState<Item[]>([]);
  const dispatch = useDispatch();


  const cartData = useSelector((state: State) => state.cart);

  useEffect(() => {
    console.log('1st effect')
    console.log('cart data',cartData)

    let url = "/cartData"; 
    fetch(url, {
      credentials: "include",
      method: "GET",
    })
      .then((res) => res.json())
      .then((data: Item[]) => {
        console.log('cart data from db',data)
        setCart(data);
        if(cartData.cart.length === 0){
          data.forEach((item: Item) => {
            dispatch(cartActions.addToCart(item));
          })
        }
        console.log('in redux after:', cartData)

      })
      .catch((err) => {
        console.log(err);
      });
    // save cart in store
  }, []);

  useEffect(() => {
    console.log('2nd effect')
    console.log('cart data',cartData)
    setCart(cartData.cart);
  }, [cartData]);

  return (
    <Container>
      {cart &&
        cart.map((item: Item) => {
          return <CardSummaryCard key={item.product_id} item={item} />;
        })}

        <button onClick={() => {
          console.log(cartData)
        }}>Checkout</button>
    </Container>
  );
};

export default CartSummary;
