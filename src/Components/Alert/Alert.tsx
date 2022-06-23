import React from "react";
import { Container, TextBox } from "./styles";

const Alert: React.FC<{text:string}> = ({text}) => {


    return (
        <Container>
            <TextBox>
               {text}
            </TextBox>

        </Container>
    )
}

export default Alert;