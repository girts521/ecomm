import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(318deg, #f8f9fa, #e9ecef);
    background-size: 200% 200%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    height: 100vh;
    width: 100vw;
    padding: 0;
    /* margin-top: 200px; */
    border: 0;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    z-index: 1;
    overflow-y: auto;
    overflow-x: hidden;

    h1{
        margin-top: 10vh;
        font-size: 2rem;
        font-weight: bold;
    }
`;

export const ProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    height: 100%;
    width: 100%;
    padding: 0;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    overflow: scroll;

`;

export const Product = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 5px;
    width: 80vw;
    max-width: 500px;
    max-height: 20vh;
    margin: 10px;
    cursor: pointer;

    :hover{
        background: #f8f9fa;
        transform: scale(1.05);
    }
`;

export const ProductImage = styled.img`
    height: 100%;
    width: 50%;
    border-radius: 5px;
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;

`;