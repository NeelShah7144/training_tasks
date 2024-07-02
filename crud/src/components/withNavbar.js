// components/withNavbar.js
import React from "react";
import Navbar from "./Navbar";

const withNavbar = (WrappedComponent) => {
  return (props) => (
    <>
      <Navbar />
      <WrappedComponent {...props} />
    </>
  );
};

export default withNavbar;
