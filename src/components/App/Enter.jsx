import React from "react";
import Navbar from "../comps/Navbar";
import Slider from "../comps/Slider";
import Countries from "../comps/Countries";
import NewCarpets from "../comps/NewCarpets";
import Controller from "../comps/Controller";
import Footer from "../comps/Footer";

const Enter = () => {
  return (
    <div className="mb-[100px]">
      <Navbar />
      <Slider />
      <Countries />
      <NewCarpets />
      <Controller />
      {/* <Footer /> */}
    </div>
  );
};

export default Enter;
