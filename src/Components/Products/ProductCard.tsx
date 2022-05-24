import React from "react";
import {Container} from "./ProductCardStyles"
import { useNavigate } from "react-router-dom";


const ProductCard: React.FC<{id: string ,img: string, productName: string, productPrice: string, categoryId: string}> = ({id,img, productName, productPrice, categoryId}) => {

    const navigate = useNavigate();

    const clickHandler = () => {
        console.log("clicked");
        navigate(`/product/${id}`);
    }

    return (
        <Container id={id} onClick={clickHandler}>
            <div>
                <img src={img} alt="product" />
            </div>
            <div >
                <h3>{productName}</h3>
                <p>{productPrice}</p>
            </div>
    
        </Container>
    );
}

export default ProductCard; 