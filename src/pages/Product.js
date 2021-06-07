import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
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
      return <div className="error">couldnt found</div>;
    }
    const {
      name,
      images,
      operatingSystem,
      price,
      memory,
      guarantee,
      size,
      weigth,
    } = phone;

    return (
      <Container className="product">
        <Row>
          <Col>
            <StyledComponent image={images[0]}></StyledComponent>
          </Col>
          <Col>
            <h2>{name}</h2>
            <ul>
              <li>
                <span className="cart-add-details">operatingSystem</span>
                <span className="product-details">{operatingSystem}</span>
              </li>
              <li>
                <span className="cart-add-details">memory</span>
                <span className="product-details">{memory} GB</span>
              </li>
              <li>
                <span className="cart-add-details">guarantee</span>
                <span className="product-details">{guarantee}</span>
              </li>
              <li>
                <span className="cart-add-details">weigth</span>
                <span className="product-details">{weigth}</span>
              </li>
              <li>
                <span className="cart-add-details">size</span>
                <span className="product-details">{size}</span>
              </li>
              <li>
                <span className="cart-add-details">price</span>
                <span className="product-details">{price}&#x20bc;</span>
              </li>
            </ul>
            <Link className="btn" to="/phones">
              all Products
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
} 
