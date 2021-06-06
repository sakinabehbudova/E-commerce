import React, { Component } from "react";
import { Context } from "../Context";
import Loading from "./Loading";
import Phone from "./Phone";
import { Container, Row } from "reactstrap";

export default class Details extends Component {
  static contextType = Context;
  render() {
    let { sortedPhones: phones, loading } = this.context;
    phones = phones.map((phone) => {
      return <Phone key={phone.id} phone={phone} />;
    });
    return (
      <Container>
        <Row>
          <h1 className="title">Our Products</h1>
          {loading ? <Loading /> : phones}
        </Row>
      </Container>
    );
  }
}
