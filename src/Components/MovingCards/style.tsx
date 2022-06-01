import styled from "styled-components";

export const Heading = styled.h1`
  width: 90vw;
  margin: 0 auto 10px;

  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #000;
  background-color: #f8f9fa;
  padding: 0.5rem;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const Container = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: row;
  overflow: scroll;
  width: 100%;
  margin-bottom: 20px;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    width: 90%;
    margin: auto;
  }
`;
