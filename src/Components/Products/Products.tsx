import React from "react";
import styles from "./Products.module.scss";
import ProductCard from "./ProductCard";

const Products: React.FC = () => {
    return (
        <div className={styles.container}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        </div>
    );
    };

    export default Products;