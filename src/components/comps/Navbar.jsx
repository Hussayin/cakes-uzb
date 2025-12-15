import React from "react";

// icons
import { FaShoppingBasket } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";

const Navbar = () => {
  return (
    <div className=" bg-white flex justify-between px-[15px] items-center pb-[5px] border-b-2 rounded-b-[30px] border-[#9A7447] ">
      <div>
        {/* logo */}{" "}
        <img src="/image512.png" alt="logo" className=" h-[70px]" />{" "}
      </div>
      <div className=" flex justify-center items-center gap-[30px]">
        {/* basket */}
        <div>
          <FaShoppingBasket className=" text-[#9A7447] " size={25} />
        </div>
        {/* hamburger */}
        <div>
          <MdMenuOpen className=" text-[#9A7447] " size={30} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
