import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

export default function Phone({ phone }) {
  //console.log("phone", phone);
  const { name, slug, price, images } = phone;
  return (
    <Col xs={12} md={3}>
      <div className="phone">
        <Link to={`/phones/${slug}`}>
          <img className="phone-image" src={images[0]} />
          <div className="phone-name">{name}</div>
          <div className="phone-details">
          <div className="price">{price} &#x20bc;</div>
        <Link to={`/phones/${slug}`} className="btn">
          Details
        </Link>
          </div>
        
      
        </Link>
      </div>
    </Col>
  );
}
