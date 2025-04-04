import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import { motion } from "framer-motion";

const MenuAll = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeOut", // Easing funksiyasi
        duration: 0.4, // Animatsiya davomiyligi
        delay: 0.1,
      }}
      className=" font-bold bg-[#0e1629] border-[white] border-t-[3px] rounded-t-[17px] p-[13px] pb-[20px] fixed bottom-0 w-[100%] dark:text-white gap-[20px] z-[10000000000] flex items-center text-center"
    >
      {/* top watchs */}
      <NavLink
        className="w-[100%] border-[1px] border-white rounded-[7px] py-[7px] "
        to="/"
      >
        <h1>Топовые часы</h1>
      </NavLink>
      {/* All watches */}
      <NavLink
        to="/AllWatches"
        className="w-[100%] border-[1px] border-white rounded-[7px] py-[7px]"
      >
        <h1>Б/y</h1>
      </NavLink>
      {/* basket */}
      <NavLink
        to="/basket"
        className="border-[1px] border-white text-[23px] rounded-[7px] px-[15px] py-[7px]"
      >
        <h1>
          <FaShoppingBasket />
        </h1>
      </NavLink>
    </motion.div>
  );
};

export default MenuAll;
