import React from "react";
// icons
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { tissotLogo } from "../../assets/Images";
import { PopulorWatch } from "../Data/WatchData";

const Populor = () => {
  return (
    <div className=" mt-[25px] w-[97%] m-auto">
      <h1 className=" font-nunito md:text-[35px] text-[25px] dark:text-black font-bold text-white">
        TOP CAKES
      </h1>
      <div className="mt-[7px] mb-[30px] grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-[10px] ">
        {/* Products */}

        {/* rolex */}
        {PopulorWatch.map((watch) => {
          return (
            <Link key={watch.id} to={watch.link}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1.5 }}
                className=" flex justify-between items-center border-[#25365a] dark:bg-white bg-[#271158] overflow-hidden relative rounded-[20px] border-[2px] border-solid  p-[10px]"
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
                    <h1 className="font-kanit text-[27px] uppercase">
                      {watch.price}$
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
          );
        })}
      </div>
    </div>
  );
};

export default Populor;
