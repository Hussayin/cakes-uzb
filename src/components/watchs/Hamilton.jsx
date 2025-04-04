import React, { useState, useContext } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { MdPriceChange } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ProductContext } from "../context/ProductContext";
import { TelegramContext } from "../context/TelegramContext";
import MenuAll from "../App/MenuAll";

const categories = ["All", "Jazzmaster", "Railroad", "Broadway"];

const Hamilton = () => {
  const { sendToTelegram } = useContext(TelegramContext);
  const { products, loading } = useContext(ProductContext);

  const [activeCategory, setActiveCategory] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [openFilter, setOpenFilter] = useState(false);

  if (loading) return <div>Ma'lumotlar yuklanmoqda...</div>;
  if (!products?.Hamilton || products.Hamilton.length === 0)
    return <div>Maurice mahsulotlari topilmadi.</div>;

  const filteredProducts = products?.Hamilton?.filter((watch) => {
    const productPrice = Number(watch.price) || 0;
    return (
      (activeCategory === "All" ||
        watch.categori?.toLowerCase() === activeCategory.toLowerCase()) &&
      productPrice >= minPrice &&
      productPrice <= maxPrice
    );
  });

  const handleProductClick = (product) => {
    sendToTelegram(product);
    setOpenFilter(false);
  };

  return (
    <div>
      <div className="sticky top-0 z-[10000000] flex flex-col gap-[10px] dark:bg-white bg-[#0f192b] p-[13px] px-[15px] ">
        <Link to="/" className="">
          <h1 className="flex items-center gap-[2px] font-bold font-nunito text-[17px]">
            <FaChevronLeft className="text-[27px]" /> назад
          </h1>
        </Link>
      </div>

      <div className="flex gap-[13px] overflow-x-scroll border-t-[2px] border-white dark:bg-white bg-[#0f192b] p-[10px] hide-scrollbar ">
        <button
          onClick={() => setOpenFilter(true)}
          className="px-[15px] py-[5px] rounded-full text-sm font-semibold whitespace-nowrap transition-all bg-blue-500"
        >
          <MdPriceChange className="text-[25px]" />
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-[5px] rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
              activeCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {openFilter && (
        <div className="flex items-center gap-4 mt-[10px] w-[95%] m-auto">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice === 0 ? "" : minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value) || 0)}
            className="w-full rounded-[10px] border-[#25365c] border-[2px] px-[5px] py-[7px] text-black"
          />
          <h1>до</h1>
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice === Infinity ? "" : maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value) || Infinity)}
            className="w-full text-black px-[5px] py-[7px] rounded-[10px] border-[#25365c] border-[2px]"
          />
        </div>
      )}

      <div className="mt-[10px] mb-[85px] grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-[8px] w-[97%] m-auto">
        {filteredProducts.map((watch) => (
          <div onClick={() => handleProductClick(watch)} key={watch.id}>
            <Link to={`/hamilton/${watch.id}`}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1.5 }}
                className="flex justify-between items-center border-[#25365a] dark:bg-white bg-[#0e1629] overflow-hidden relative rounded-[20px] border-[2px] border-solid p-[10px]"
              >
                <div className="flex flex-col justify-between gap-[23px]">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ease: "easeOut",
                      duration: 1,
                      delay: 0.1,
                    }}
                    className="flex gap-[10px] items-center"
                  >
                    <img
                      src={watch.logo}
                      alt="logo-brend"
                      className={`${watch.logoWidth} ${watch.logoColor} ${watch.logoPa} rounded-lg object-cover`}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ease: "easeOut",
                      duration: 1,
                      delay: 0.2,
                    }}
                  >
                    <h1 className="text-[19px] leading-6 uppercase font-bold font-nunito">
                      {watch.title}
                    </h1>
                    <h1 className="text-[10px]">{watch.allTitle}</h1>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ease: "easeOut",
                      duration: 1,
                      delay: 0.3,
                    }}
                  >
                    {/* <h1 className="line-through leading-3 opacity-80">
                      {watch.demoPrice}$
                    </h1> */}
                    <h1 className="font-kanit text-[27px] uppercase ">
                      {watch.price}$
                    </h1>
                    <h1 className="font-kanit text-[12px] uppercase">
                      по курсу цб
                    </h1>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 1,
                    delay: 0.2,
                  }}
                >
                  <img
                    src={watch.mainImage}
                    alt="image-product-watch"
                    className="h-[200px]"
                  />
                </motion.div>
              </motion.div>
            </Link>
          </div>
        ))}
      </div>
      <MenuAll />
    </div>
  );
};

export default Hamilton;
