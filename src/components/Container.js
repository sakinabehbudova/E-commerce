import React from "react";
import { Consumer, PhoneConsumer } from "../Context";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";
import Loading from "./Loading";

function Container({ context }) {
  const { loading, phones, sortedPhones } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <ProductFilter phones={phones}></ProductFilter>
      <ProductList phones={sortedPhones}></ProductList>
    </>
  );
}

export default PhoneConsumer(Container);
