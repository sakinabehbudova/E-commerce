import React from "react";
import { Link } from "react-router-dom";

export default function Phone({ phone }) {
  console.log("phone", phone);
  const { name, slug, price, images } = phone;
  return (
    <>
      <div className="phone">
        <div className="container">
          <img src={images[0]} />
          <div className="price">Price-{price}</div>
          <Link to={`/phones/${slug}`} className="btn">
            Details
          </Link>
        </div>
      </div>
    </>
  );
}
