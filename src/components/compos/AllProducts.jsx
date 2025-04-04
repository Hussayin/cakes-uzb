import React, { useState, useContext } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { MdPriceChange } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ProductContext } from "../context/ProductContext";
import { TelegramContext } from "../context/TelegramContext";

const categories = [
  "All",
  "Tissot",
  "Longines",
  "Frederique",
  "Rolex",
  "Louis-erard",
  "Orient",
  "Casio",
  "Seiko",
  "Maurice-lacroix",
  "Edox",
  "Tag-heuer",
];

const AllProducts = () => {
  const navigate = useNavigate(); // useNavigate qo'llash

  const { sendToTelegram } = useContext(TelegramContext);
  const { products, loading } = useContext(ProductContext);

  const [activeCategory, setActiveCategory] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [openFilter, setOpenFilter] = useState(false);

  if (loading) return <div>Ma'lumotlar yuklanmoqda...</div>;
  if (!products?.Tissot || products.Tissot.length === 0)
    return <div>Tissot mahsulotlari topilmadi.</div>;

  const filteredProducts = products?.Tissot?.filter((watch) => {
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
    navigate(product.link, { replace: true });
  };

  return (
    <div className=" hidden">
      <div className=" flex gap-[13px] overflow-x-scroll border-t-[2px] border-white dark:bg-white bg-[#0f192b] p-[10px] hide-scrollbar ">
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

      <div className="mt-[10px] mb-[20px] grid md:grid-cols-2 lg:grid-cols-3 grid-cols-2 gap-[8px] w-[97%] m-auto">
        {filteredProducts.map((watch) => (
          <div onClick={() => handleProductClick(watch)} key={watch.id}>
            <Link to={`/tissot/${watch.id}`}>
              <motion.div className="flex justify-between py-[10px] items-center flex-col border-[#25365a] dark:bg-white bg-[#0e1629] overflow-hidden relative rounded-[20px] border-[2px] border-solid">
                <div className=" text-center flex justify-center items-center flex-col gap-[7px] ">
                  <motion.div>
                    <img
                      src={watch.mainImage}
                      alt="image-product-watch"
                      className="h-[170px]"
                    />
                  </motion.div>
                  <motion.div>
                    <h1 className="text-[15px] leading-6 uppercase font-bold font-nunito">
                      {watch.brend}
                    </h1>
                    <h1 className="text-[12px]">{watch.rafcode}</h1>
                  </motion.div>
                  <motion.div>
                    <h1 className="font-kanit text-[23px] leading-5 ">
                      {watch.price}$
                    </h1>
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
