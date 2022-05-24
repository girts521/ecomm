import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
  // margin-bottom: 20px;
  margin: 20px auto;
  max-width: 90vw;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

export const Button = styled.button`
    border: none;
    background-color: black;
    color: white;
    border-radius: 5px;
    width: 50%;
    height: 50px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
    margin-bottom: 10px;
    cursor: pointer;

    @media(min-width: 768px) {
        width: 50%;
    }

    &:hover {
        opacity: 0.8;
        transform: scale(1.01);
    }
  

`;