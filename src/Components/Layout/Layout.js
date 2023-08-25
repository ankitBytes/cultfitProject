import React from "react";
import Body from "./Body";
import Navbar from "../navbar/secondaryNavbar";
import PrimaryFooter from "../Footer/primaryFooter";
const Fitness = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Body />
      <PrimaryFooter />
    </>
  );
};

export default Fitness;
