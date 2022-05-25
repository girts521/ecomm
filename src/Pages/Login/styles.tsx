import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(318deg, #f8f9fa, #e9ecef);
  background-size: 200% 200%;
  margin-top: 50px;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    max-width: 400px;
    margin-bottom: 1rem;

    label {
      font-size: 1rem;
      font-weight: bold;
      margin-bottom: 0.5rem;

    }

    input {
      width: 90%;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-bottom: 1rem;
    }

    button {
      border: none;
      background-color: black;
      color: white;
      border-radius: 5px;
      width: 90%;
      height: 50px;
      margin-left: 10px;
      margin-right: 10px;
      margin-top: 20px;
      margin-bottom: 10px;
      cursor: pointer;
      font-size: 1.2rem;

      @media (min-width: 768px) {
        width: 50%;
      }

      &:hover {
        opacity: 0.8;
        transform: scale(1.01);
      }
    }
  }
`;

export const Error = styled.div`
color: red;
margin-bottom: 15px;
`;
