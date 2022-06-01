import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 30vh;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    bottom: 0;
  }

  @media (min-width: 768px) {
    height: 60vh;
  }
`;

export const Arrow = styled.div<{ prev?: Boolean; next?: Boolean }>`
  position: absolute;
  height: 100%;
  width: 50%;
  top: 0;
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
  ${(props) => props.next && "right: 0;"}
`;

export const Price = styled.div``;
