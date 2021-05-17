import React from "react";
import { Link } from "react-router-dom";
import { Banner } from "../components/Banner";
import { Main } from "../components/Main";

export const Home = () => {
  return (
    <Main main="mainPhones">
      <Banner title="Online Store" subtitle="Cell Phones & Smartphones">
        <Link to="/phones" className="btn">
          Our Phones
        </Link>
      </Banner>
    </Main>
  );
};
