import React from "react";
import { Link } from "react-router-dom";
import { Banner } from "../components/Banner";
import { Main } from "../components/Main";

export const Phones = () => {
  return (
    <Main main="phones">
      <Banner title="our phones" subtitle="">
        <Link to="/" className="btn">return home</Link>
      </Banner>
    </Main>
  );
};
