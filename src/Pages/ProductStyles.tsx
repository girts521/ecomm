import styled from "styled-components";
import Carousel from "../Components/Carousel/Carousel";
import {Container as CarouselContainer}  from "../Components/Carousel/styles";

export const Container = styled.main`
    background: linear-gradient(318deg, #f8f9fa, #e9ecef);
    background-size: 200% 200%;
    min-height:95vh;

    h1{
        margin-top: 50px;
        padding-top:20px;
        text-align: center;
        font-size: 2rem;
        font-weight: bold;
        color: #212529;

    }
`;

export const ProductInfo = styled.div`
    display:flex;
    flex-direction:column;  
    padding-bottom: 100px;
`;

export const AddToCart = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:20px;
    position: fixed;
    bottom: 0px;
    width: 100%; 
    background-color: #e9ecef;
    
    button {
    border: none;
    background-color: black;
    color: white;
    border-radius: 5px;
    width: 90%;
    height: 50px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
        transform: scale(1.01);
    }
  }

`;

export const Price = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    color: #212529;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
`;

export const SmallInfo = styled.div`
    font-size: 1rem;
    color: #212529;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
`;

export const Size = styled.div`
    font-size: 1rem;
    color: #212529;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
    border: 1px solid #212529;
    border-radius: 5px;
    padding: 5px;
    width: 50px;
    text-align: center;



    &:hover {
        cursor: pointer;
        background-color: #212529;
        color: white;
    }

`;

export const Sizes = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100%;
    height: 100px;
    margin: 0 auto;

    ::-webkit-scrollbar{
       display: none;
    }
`;