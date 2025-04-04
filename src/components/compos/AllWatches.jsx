import React from "react";
import MenuAll from "../App/MenuAll";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import AllProducts from "./AllProducts";
import ImageGallery from "./ImageBar";

const AllWatches = () => {
  return (
    <div>
      {/* Exit */}
      <div className="sticky top-0 z-[10000000] flex flex-col gap-[10px] dark:bg-white bg-[#0f192b] p-[13px] px-[15px] ">
        <Link to="/" className="">
          <h1 className="flex items-center gap-[2px] font-bold font-nunito text-[17px]">
            <FaChevronLeft className="text-[27px]" /> назад
          </h1>
        </Link>
      </div>
      <ImageGallery />

      {/* <AllProducts /> */}
      <MenuAll />
    </div>
  );
};

export default AllWatches;
