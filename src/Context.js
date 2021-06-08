import React, { createContext, useState, useEffect } from "react";
import items from "./data";
const Context = React.createContext();

const PhoneProvider = ({ children }) => {
  const [phones, setPhones] = useState([]);
  const [sortedPhones, setSortedPhones] = useState([]);
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState([]);
  const [price, setPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    let phones = formatData(items);
    let featuredPhones = phones.filter((item) => item.featured === true);
    let maxPrice = Math.max(...phones.map((item) => item.price));
    let minPrice = Math.min(...phones.map((item) => item.price));
    setSortedPhones(featuredPhones);
    setLoading(false);
    //    console.log("maxPrice",maxPrice);
    //   console.log("minPrice",minPrice);
    setPhones(phones);
    getPhone();
    setMaxPrice(maxPrice);
    setMinPrice(minPrice);
  }, []);

  const formatData = (items) => {
    let _items = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let phone = { ...item.fields, id, images };
      return phone;
    });
    return _items;
  };
  const getPhone = (slug) => {
    let items = phones;
    console.log("_items", phones);
    const item = items.find((item) => item.slug === slug);
    return item;
  };
  return (
    <Context.Provider value={{ phones, sortedPhones, getPhone }}>
      {children}
    </Context.Provider>
  );
};
const Consumer = Context.Consumer;

export function PhoneConsumer(Component) {
  return function Consumer(props) {
    return (
      <Consumer>
        {(value) => <Component {...props} context={value}></Component>}
      </Consumer>
    );
  };
}

export { Context, PhoneProvider, Consumer };
