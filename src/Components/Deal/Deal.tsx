import React from "react";
import {Header, Banner} from "./styles";

const Deal: React.FC<{ header: String }> = ({ header }) => {
  return (
    <>
        <Header>{header}</Header>
        <Banner />
    </>
  );
};

export default Deal;
