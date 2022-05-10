import styled from "styled-components";

export const Heading = styled.h1`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #000;
  background-color: #f8f9fa;
  padding: 0.5rem;
  margin: 0;
  width: 90vw;
  margin: auto;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  max-width: 90vw;
  height: 300px;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  @media (max-width: 768px) {
    // flex-direction: row;

    img {
      width: 50px;
      height: 50px;
    }
  }

  &:hover {
    transform: scale(1.1);
  }

  img {
    // width: 50%;
    max-height: 100px;
    margin-bottom: 7px;
  }
`;
