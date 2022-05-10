import React from "react";
// import styles from "./Products.module.scss";
import {Container} from "./ProductsStyles"
import ProductCard from "./ProductCard";


const Products: React.FC = () => {
    return (
        <Container>
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
        </Container>
    ); 
    };

    export default Products;