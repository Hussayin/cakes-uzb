import React from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { DetailContext } from "../context/DetailContext";
import { FaChevronLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { TelegramContext } from "../context/TelegramContext";
import { useNavigate } from "react-router-dom";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Stilni import qilish
import { BasketContext } from "../context/BasketContext";

const RolexDetails = () => {
  // basket
  const { products } = useContext(DetailContext);
  const { id } = useParams();
  const { sendToTelegram } = useContext(TelegramContext);
  const navigate = useNavigate();

  const { addToCart } = useContext(BasketContext);
  // basket
  const handleAdd = () => {
    addToCart(product, product.id);
    toast.success("✅ Savatga joylandi!", {
      position: "top-center",
      autoClose: 2000, // 2 soniyada o'chadi
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "dark",
    });
  };

  //! telegram send
  const handleProductClick = (product) => {
    sendToTelegram(product); // Telegramga yuborish
    navigate(product.link); // Sahifani yangilamasdan navigatsiya
  };

  // Ehtiyot chorasi: `products` va `Tissot` mavjudligini tekshirish
  const product = products?.Rolex?.find(
    (watch) => String(watch.id) === String(id)
  );

  if (!product) {
    return (
      <div className=" flex justify-center items-center text-center h-[100%] w-[100%] ">
        Mahsulot topilmadi!
      </div>
    );
  }

  return (
    <div>
      <div className="fixed w-[100%] top-0 z-[10000000] dark:bg-white dark:border-black bg-[#0f192b] border-[#cecccc85] border-solid border-b-[1px] p-[15px] px-[20px]">
        <Link to="/rolex">
          <h1 className="flex items-center gap-[2px] font-bold font-nunito text-[17px]">
            <FaChevronLeft className="text-[25px]  " /> назад
          </h1>
        </Link>
      </div>
      {/*//* button buy */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeOut", // Easing funksiyasi
          duration: 0.5, // Animatsiya davomiyligi
          delay: 0.1,
        }}
        className=" fixed gap-[20px] px-[20px] py-[10px] dark:bg-white bg-[#0f192b]  z-[10000000000] bottom-0 w-[100%] flex justify-between items-center border-[2px] rounded-t-[20px] border-black p-[5px] "
      >
        {/* buttons */}
        <a
          href="https://t.me/Bekhruz777"
          target="_blank"
          className=" text-[23px] p-[5px] border-[2px] bg-green-600 rounded-[10px] border-black w-[100%] text-center "
        >
          Kупить
        </a>
        <div>
          <a
            target="_blank"
            href="https://www.instagram.com/the_watch_outlet_uz"
            className=" text-[30px]  "
          >
            <FaInstagram />
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://t.me/TheWatchOutlet"
            className=" text-[30px]"
          >
            <FaTelegram />
          </a>
        </div>
      </motion.div>

      {/* Product details */}
      <div className="mt-[40px] dark:bg-white bg-[#0f192b] py-[30px] gap-[17px] h-auto justify-center border-gray-950 border-b-[3px] overflow-hidden relative rounded-b-[50px] border-solid md:p-[50px] p-[15px] flex flex-col">
        {/* Logo */}
        <div className="flex gap-[5px] justify-between items-center">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            src={product.logo}
            alt="logo-brend"
            className="rounded-lg w-[90px] text-center object-cover"
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: "easeOut", // Easing funksiyasi
              duration: 1, // Animatsiya davomiyligi
              delay: 0.2,
            }}
            className=" flex flex-col gap-[10px] "
          >
            <button onClick={handleAdd} className="text-[33px] pr-[10px] ">
              <MdAddShoppingCart />
            </button>
          </motion.div>
        </div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: "easeOut", // Easing funksiyasi
            duration: 1, // Animatsiya davomiyligi
            delay: 0.2,
          }}
          className=" flex justify-center items-start gap-[10px] flex-col "
        >
          <h1 className="text-[22px] uppercase font-bold font-nunito leading-8">
            {product.allTitle}
          </h1>
          <h1 className="text-[15px] uppercase opacity-75 ">
            {product.production}
          </h1>
        </motion.div>

        {/* Images */}
        <div className="flex my-[20px] flex-col gap-[30px] justify-center items-center w-[100%]">
          {/* Main image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: "easeOut", // Easing funksiyasi
              duration: 1, // Animatsiya davomiyligi
              delay: 0.2,
            }}
          >
            <img
              src={product.mainImage}
              alt=""
              className="md:h-[300px] h-[340px]"
            />
          </motion.div>
        </div>

        {/* Price */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5, delay: 0.2 }}
          className="flex justify-between items-center"
        >
          <div>
            {/* <h1 className="line-through opacity-55 leading-5 text-[20px]">
              {product.demoPrice}$
            </h1> */}
            <h1 className="font-nunito text-[35px] uppercase ">
              {product.price}$
            </h1>
            <h1 className="font-kanit text-[12px] uppercase">по курсу цб</h1>
          </div>
          <h1 className="text-[15px]">Ref: {product.rafcode}</h1>
        </motion.div>
      </div>

      {/* Product infos */}
      <div className="mt-[50px] pb-[40px] py-[25px] dark:bg-white bg-[#0f192b] rounded-[50px] border-[2px]  border-gray-950  ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          className="flex justify-center items-center pb-[10px] "
        >
          <img src={product.mainImage} alt="" className="h-[90px]" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          className="text-center font-nunito text-[25px]"
        >
          Больше информации
        </motion.h1>
        {/* infos */}
        <div className=" flex justify-center items-start gap-[10px] flex-col p-[10px] pt-[20px] ">
          {/*  */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: "easeOut", // Easing funksiyasi
              duration: 0.6, // Animatsiya davomiyligi
              delay: 0.05,
            }}
            className=" text-[20px] flex gap-[13px] items-center "
          >
            <h1>- Марка:</h1>
            <h1>{product.brend}</h1>
          </motion.div>
          {/*  */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: "easeOut", // Easing funksiyasi
              duration: 0.6, // Animatsiya davomiyligi
              delay: 0.06,
            }}
            className=" text-[20px] flex gap-[13px] items-center "
          >
            <h1>- Модель:</h1>
            <h1>{product.allTitle}</h1>
          </motion.div>
          {/*  */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: "easeOut", // Easing funksiyasi
              duration: 0.6, // Animatsiya davomiyligi
              delay: 0.07,
            }}
            className=" text-[20px] flex gap-[13px] items-center "
          >
            <h1>- Hомер:</h1>
            <h1>{product.rafcode}</h1>
          </motion.div>
          {/*  */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: "easeOut", // Easing funksiyasi
              duration: 0.6, // Animatsiya davomiyligi
              delay: 0.08,
            }}
            className=" text-[20px] flex gap-[13px] items-center "
          >
            <h1>- Механизм:</h1>
            <h1>{product.mechanism}</h1>
          </motion.div>
          {/*  */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: "easeOut", // Easing funksiyasi
              duration: 0.6, // Animatsiya davomiyligi
              delay: 0.09,
            }}
            className=" text-[20px] flex gap-[13px] items-center "
          >
            <h1>- Материал:</h1>
            <h1>{product.caseMaterial}</h1>
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
            className=" text-[20px] flex gap-[13px] items-center "
          >
            <h1>- Ремешок:</h1>
            <h1>{product.bracelet}</h1>
          </motion.div>
          {/*  */}
          {/* <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: "easeOut", // Easing funksiyasi
              duration: 0.6, // Animatsiya davomiyligi
              delay: 0.1,
            }}
            className=" text-[20px] flex gap-[13px] items-center "
          >
            <h1>- Год выпуска:</h1>
            <h1>{product.year}</h1>
          </motion.div> */}
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
            <h1>- Состояние:</h1>
            <h1>{product.status}</h1>
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
            className=" text-[20px] flex gap-[13px] items-center "
          >
            <h1>- Гарантия:</h1>
            <h1>{product.guarantee}</h1>
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
            className=" text-[20px] flex gap-[13px] items-center "
          >
            <h1>- Водозащита:</h1>
            <h1>{product.toWater}</h1>
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
            className=" text-[20px] flex gap-[13px] items-center "
          >
            <h1>- Стекло:</h1>
            <h1>{product.glass}</h1>
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
            className=" text-[20px] flex gap-[13px] items-center "
          >
            <h1>- Диаметр:</h1>
            <h1>{product.diameter}</h1>
          </motion.div>
        </div>
      </div>

      {/* similar */}
      <div className="mt-[25px] mb-[70px] ">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: "easeOut", // Easing funksiyasi
            duration: 1, // Animatsiya davomiyligi
            delay: 0.2,
          }}
          className=" text-[25px] font-nunito ml-[18px] "
        >
          Похожий часы
        </motion.h1>
        {/* similar products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]  p-[5px]">
          {products?.Rolex.filter(
            (item) =>
              item.categori === product.categori && item.id !== product.id
          ).map((watch) => (
            <Link
              onClick={(e) => {
                e.preventDefault(); // Sahifa refresh qilinishini to'xtatadi
                handleProductClick(watch); // Product-ning onClick hodisasi
              }}
              key={watch.id}
              to={watch.link}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1.5 }}
                className=" flex justify-between items-center border-[#25365a] dark:bg-white bg-[#0e1629] overflow-hidden relative rounded-[20px] border-[2px] border-solid  p-[10px]"
              >
                {/* text */}
                <div className=" flex flex-col justify-between gap-[23px] ">
                  {/* logo */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ease: "easeOut", // Easing funksiyasi
                      duration: 1, // Animatsiya davomiyligi
                      delay: 0.1,
                    }}
                    className=" flex gap-[10px] items-center "
                  >
                    <img
                      src={watch.logo}
                      alt="logo-brend"
                      className={` ${watch.logoWidth} ${watch.logoColor} ${watch.logoPa} rounded-lg object-cover`}
                    />
                  </motion.div>
                  {/* title */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ease: "easeOut", // Easing funksiyasi
                      duration: 1, // Animatsiya davomiyligi
                      delay: 0.2,
                    }}
                  >
                    <h1 className="text-[19px] leading-6 uppercase font-bold font-nunito ">
                      {watch.title}
                    </h1>
                    <h1 className=" text-[12px]">{watch.rafcode}</h1>
                  </motion.div>
                  {/* price */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ease: "easeOut", // Easing funksiyasi
                      duration: 1, // Animatsiya davomiyligi
                      delay: 0.3,
                    }}
                  >
                    {/* <h1 className="line-through leading-3 opacity-80 ">
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
                {/* img */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    ease: "easeOut", // Easing funksiyasi
                    duration: 1, // Animatsiya davomiyligi
                    delay: 0.2,
                  }}
                >
                  <img
                    src={watch.mainImage}
                    alt="image-product-watch"
                    className=" h-[200px] "
                  />
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RolexDetails;
