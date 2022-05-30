import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  min-width: 150px;
  margin-right: 15px;
  margin-left: 5px;
  cursor: pointer;

  img {
    height: 70%;
    width: 100%;
  }

  @media (min-width: 1024px) {
    margin-right: 25px;
  }

  :last-child {
    margin-right: 50px;

    @media (min-width: 768px) {
      margin-right: 0px;
    }
  }
`;

export const CardContent = styled.div`
  margin-top: 5px;

  p {
    margin-bottom: 7px;

    @media (min-width: 1024px) {
      font-size: 18px;
    }
  }
`;
