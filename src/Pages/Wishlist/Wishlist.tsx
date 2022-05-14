import React from "react";
import {Container, ProductsContainer, Product, ProductImage, ProductInfo} from "./styles";


const Whishlist: React.FC = () => {

    return (
        <Container>
            <h1>Your wishlist</h1>

        <ProductsContainer>


            <Product>
                <ProductImage src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <ProductInfo>
                <h3>Product name</h3>
                <p>$100</p>
                </ProductInfo>
            </Product>

            <Product>
                <ProductImage src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <ProductInfo>
                <h3>Product name</h3>
                <p>$100</p>
                </ProductInfo>
            </Product>

            <Product>
                <ProductImage src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <ProductInfo>
                <h3>Product name</h3>
                <p>$100</p>
                </ProductInfo>
            </Product>

            <Product>
                <ProductImage src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <ProductInfo>
                <h3>Product name</h3>
                <p>$100</p>
                </ProductInfo>
            </Product>
            <Product>
                <ProductImage src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <ProductInfo>
                <h3>Product name</h3>
                <p>$100</p>
                </ProductInfo>
            </Product>

            <Product>
                <ProductImage src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <ProductInfo>
                <h3>Product name</h3>
                <p>$100</p>
                </ProductInfo>
            </Product>
            <Product>
                <ProductImage src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <ProductInfo>
                <h3>Product name</h3>
                <p>$100</p>
                </ProductInfo>
            </Product>

            <Product>
                <ProductImage src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <ProductInfo>
                <h3>Product name</h3>
                <p>$100</p>
                </ProductInfo>
            </Product>

        </ProductsContainer>

            
        </Container> 
    );
}

export default Whishlist;