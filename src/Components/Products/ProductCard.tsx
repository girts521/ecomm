import React from "react";
import styles from "./ProductCard.module.scss";

const ProductCard: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="https://via.placeholder.com/150" alt="product" />
            </div>
            <div className={styles.infoContainer}>
                <h3>Product Name</h3>
                <p>$100</p>
            </div>
        </div>
    );
}

export default ProductCard;