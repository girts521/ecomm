import React, {useState} from "react";
import { Container, ProductInfo, Quantity } from "./styles";

const CardSummaryCard: React.FC = () => {
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
        <img src="https://via.placeholder.com/150" alt="product" />
        <ProductInfo>
        <h1>Product Name</h1>
        <h2>Product Price</h2>
        <h3>Product Quantity</h3>

        <Quantity>
        <button onClick={subtractQuantity}>-</button>
        <input type="number" min={1} value={quantity} />
        <button onClick={addQuantity}>+</button>
        
        </Quantity>

        </ProductInfo>

        </Container>
    )
};

export default CardSummaryCard;
