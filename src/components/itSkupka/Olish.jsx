import React from "react";
import { PopulorWatch } from "../Data/WatchData";
import { motion } from "framer-motion";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { TbPhoneCall } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaMapLocationDot } from "react-icons/fa6";
import { Helmet } from "react-helmet";

const Skupka = () => {
  return (
    <div className="mb-[90px]">
      <Helmet>
        {/* Sahifa sarlavhasi */}
        <title>Скупка часов | Soat sotib olish xizmati</title>
        {/* Meta tavsif (Description) */}
        <meta
          name="description"
          content="Скупка часов в Ташкенте. Мы покупаем брендовые часы по выгодным ценам. Оценка и продажа часов в Узбекистане. Soat sotib olish xizmati - biz brend soatlarni yuqori narxda xarid qilamiz."
        />
        {/* Kalit so‘zlar (Keywords) */}
        <meta
          name="keywords"
          content="скупка часов, скупка часов Ташкент, продажа часов, купить часы, брендовые часы, soat sotib olish, soatlar, Toshkentda soat sotish"
        />
        {/* Open Graph (Facebook, Telegram, Instagram) */}
        <meta
          property="og:title"
          content="Скупка часов в Ташкенте | Soat sotib olish xizmati"
        />
        <meta
          property="og:description"
          content="Скупка брендовых часов по выгодным ценам в Ташкенте. Soat sotib olish xizmati O‘zbekistonda."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.thewatchoutlet.uz/skupka"
        />
        <meta
          property="og:image"
          content="https://www.thewatchoutlet.uz/logo-img-mainn.png"
        />
        {/* Twitter meta ma’lumotlari */}
        <meta
          name="twitter:title"
          content="Скупка часов в Ташкенте | Soat sotib olish xizmati"
        />
        <meta
          name="twitter:description"
          content="Мы покупаем брендовые часы в Ташкенте. Soat sotib olish xizmati O‘zbekistonda."
        />
        <meta
          name="twitter:image"
          content="https://www.thewatchoutlet.uz/logo-img-mainn.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Hreflang teglari (Google uchun tilda sahifalarni belgilash) */}
        <link
          rel="alternate"
          href="https://www.thewatchoutlet.uz/skupka"
          hreflang="ru"
        />
        <link
          rel="alternate"
          href="https://www.thewatchoutlet.uz/skupka"
          hreflang="uz"
        />
        <link
          rel="alternate"
          href="https://www.thewatchoutlet.uz/skupka"
          hreflang="x-default"
        />
        {/* Schema.org JSON-LD ma’lumotlar */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Скупка часов в Ташкенте",
            url: "https://www.thewatchoutlet.uz/skupka",
            description:
              "Мы покупаем брендовые часы по выгодным ценам. Оценка и продажа часов в Узбекистане.",
            image: "https://thewatchoutlet.uz/logo-img-mainn.png",
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Tashkent, Uzbekistan",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+998977122206",
              contactType: "customer service",
              availableLanguage: ["Russian", "Uzbek"],
            },
          })}
        </script>
      </Helmet>
      {/*//* button buy */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeOut", // Easing funksiyasi
          duration: 0.5, // Animatsiya davomiyligi
          delay: 0.1,
        }}
        className=" fixed gap-[20px] pb-[27px] px-[30px] py-[15px] dark:bg-white bg-[#0f192b]  z-[10000000000] bottom-[-13px] w-[100%] flex justify-between items-center border-t-[3px] rounded-t-[20px] border-[#9ca2ad] p-[5px] "
      >
        {/* buttons */}
        <a
          href="/send"
          className=" text-[23px] p-[5px] border-[2px] bg-green-600 rounded-[10px] border-black w-[100%] text-center "
        >
          Оставьте запрос
        </a>
      </motion.div>
      {/* Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeOut", // Easing funksiyasi
          duration: 0.5, // Animatsiya davomiyligi
          delay: 0.1,
        }}
        className=" p-[15px] text-center bg-[#0a1528] border-b-[2px] border-[#9ca2ad] rounded-b-[20px] "
      >
        <h1 className="text-[25px] font-nunito font-bold ">The Watch Outlet</h1>
      </motion.div>
      {/* logo */}
      <div className=" mt-[25px] clear-start flex justify-center items-center ">
        <img
          src="./logo-img-mainn.png"
          alt=""
          className=" h-[100px] rounded-[30px] "
        />
      </div>
      {/* main */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          ease: "easeOut", // Easing funksiyasi
          duration: 1, // Animatsiya davomiyligi
          delay: 0.3,
        }}
        className=" mt-[20px] px-[15px] "
      >
        <h1 className=" font-nunito leading-7 text-[23px] text-center ">
          Хотите продать свои часы? Мы предлагаем выгодные условия для скупки
          часов любых брендов. Оценим ваши часы честно и по справедливой цене.
          Свяжитесь с нами для подробностей !
        </h1>
      </motion.div>
      {/* buttons */}
      <div className=" mt-[50px] px-[45px] flex justify-center items-center flex-col gap-[15px] ">
        <motion.a
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: "easeOut", // Easing funksiyasi
            duration: 1, // Animatsiya davomiyligi
            delay: 0.2,
          }}
          href="https://www.instagram.com/bekhruz_watch"
          target="_blank"
          className=" flex justify-center bg-white text-black dark:text-black dark:border-black font-bold items-center relative border-2 p-[5px] rounded-[15px] text-center font-nunito text-[18px] border-white w-[100%] "
        >
          Instagram
          <BsInstagram className=" absolute left-[15px] text-[25px]  " />
        </motion.a>

        <motion.a
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: "easeOut", // Easing funksiyasi
            duration: 1, // Animatsiya davomiyligi
            delay: 0.3,
          }}
          href="https://t.me/Bekhruz777"
          target="_blank"
          className=" flex justify-center bg-white text-black dark:text-black dark:border-black font-bold items-center relative border-2 p-[5px] rounded-[15px] text-center font-nunito text-[18px] border-white w-[100%] "
        >
          Telegram (admin)
          <BsTelegram className=" absolute left-[15px] text-[25px]  " />
        </motion.a>

        <motion.a
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: "easeOut", // Easing funksiyasi
            duration: 1, // Animatsiya davomiyligi
            delay: 0.4,
          }}
          href="tel:+998977122206"
          target="_blank"
          className=" flex justify-center bg-white text-black dark:text-black dark:border-black font-bold items-center relative border-2 p-[5px] rounded-[15px] text-center font-nunito text-[18px] border-white w-[100%] "
        >
          +998 97 712 22 06
          <TbPhoneCall className=" absolute left-[15px] text-[25px]  " />
        </motion.a>

        <motion.a
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: "easeOut", // Easing funksiyasi
            duration: 1, // Animatsiya davomiyligi
            delay: 0.6,
          }}
          href="https://maps.app.goo.gl/fqPkLFAJHpWpFBi59"
          target="_blank"
          className=" flex justify-center bg-white text-black dark:text-black dark:border-black font-bold items-center relative border-2 p-[5px] rounded-[15px] text-center font-nunito text-[18px] border-white w-[100%] "
        >
          Location
          <FaMapLocationDot className=" absolute left-[15px] text-[25px]  " />
        </motion.a>

        <motion.a
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: "easeOut", // Easing funksiyasi
            duration: 1, // Animatsiya davomiyligi
            delay: 0.6,
          }}
          target="_blank"
          href="https://t.me/the_watch_outlet_bot"
          className=" flex justify-center bg-white text-black dark:text-black dark:border-black font-bold items-center relative border-2 p-[5px] rounded-[15px] text-center font-nunito text-[18px] border-white w-[100%] "
        >
          Telegram Mini app
          <BsTelegram className=" absolute left-[15px] text-[25px]  " />
        </motion.a>
      </div>
      {/* Our watches */}
      <div className=" mt-[80px] px-[10px] ">
        <h1 className=" text-[30px] mb-[10px] ">Наши часы</h1>
        <div className=" grid grid-cols-1 gap-[10px] ">
          {PopulorWatch.map((watch) => {
            return (
              <Link key={watch.id} to="/">
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
                        {watch.brend}
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
                      <h1 className="font-kanit text-[27px]">{watch.price}$</h1>
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skupka;
