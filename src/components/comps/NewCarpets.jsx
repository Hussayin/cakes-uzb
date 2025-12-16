import React, { useState } from "react";
import { Carpets } from "../DataBasee/AllProducts"; // yo‘lingni o‘zingga mosla
import ProductModal from "./ProductModal";
import { motion } from "framer-motion";

const NewCarpets = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // 🔹 Barcha davlatlardagi productlarni bitta arrayga yig‘amiz
  const allProducts = Object.values(Carpets).flat();

  return (
    <div className="mt-[20px] m-auto w-[95%] mb-[70px] ">
      {/* text */}
      <h3 className="font-cormorant font-bold text-[30px]">Hовые товары:</h3>

      {/* products */}
      <div className="flex mt-[10px] justify-between flex-wrap gap-y-[13px]">
        {allProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white flex flex-col border-2 border-[#9A7447] rounded-[10px] cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            {/* image */}
            <div className="w-[95%] m-auto mt-[7px]">
              <motion.img
                src={product.image}
                alt={product.aboutProduct}
                className="h-[260px]"
                initial={{ opacity: 0, filter: "blur(12px)", scale: 1.05 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>

            {/* price */}
            <div className="m-[7px] flex justify-between">
              <div className="leading-5">
                <h3 className="text-[17px] font-mono font-bold whitespace-nowrap">
                  {product.price.toLocaleString("de-DE")}$
                  <span className="text-[15px] font-mono pl-[5px]">
                    {product.typeProduct1}
                  </span>
                </h3>

                <h4 className="line-through text-[12px] font-mono font-bold whitespace-nowrap">
                  {product.demoPrice.toLocaleString("de-DE")}$
                </h4>
              </div>

              <img
                src={product.countri}
                alt="country"
                className="h-[25px] object-cover "
              />
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          closeModal={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default NewCarpets;
