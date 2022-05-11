import styled from "styled-components";

export const Container = styled.div`
  /* border: 1px solid red; */
  background-color: #f8f9fa;
  width: 100%;
  height: 20%;
  position: fixed;
  bottom: 0;
  padding: 10px;

  @media (min-width: 768px) {
      position: relative;
      width: 50%;
      margin-right: 5%;
  }

  h2{
    font-size: 1.5rem;
    margin-bottom: 10px;
    margin-top:10px;
  }

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
