import styled from "styled-components";

export const Container = styled.main`
/* height: 100vh; */
display: flex;
flex-direction: column;
/* justify-content: center; */
padding-bottom: 100px;

@media (min-width: 768px) {
    padding-bottom: 50px;
}

`;

export const CartInfo = styled.div`
display: flex;
flex-direction: column;

@media (min-width: 768px) {
    flex-direction: row;
}
`;

export const Header = styled.h1`
font-size: 2rem;
margin:50px auto 30px;
text-align: center;
`;