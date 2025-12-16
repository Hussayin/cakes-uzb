import React, { useEffect } from "react";
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
          <div>
            <button onClick={closeModal}>← Назад</button>
          </div>

          {/* CONTENT */}
          <div>
            <img src={product.image} alt={product.aboutProduct} />

            <h2>{product.aboutProduct}</h2>
            <p>
              Цена: {product.price.toLocaleString("de-DE")}{" "}
              {product.typeProduct}
            </p>
            <p>Старая цена: {product.demoPrice.toLocaleString("de-DE")}</p>

            <p>Зичлиги: {product.zichligi}</p>
            <p>Материал: {product.material}</p>
            <p>Ип баландлиги: {product.ipBalandligi}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductModal;
