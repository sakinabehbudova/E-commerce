import React, { createContext, useState, useEffect } from "react";
import items from "./data";
const Context = React.createContext();

const PhoneProvider = ({ children }) => {
  const [phones, setPhones] = useState([]);
  const [sortedPhones, setSortedPhones] = useState([]);
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let phones = formatData(items);
    let featuredPhones = phones.filter((item) => item.featured === true);
    setSortedPhones(featuredPhones);
    setLoading(false);
    console.log(phones);
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
  return <Context.Provider value={{ phones, sortedPhones}}>{children}</Context.Provider>;
};
const Consumer = Context.Consumer;
export { Context, PhoneProvider, Consumer };
