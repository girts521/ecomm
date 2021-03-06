import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 40px;
  background: linear-gradient(318deg, #f8f9fa, #e9ecef);
  background-size: 200% 100%;
  padding: 0;
  margin: 0 auto;
  overflow-y: scroll;
  position: fixed;
  top: 50px;
  z-index: 3;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    li {
      padding: 7px;
      min-width: 80px;

      @media (min-width: 1024px) {
        font-size: 18px;
      }
    }
  }
`;
