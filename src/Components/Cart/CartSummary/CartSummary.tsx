import React, {useState, useEffect} from "react";
import { Container } from "./styles";
import CardSummaryCard from "./CartSummaryCard/CardSummaryCard";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart";


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

const CartSummary: React.FC = () => {

const [cart, setCart] = useState<Item[]>([]);

const dispatch = useDispatch();
const cartData = useSelector((state: State) => state.cart);
// const quantity = useSelector((state: State) => state.cart.);
console.log('cartData',cartData)

useEffect(() => {
    console.log('effect')
    let url = `/cartData`;
    fetch(url, {
      credentials: "include",
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        setCart(data);
        console.log(cart)

      })
      .catch(err => {
        console.log(err);
      });
      // save cart in store
} , [cartData]);


  return (
    <Container>
      {cart && cart.map((item: Item) => {
        return <CardSummaryCard key={item.product_id} item={item} />;
      })}
    </Container>
  );
};

export default CartSummary;
