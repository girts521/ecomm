import styled from "styled-components";

export const Header = styled.h1`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #000;
  background-color: #f8f9fa;
  padding: 0.5rem;
  width: 90vw;
  margin: auto;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const Banner = styled.div`
  border: 1px solid #ccc;
  margin-bottom: 40px;
  margin-top: 10px;
  height: 140px;
  background-image: url("https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1215&q=80");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    height: 380px;
    width: 90vw;
    margin: 10px auto 60px;
  }
`;
