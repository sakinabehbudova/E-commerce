import React from "react";

export const Main = ({ children, main }) => {
  return <div className={main}>{children}</div>;
};
Main.defaultProps = {
  main: "defaultMain",
};
