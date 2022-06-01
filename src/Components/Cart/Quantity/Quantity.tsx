import React from "react";
import { useState } from "react";
import { Container } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart";
import { State } from "../../../types";

const Quantity: React.FC<{ product_id?: string }> = ({ product_id }) => {
  const dispatch = useDispatch();
  const cartData = useSelector((state: State) => state.cart);

  //state for product quantity
  const [quantity, setQuantity] = useState(1);

  //function to add product quantity
  const addQuantity = () => {
    //if quantity is less than 10, add 1 to quantity
    if (quantity < 10) {
      setQuantity(quantity + 1);
    } else {
      return;
    }
  };

  //function to subtract product quantity
  const subtractQuantity = () => {
    //if quantity is 1, do not subtract
    if (quantity === 1) {
      if (product_id) {
        //delete item from cart
        const url = "/deleteItem";
        fetch(url, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Credentials: "include",
          },
          body: JSON.stringify({
            product_id: product_id,
          }),
        })
          .then((res) => res.json())
          .then((data: String) => {
            console.log(data);
            dispatch(cartActions.removeFromCart(product_id));
          })
          .catch((err) => {
            console.log(err);
          });
      }
      return;
    }
    //else subtract
    else {
      setQuantity(quantity - 1);
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
