import React,{useEffect, useState} from "react";
import { Container } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { Item, State } from "../../../types";



const PurchaseDetails: React.FC = () => {
  const cartData = useSelector((state: State) => state.cart);
  const [total, setTotal] = useState(0);

useEffect(() => {
    //check data in redux and calculate total
    if(cartData.cart.length > 0){
    let totalPrice = 0;
    console.log('cartData: ',cartData)
    cartData.cart.forEach((item: Item) => {
      totalPrice += parseFloat(item.price);
      console.log('total',totalPrice)
      setTotal(parseFloat(totalPrice.toFixed(2)));
    });
  }

}, [cartData]);


  return (
    <Container>
      <h1>Purchase Details</h1>
      <h2>{total} $</h2>
      <button>Proceed to Checkout</button>
    </Container>
  );
};

export default PurchaseDetails;
