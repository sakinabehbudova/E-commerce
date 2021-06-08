import React from "react";
import Phone from "./Phone";

export default function ProductList({ phones }) {
  if (phones.length === 0) {
    return  <div>No products matched your search parameters</div>;
  }
  return (
    <div className="product-list">
      {phones.map((phone) => {
        return <Phone key={phone.id} phone={phone}></Phone>;
      })}
    </div>
  );
}
