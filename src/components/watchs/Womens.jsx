import React, { useState, useContext, useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { MdPriceChange } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ProductContext } from "../context/ProductContext";
import { TelegramContext } from "../context/TelegramContext";
import { IoMdArrowRoundBack } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { FaInstagram, FaStarAndCrescent, FaTelegram } from "react-icons/fa";
import { HiOutlineCake } from "react-icons/hi";

const categories = ["All", "HYBRID", "ELECTRO"];

const TortProducts = () => {
  const { sendToTelegram } = useContext(TelegramContext);
  const { products, loading } = useContext(ProductContext);

  //* populor
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  // Active image state
  const [activeImage, setActiveImage] = useState("");

  const [activeCategory, setActiveCategory] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [openFilter, setOpenFilter] = useState(false);

  if (loading) return <div>Ma'lumotlar yuklanmoqda...</div>;
  if (!products || products.length === 0)
    return <div>BYD mashinalari topilmadi.</div>;

  const filteredProducts = products.filter((car) => {
    const productPrice = Number(car.price) || 0;
    return (
      car.brend === "tort" &&
      (activeCategory === "All" ||
        car.categori?.toLowerCase() === activeCategory.toLowerCase())
      //   &&
      // productPrice >= minPrice &&
      // productPrice <= maxPrice
    );
  });

  //* populor
  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  // On component load, set initial active image
  useEffect(() => {
    if (selectedImage) {
      setActiveImage(selectedImage.img); // Default to the first image
    }
  }, [selectedImage]);

  const handleProductClick = (product) => {
    sendToTelegram(product);
    setOpenFilter(false);
  };

  return (
    <div>
      <div className="sticky top-0 z-[10000000] flex flex-col gap-[10px] dark:bg-[#f9aec0] bg-[#2e1563] p-[15px] px-[13px] border-[#ffffff] border-b-[2px]">
        <Link to="/" className="">
          <h1 className="flex items-center gap-[2px] font-bold font-nunito text-[17px]">
            <FaChevronLeft className="text-[28px]" /> назад
          </h1>
        </Link>
      </div>
      {/* 
      <div className="flex gap-[13px] overflow-x-scroll dark:bg-white bg-[#232323] p-[10px] hide-scrollbar border-b-2 border-[#444343]">
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
      </div> */}

      {/* {openFilter && (
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
      )} */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[9px] mt-[10px] px-[2px] ">
        {filteredProducts.map((img, index) => (
          <motion.div
            key={img.id}
            // initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Juft index chapdan, toq index o‘ngdan
            // whileInView={{ opacity: 1, x: 0 }}
            // transition={{
            //   ease: "easeOut",
            //   duration: 0.7,
            //   delay: 0.2, // Har biri 0.2s farq bilan chiqadi
            // }}
            // viewport={{ once: true }}
            className={` p-[3px] flex flex-col mb-[7px] dark:bg-[#f9aec0] rounded-lg transition-all duration-500 ${
              isLoaded ? "blur-0 bg-[#2e1563]" : "blur-md bg-[#2e1563] "
            } `}
          >
            <motion.img
              src={img.img}
              alt={`Image ${index}`}
              className={`cursor-pointer rounded-lg shadow-md w-[100%] object-cover h-[180px] transition-all duration-500 ${
                isLoaded ? "blur-0" : "blur-md"
              }`}
              onLoad={() => setIsLoaded(true)} // Rasm yuklanganda blur yo'qoladi
              onClick={() => setSelectedImage(img)}
            />
            <div className=" p-[6px] font-bold ">
              <h1 className=" text-[18px] font-nunito">Big Cake</h1>
              {/* price */}
              <h1 className=" leading-4 text-[17px] font-nunito dark:text-black text-white">
                250 000 cym
              </h1>
            </div>
          </motion.div>
        ))}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 dark:bg-[#facbd6] bg-[#492791] w-[100vw] overflow-x-auto h-[100vh] z-[111111111111] flex items-start justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative mb-[75px] w-[100%] pt-[65px] justify-center py-[18px]"
                onClick={(e) => e.stopPropagation()}
              >
                {/*//! Back button */}
                <button
                  className=" fixed w-[100%] flex at top-[0] border-b-2 dark:bg-[#f9aec0] bg-[#2e1563] text-white py-[9px] px-[13px] "
                  onClick={() => setSelectedImage(null)}
                >
                  <IoMdArrowRoundBack
                    className=" bg-white w-[60px] text-black rounded-xl p-[7px] "
                    size={40}
                  />
                </button>
                {/*  */}
                {/*//! mein image and typs */}
                <div className="flex dark:bg-[#f9aec0] bg-[#2e1563] pb-[15px] rounded-[30px] flex-col gap-[13px] justify-center items-center w-[100%]">
                  {/* Main image */}
                  <motion.div>
                    <motion.img
                      src={activeImage}
                      alt="Active watch"
                      className="w-[100%] object-cover m-auto rounded-[30px] h-[350px]"
                    />
                  </motion.div>
                  <motion.div
                    className={`  ${
                      selectedImage.col2 ? "grid-cols-2" : "grid-cols-5"
                    } flex gap-[10px] flex-wrap justify-center `}
                  >
                    {[
                      selectedImage.img,
                      selectedImage.img2,
                      selectedImage.img3,
                      selectedImage.img4,
                      selectedImage.img5,
                      selectedImage.img6,
                      selectedImage.img7,
                      selectedImage.img8,
                      selectedImage.img9,
                      selectedImage.img10,
                    ].map(
                      (img, index) =>
                        img && (
                          <img
                            key={index}
                            src={img}
                            alt={`Watch ${index + 1}`}
                            className={`md:h-[100px] md:w-auto h-[60px] w-[60px] rounded-2xl object-cover border-2 ${
                              activeImage === img
                                ? "border-gray-500 border-[3px] p-[1px]  rounded-2xl "
                                : "border-transparent"
                            }`}
                            onClick={() => setActiveImage(img)}
                          />
                        )
                    )}
                  </motion.div>
                </div>
                {/*//! Price */}
                <div className="mt-[30px] dark:bg-[#f9aec0] bg-[#2e1563] rounded-[30px] pb-[25px] ">
                  <h1 className=" text-center font-bold font-nunito text-[24px] pb-[3px] pt-[10px] ">
                    Cake Type
                  </h1>
                  <div className=" font-nunito px-[15px] flex flex-col gap-[7px] ">
                    {/*  */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut", // Easing funksiyasi
                        duration: 0.6, // Animatsiya davomiyligi
                        delay: 0.1,
                      }}
                      className=" text-[20px] flex gap-[13px] items-center "
                    >
                      <h1>- Цена (x1):</h1>
                      <h1>{selectedImage.price} cym</h1>
                    </motion.div>
                    {/*  */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut", // Easing funksiyasi
                        duration: 0.6, // Animatsiya davomiyligi
                        delay: 0.2,
                      }}
                      className=" text-[20px] flex gap-[13px] items-center "
                    >
                      <h1>- Цена (x2):</h1>
                      <h1>{selectedImage.price2} cym</h1>
                    </motion.div>
                    {/*  */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut", // Easing funksiyasi
                        duration: 0.6, // Animatsiya davomiyligi
                        delay: 0.3,
                      }}
                      className=" text-[20px] flex gap-[13px] items-center "
                    >
                      <h1>- Цена (x3):</h1>
                      <h1>{selectedImage.price3} cym</h1>
                    </motion.div>
                  </div>
                </div>
                {/*//! infos */}
                <div className="mt-[30px] dark:bg-[#f9aec0] bg-[#2e1563] rounded-[30px] pb-[25px] ">
                  <h1 className=" font-bold text-center font-nunito text-[24px] pb-[3px] pt-[10px] ">
                    Cake Infos
                  </h1>
                  <div className=" font-nunito px-[15px] flex flex-col gap-[7px] ">
                    {/*  */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut", // Easing funksiyasi
                        duration: 0.6, // Animatsiya davomiyligi
                        delay: 0.1,
                      }}
                      className=" text-[20px] flex gap-[13px] items-center "
                    >
                      <h1>- Hазвание:</h1>
                      <h1>{selectedImage.title}</h1>
                    </motion.div>
                    {/*  */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut", // Easing funksiyasi
                        duration: 0.6, // Animatsiya davomiyligi
                        delay: 0.2,
                      }}
                      className=" text-[20px] flex gap-[13px] items-center "
                    >
                      <h1>- Диаметр (x1):</h1>
                      <h1>{selectedImage.diameter}</h1>
                    </motion.div>
                    {/*  */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut", // Easing funksiyasi
                        duration: 0.6, // Animatsiya davomiyligi
                        delay: 0.3,
                      }}
                      className=" text-[20px] flex gap-[13px] items-center "
                    >
                      <h1>- Диаметр (x2):</h1>
                      <h1>{selectedImage.diameter2}</h1>
                    </motion.div>
                    {/*  */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut", // Easing funksiyasi
                        duration: 0.6, // Animatsiya davomiyligi
                        delay: 0.4,
                      }}
                      className=" text-[20px] flex gap-[13px] items-center "
                    >
                      <h1>- Диаметр (x3):</h1>
                      <h1>{selectedImage.diameter3}</h1>
                    </motion.div>
                    {/*  */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut", // Easing funksiyasi
                        duration: 0.6, // Animatsiya davomiyligi
                        delay: 0.5,
                      }}
                      className=" text-[20px] flex gap-[13px] items-center "
                    >
                      <h1>- Mасса (X1):</h1>
                      <h1>{selectedImage.weight}</h1>
                    </motion.div>
                    {/*  */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut", // Easing funksiyasi
                        duration: 0.6, // Animatsiya davomiyligi
                        delay: 0.6,
                      }}
                      className=" text-[20px] flex gap-[13px] items-center "
                    >
                      <h1>- Mасса (X2):</h1>
                      <h1>{selectedImage.weight2}</h1>
                    </motion.div>
                    {/*  */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut", // Easing funksiyasi
                        duration: 0.6, // Animatsiya davomiyligi
                        delay: 0.6,
                      }}
                      className=" text-[20px] flex gap-[13px] items-center "
                    >
                      <h1>- Mасса (X3):</h1>
                      <h1>{selectedImage.weight3}</h1>
                    </motion.div>
                  </div>
                </div>
                {/*//! Our servises */}
                <div className="mt-[30px] dark:bg-[#f9aec0] bg-[#2e1563] rounded-[30px] pb-[25px] ">
                  <h1 className=" text-center font-bold font-nunito text-[24px] pb-[3px] pt-[10px] ">
                    Наши услуги
                  </h1>
                  <div className=" mt-[15px] font-nunito px-[15px] flex justify-center leading-5 items-center gap-[40px] ">
                    {/*  */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut", // Easing funksiyasi
                        duration: 0.6, // Animatsiya davomiyligi
                        delay: 0.1,
                      }}
                      className=" text-[20px] flex-col flex items-center "
                    >
                      <div>
                        <TbTruckDelivery className=" text-[100px] " />
                      </div>
                      <h1 className=" font-nunito font-bold ">Доставка</h1>
                    </motion.div>
                    {/*  */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut", // Easing funksiyasi
                        duration: 0.6, // Animatsiya davomiyligi
                        delay: 0.1,
                      }}
                      className=" text-[20px] flex-col flex items-center "
                    >
                      <div>
                        <HiOutlineCake className=" text-[100px] " />
                      </div>
                      <h1 className=" font-nunito font-bold ">
                        10% sale Birth days
                      </h1>
                    </motion.div>
                  </div>
                </div>
                {/*//! button buy */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    ease: "easeOut", // Easing funksiyasi
                    duration: 0.5, // Animatsiya davomiyligi
                    delay: 0.1,
                  }}
                  className=" fixed gap-[10px] px-[20px] py-[10px] dark:bg-[#f9aec0] bg-[#2e1563]  z-[10000000000] bottom-0 w-[100%] flex justify-between items-center border-t-[2px] rounded-t-[20px] border-t-white p-[5px] "
                >
                  {/* buttons */}
                  <a
                    href="https://t.me/khusko077"
                    target="_blank"
                    className=" text-[21px] p-[5px] border-[2px] bg-green-600 rounded-[10px] border-black w-[100%] text-center "
                  >
                    Buy
                  </a>
                  {/* buttons */}
                  <a
                    href="https://t.me/khusko077"
                    target="_blank"
                    className=" text-[21px] p-[5px] border-[2px] bg-green-600 rounded-[10px] border-black w-[100%] text-center "
                  >
                    Order
                  </a>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/khusko1"
                      className=" text-[30px]  "
                    >
                      <FaInstagram />
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://t.me/khusko077"
                      className=" text-[30px]"
                    >
                      <FaTelegram />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TortProducts;
