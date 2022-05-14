import React from "react";
import { useState, useEffect } from "react";
import {Container} from "./styles";

const Quantity: React.FC = () => {

        //state for product quantity
        const [quantity, setQuantity] = useState(1);

        //function to add product quantity
        const addQuantity = () => {
            //if quantity is less than 10, add 1 to quantity
            if (quantity < 10) {
            setQuantity(quantity + 1);
        
            }
            else{
                return
            }
        };
    
        //function to subtract product quantity
        const subtractQuantity = () => {
            //if quantity is 1, do not subtract
            if (quantity === 1) {
                return;
            }
            //else subtract
            else{
                setQuantity(quantity - 1); 
            }
        }




    return (
        <Container>
        <button onClick={subtractQuantity}>-</button>
        <input type="number" readOnly min={1} max={10} value={quantity} />
        <button onClick={addQuantity}>+</button>
        </ Container>
    )

}

export default Quantity;