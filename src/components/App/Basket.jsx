import React, { useContext } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import MenuAll from "./MenuAll";
import { BasketContext } from "../context/BasketContext";
import { motion } from "framer-motion";

const Basket = () => {
  const { cart, removeFromCart } = useContext(BasketContext);

  return (
    <div>
      {/* Back Button */}
      <div className="fixed w-[100%] top-0 z-[10000000] dark:bg-white dark:border-black bg-[#0f192b] border-[#cecccc85] border-solid border-b-[1px] p-[15px] px-[20px]">
        <Link to="/">
          <h1 className="flex items-center gap-[2px] font-bold font-nunito text-[17px]">
            <FaChevronLeft className="text-[25px]" /> назад
          </h1>
        </Link>
      </div>

      <div className="mb-[90px] px-[10px] mt-[70px] flex justify-center items-center flex-col gap-[10px]">
        {/* Mahsulotlar */}
        {cart.length === 0 ? (
          <h1 className="text-[25px] font-nunito absolute bottom-[50%] ">
            Корзина пуста
          </h1>
        ) : (
          cart.map((watch) => (
            <div
              key={watch.id}
              className="flex relative justify-start gap-[10px] border-[1px] w-[100%] border-solid rounded-xl dark:border-black border-white p-[7px] items-center"
            >
              <Link to={watch.link}>
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 1.5 }}
                  src={watch.mainImage}
                  alt={watch.allTitle}
                  className="h-[120px]"
                />
              </Link>
              <div className="flex justify-between gap-[10px]  items-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 1.5 }}
                  className="flex flex-col"
                >
                  <h1 className="text-[15px] w-[200px] font-nunito">
                    {watch.allTitle}
                  </h1>
                  <h1 className="text-[20px]">{watch.price}$</h1>
                </motion.div>
                <button
                  className="bg-red-500 text-white p-2 rounded absolute right-[15px] "
                  onClick={() => removeFromCart(watch.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <MenuAll />
    </div>
  );
};

export default Basket;
