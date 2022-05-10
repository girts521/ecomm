import styled, { css } from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 40vh;
  margin-bottom: 50px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 70%;
    object-fit: cover;
    position: absolute;
    bottom: 0;
  }

  @media (min-width: 768px) {
    height: 60vh;

    img {
      height: 80%;
    }
  }
`;

export const Arrow = styled.div<{prev?: Boolean, next?: Boolean}>`
  position: absolute;
  height: 100%;
  width: 50%;
  top: 35px;
  color: red;
  z-index: 2;
  font-size: 50px; 

  display: flex; 
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  padding-right: 10px;
  align-items: flex-end;

  ${(props) => props.prev && "left: 0;  transform: scale(-1);"}
  ${(props) => props.prev && "right: 0;"}
`;