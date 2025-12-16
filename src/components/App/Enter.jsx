import React from "react";
import Navbar from "../comps/Navbar";
import Slider from "../comps/Slider";
import Countries from "../comps/Countries";
import NewCarpets from "../comps/NewCarpets";
import Controller from "../comps/Controller";

const Enter = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Countries />
      <NewCarpets />
      <Controller />
    </div>
  );
};

export default Enter;
