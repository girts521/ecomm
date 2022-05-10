import React from "react";
import { Container, CardContent } from "./styles";

const Card: React.FC = () => {
  return (
    <Container>
      <img
        src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        alt="Card Image"
      />

      <CardContent>
        <p className="title is-4">Card Title</p>
        <p className="subtitle is-6">Card Subtitle</p>
      </CardContent>
    </Container>
  );
};

export default Card;
