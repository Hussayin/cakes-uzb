import React, { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const ProductModal = ({ product, closeModal }) => {
  // 🔒 ORQA FON SCROLLNI O‘CHIRISH
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="fixed inset-0 z-50 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* MODAL CONTENT */}
        <motion.div
          className="fixed top-0 right-0 w-full h-full bg-white overflow-y-auto"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          {/* HEADER */}
          <div className=" py-[12px] px-[13px] mb-[15px] border-b-2 border-[#9e7746] ">
            <button
              onClick={closeModal}
              className=" text-[23px] flex justify-center items-center text-[#9e7746] font-cormorant font-bold "
            >
              {" "}
              <IoIosArrowBack /> Назад
            </button>
          </div>

          {/* CONTENT */}
          <div>
            <div className=" w-[95%] m-auto ">
              <img src={product.image} alt={product.aboutProduct} />
            </div>

            <div className=" flex justify-center gap-2 items-center mt-[20px] ">
              <img
                src={product.countri}
                alt={product.aboutProduct}
                className=" h-[20px] "
              />
              <h2 className=" font-cormorant font-bold text-[25px] leading-5 text-[#9e7746] ">
                {product.aboutProduct}
              </h2>
            </div>
            <div className=" flex justify-center items-center text-[#9e7746] ">
              <p className=" font-mono font-bold text-[25px] ">
                Цена: {product.price.toLocaleString("de-DE")}$
                <span className=" font-mono font-bold text-[13px] line-through pl-[5px]  text-[#9e7746] ">
                  {product.demoPrice.toLocaleString("de-DE")}$
                </span>
              </p>
            </div>

            <div className=" text-[#9e7746] font-bold text-[23px] mt-[10px] w-[95%] m-auto ">
              <p className=" font-cormorant ">Зичлиги: {product.zichligi}</p>
              <p className=" font-cormorant ">Материал: {product.material}</p>
              <p className=" font-cormorant ">
                Ип баландлиги: {product.ipBalandligi}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductModal;
