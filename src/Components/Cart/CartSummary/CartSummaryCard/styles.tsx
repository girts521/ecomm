import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 7px;
    margin-bottom: 15px;
    /* border: 1px solid red; */
    border-radius: 7px;

    img{
        border-radius: 7px;
    }
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    margin-left: 20px;
    width: 100%;
`;

export const Quantity = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;
    width: max-content;
    margin-bottom: 10px;
    border: 1px solid #f8f9fa;
    background-color: #f8f9fa;
    border-radius: 5px;

    input{
        width: 10px;
        border: none;
    }

    button{
    border-radius: 5px;
    width: 30px;
    border: none;
    background-color: #f8f9fa;
    }
`;