import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
  padding: 5px;
  min-width: 100%;
  background: linear-gradient(318deg, #f8f9fa, #e9ecef);
  background-size: 200% 100%;
  position: fixed;
  top: 0;
  z-index: 5;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
  animation: fadeIn 1s ease 1;
`;

export const Circle = styled.div<{ open: Boolean }>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 50px;
  width: 50px;
  background: linear-gradient(318deg, #adb5bd, #f8f9fa);
  background-size: 400% 100%;
  border-radius: 50%;
  z-index: 3;
  overflow: hidden;
  transition-delay: 0.2s;
  transition-duration: 0.5s;
  transition-property: height, width, border-radius;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  padding: 0;
  margin: 0;

  ${(props) =>
    props.open &&
    "height: 100vh; width: 80vw; border-radius: 0; animation: BackgroundColorChange 1s ease 1; animation-fill-mode: forwards;"}

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Burger = styled.div<{ show: Boolean }>`
  height: 30px;
  width: 30px;
  position: absolute;
  top: 11px;
  left: 10px;
  transition-duration: 1s;
  transition-property: opacity, transform;

  svg {
    height: 100%;
    width: 100%;
  }

  ${(props) => (props.show 
  ? "opacity: 0; transform: rotate(180deg); transition-delay: 0.1s; z-index: 1;" 
  : "opacity: 1; transform: rotate(-180deg); transition-delay: 0.3s; z-index: 3;")}

`;

export const CloseBtn = styled.div<{ show: Boolean }>`
  position: absolute;
  top: 14px;
  left: 17px;
  transition-property: opacity, transform;

  ${(props) => (props.show 
    ? "opacity: 1; z-index: 2; transform: rotate(180deg); transition-delay: 0.5s; transition-duration: 0.5s;" 
    : "opacity: 0; z-index: 1; transform: rotate(-180deg); transition-delay: 0.1s; transition-duration: 1s;")}
`;

export const BurgerLinks = styled.div`
  margin-top: 50px;
  margin-left: 10px;
  width: 100%;

  /* for loops of scss are not supported in styled components yet :( */
  /* @for $i from 1 through 15 {
    ul :nth-child(#{$i}n) {
      animation-duration: #{($i/8)}s;
    }
  } */

  li {
    padding: 10px;
    width: 100%;
    animation: MoveUp 0.5s ease 0.2s;
    animation-fill-mode: forwards;
  }

  @keyframes MoveUp {
    0% {
      transform: translateY(400px);
    }
    50% {
      transform: translateY(300px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export const Brand = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-right: 40px;
  animation: fadeIn 0.7s ease;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-right: 0;
    margin-left: 20px;
    font-size: large;
  }

  @media (min-width: 1024px) {
    font-size: x-large;
    margin-left: 40px;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const RightNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  position: relative;

  svg {
    cursor: pointer;
  }


  input {
    margin-right: 7px;
    animation: fadeIn 0.7s ease;
    border: transparent;
    border-radius: 15px;
    height: 20px;
    padding: 5px;
    outline: none;
    // color: #f8f9fa;
    // outline-color:#f8f9fa;
    background-color: #adb5bd;
  }
 

  @media (min-width: 768px) {
    margin-left: 0;
    margin-right: 20px;

    div {
      margin-right: 20px;
    }
  }
`;

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
