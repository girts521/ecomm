import React, { useEffect, useState, useRef } from "react";
import { Container } from "./ProductsStyles";
import ProductCard from "./ProductCard";
import { productsData } from "../../types";

const Products: React.FC<{ category?: string }> = ({ category }) => {
  const [products, setProducts] = useState<productsData[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);

  const options = {
    root: null,
    rootMargin: "100px",
    threshold: 1.0,
  };

  const callback = (entries: any, observer: any) => {
    const lastProduct = entries[0];
    if (!lastProduct.isIntersecting) return;
    loadProducts();
    observer.unobserve(lastProduct.target);
  };

  const observer = new IntersectionObserver(callback, options);

  useEffect(() => {
    if (containerRef.current?.children.length === 0) {
      // call for 1st 10 products

      let url = `/products`;
      fetch(url, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page: 1,
          limit: 10,
          category: category,
        }),
      })
        .then((res) => res.json())
        .then((data: productsData[]) => {
          setProducts(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    //load more products when scrolled to bottoM
    if (containerRef.current && containerRef.current.children.length > 0) {
      //sets observer to the last product
      observer.observe(
        containerRef.current.children[containerRef.current.children.length - 1]
      );
    }
  }, [products]);

  //load next page of products
  const loadProducts = () => {
    let url = `/products`;
    fetch(url, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        page: products.length / 10 + 1,
        limit: 10,
        category: category,
      }),
    })
      .then((res) => res.json())
      .then((data: productsData[]) => {
        console.log(data);
        if (data.length === 0 && products.length > 0) {
          //if no more products to load then stop the observer
          observer.unobserve(
            containerRef.current!.children[
              containerRef.current!.children.length - 1
            ]
          );
        }
        //add new products to the list
        if (data.length > 0) {
          setProducts([...products, ...data]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container ref={containerRef}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            img={product.product_img}
            productName={product.product_name}
            productPrice={product.product_price}
          />
        ))}
      </Container>
    </>
  );
};

export default Products;
