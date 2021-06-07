import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

export default function Phone({ phone }) {
  // const [showDiv, setShowDiv] = useState(false);
  // console.log("showDiv", showDiv);
  const test = (e) => {
    console.log("testtt");
  };
  const { name, slug, price, images, operatingSystem, memory, guarantee } =
    phone;
  return (
    <Col xs={12} md={3} className="cart-item">
      <div className="cart-body">
        <Link to={`/phones/${slug}`}>
          <img className="cart-image" src={images[0]} />
          <div className="cart-name">{name}</div>
          <div className="cart-details">
            <div className="cart-price">{price} &#x20bc;</div>
            <Link to={`/phones/${slug}`} className="btn">
              Details
            </Link>
          </div>
        </Link>
      </div>
      <Link to={`/phones/${slug}`}>
      <div className="cart-add">
       
        <ul>
          <li>
            <span className="cart-add-details">operatingSystem</span>
            <span>{operatingSystem}</span>
          </li>
          <li>
            <span className="cart-add-details">memory</span>
            <span>{memory} GB</span>
          </li>
          <li>
            <span className="cart-add-details">guarantee</span>
            <span>{guarantee}</span>
          </li>
        </ul>
       
      </div>
      </Link>
    </Col>
  );
}
