import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  @media (min-width: 768px) {
    // align-items: flex-start;
    img {
      width: 200px;
    }

    h3,
    p {
      font-size: 20px;
    }
  }

  @media (min-width: 1024px) {
    img {
      width: 300px;
    }
  }
`;
