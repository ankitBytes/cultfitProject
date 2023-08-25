import React from "react";
import Body from "./Body";
import Navbar from "../navbar/secondaryNavbar";
import PrimaryFooter from "../Footer/primaryFooter";
import SecondaryFooter from "../Footer/secondaryFooter";
const Fitness = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Body />
      <PrimaryFooter />
      <SecondaryFooter />
    </>
  );
};

export default Fitness;
