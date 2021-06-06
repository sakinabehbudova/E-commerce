import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { Banner } from "../components/Banner";
import { Main } from "../components/Main";
import StyledComponent from "../components/StyledComponent";
import { Context } from "../Context";

export default class Product extends Component {
  constructor(props) {
    super(props);
    // console.log("props", props);
    this.state = {
      slug: this.props.match.params.slug,
    };
  }

  static contextType = Context;

  render() {
    const { getPhone } = this.context;
    const phone = getPhone(this.state.slug);
    if (!phone) {
      return (
        <div className="error">
         couldnt found
        </div>
      );
    }
    const { name, images, operatingSystem, price, memory } = phone;

    return (
      <>
      <StyledComponent image={images[0]}>
    
      </StyledComponent>
 
      <Link className="btn" to="/phones">all Products</Link>

      </>
    );
  }
}
