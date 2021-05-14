import React from "react";
import { Main } from "../components/Main";
import {Banner} from "../components/Banner"
import {Link} from "react-router-dom"

export const Error = () => {
  return (
    <Main>
      <Banner title="404" subtitle="page not found">
        <Link to="/" className="btn">back to main page</Link>
      </Banner>
    </Main>
  );
};
