import React from "react";
import { Container } from "./styles";
import CardSummaryCard from "./CartSummaryCard/CardSummaryCard";
import { useSelector, useDispatch } from "react-redux";

type AuthState = {
  isLoggedIn: boolean;
  user: {
    id: string;
    firstName: string;
    email: string;
    lastName: string;
    isAdmin: boolean;
    cart: string[];
  };
};

type Item = {
    product_id: string;
    product_name: string;
    price: string;
    quantity: number;
    product_img: string;
    user_id: number;
    session_id: string;
  };

type CartState = Item[];

type State = {
  cart: CartState;
  auth: AuthState;
};

const CartSummary: React.FC<{cartProducts:  CartState }> = (cartProducts) => {
//   const cartProducts = useSelector((state: State) => state.cart);

console.log('cartProducts', cartProducts.cartProducts[0]);



  return (
    <Container>
      {cartProducts.cartProducts.map((item: Item) => {
        return <CardSummaryCard key={item.product_id} item={item} />;
      })}
    </Container>
  );
};

export default CartSummary;
