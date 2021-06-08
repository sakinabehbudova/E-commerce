import React from "react";
import { Link } from "react-router-dom";
import  Container  from "../components/Container";
import { Banner } from "../components/Banner";
import { Main } from "../components/Main";

export const Phones = () => {
  return (
    <>
    <Main main="mainPhones">
      <Banner title="our phones" subtitle="buy online !">
        <Link to="/" className="btn">return home</Link>
      </Banner>
    </Main>
    <Container></Container>
    </>
  );
};
