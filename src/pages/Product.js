import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { Banner } from "../components/Banner";
import { Main } from "../components/Main";
import { Context } from "../Context";

export default class Product extends Component {
  constructor(props) {
    super(props);
    console.log("props", props);
    this.state = {
      slug: this.props.params.slug,
    };
  }

  static contextType = Context;

  render() {
    const { getPhone } = this.context;
    const phone = getPhone(this.state.slug);
    const { name, images, operatingSystem, price, memory } = phone;
    return (
      <Main main="mainPhones">
        <Banner title={`${name}`}>
          <Link>go back</Link>
        </Banner>
      </Main>
    );
  }
}
