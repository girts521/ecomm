import React from "react";
import styles from "./ProductCard.module.scss";
import {Container} from "./ProductCardStyles"

const ProductCard: React.FC = () => {
    return (
        <Container>
      
            <div>
                <img src="https://via.placeholder.com/150" alt="product" />
            </div>
            <div >
                <h3>Product Name</h3>
                <p>$100</p>
            </div>
    
        </Container>
    );
}

export default ProductCard; 