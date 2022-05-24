import React, { useEffect, useState, useRef } from "react";
import { Container, Button } from "./ProductsStyles";
import ProductCard from "./ProductCard";

type productsData = {
  category_id: string;
  id: string;
  product_desc: string;
  product_img: string;
  product_name: string;
  product_price: string;
};

const Products: React.FC<{category?: string}> = ({category}) => {
  const [products, setProducts] = useState<productsData[]>([]);
  const [validCategory, setValidCategory] = useState(false);
  

  const containerRef = useRef<HTMLDivElement>(null);


  const options = {
    root: null,
    rootMargin: '100px',
    threshold: 1.0,
  }

  const callback = (entries: any, observer:any) => {
    const lastProduct = entries[0]
    if(!lastProduct.isIntersecting) return
    loadProducts()
    observer.unobserve(lastProduct.target)
  }
  
  // const lastObserver = new IntersectionObserver(entries => {
  //   if(productsRef && productsRef.length > 0) {
  //   const lastProduct = productsRef![productsRef!.length - 1];
  //   if(lastProduct) {
  //     console.log('loading more products');
  //     loadProducts()
  //   }
  //   }
  // }, options);

  const observer = new IntersectionObserver(callback, options);

  useEffect(() => {

    if(!category) {
      setValidCategory(true)
    }

    if(category && validCategory === false) {
        fetch('/categories', {
            method: 'GET',
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
          const categoryList: string[] = []
          data.forEach((object: {category_name: string}) => {
            console.log(object.category_name);
            categoryList.push(object.category_name);
          })
          if(categoryList.includes(category)) {
            console.log('valid category');
            setValidCategory(true);
          }else{
            console.log('invalid category');
            setValidCategory(false);
          }
        })}
        

    if(containerRef.current?.children.length === 0 && validCategory === true) {
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
        console.log(data);
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
    }

    //load more products when scrolled to botto
    if(containerRef.current && containerRef.current.children.length > 0) {
      console.log(containerRef.current.children)
      observer.observe(containerRef.current.children[containerRef.current.children.length - 1])
    }
    
    
  }, [products, validCategory ]);


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
        if(data.length === 0 && products.length > 0) {
          console.log('no more products')
          observer.unobserve(containerRef.current!.children[containerRef.current!.children.length - 1])
        }
        if(data.length > 0) {
        setProducts([...products, ...data]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
          categoryId={product.category_id}
        />
      ))}

    </Container>
      </>
  );
};

export default Products;
