import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;
    width: max-content;
    margin-bottom: 10px;
    border: 1px solid #f8f9fa;
    background-color: #f8f9fa;
    border-radius: 5px;

    input{
        width: 10px;
        border: none;
    }

    button{
    border-radius: 5px;
    width: 30px;
    border: none;
    background-color: #f8f9fa;
    }
`;