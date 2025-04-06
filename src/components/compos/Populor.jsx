import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiDelete } from "react-icons/ti";
import { MdPriceChange } from "react-icons/md";
import { OldWatches } from "../Data/WatchData";
import { IoMdArrowRoundBack } from "react-icons/io";

const images = OldWatches;

export default function ImageGallery() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  return (
    <div className="mb-[100px] text-white dark:text-black mt-[15px] p-[6px] ">
      <h1 className=" font-nunito md:text-[35px] mb-[5px] text-[27px] dark:text-black font-bold text-white">
        Top Cakes
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[13px] px-[5px] ">
        {images.map((img, index) => (
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
            className={` p-[8px] flex flex-col dark:bg-[#f9aec0] gap-[10px] rounded-lg transition-all duration-500 ${
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
            <div>
              <h1 className=" text-[18px] font-nunito">{img.title}</h1>
              {/* price */}
              <h1 className=" leading-4 text-[17px] font-nunito dark:text-black text-white">
                {img.price}$
              </h1>
            </div>
          </motion.div>
        ))}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 dark:bg-[#facbd6]  bg-[#492791] w-[100vw] overflow-x-auto h-[100vh] z-[111111111111] flex items-start justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative bg-[#04070f] w-[100%] pt-[50px] justify-center py-[18px] shadow-lg"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/*//! Back button */}
                <button
                  className="absolute w-[100%] top-[0] bg-[#f9aec0] text-white py-[5px] px-[10px] "
                  onClick={() => setSelectedImage(null)}
                >
                  <IoMdArrowRoundBack
                    className=" bg-white text-black rounded-xl p-[7px] "
                    size={42}
                  />
                </button>
                <img
                  src={selectedImage.img}
                  alt="Selected"
                  className=" w-[100%] object-cover m-auto border-[#9a9494] border-[2px] h-[350px]"
                />
                <h1 className="text-white text-[25px] font-nunito text-center mt-2">
                  {selectedImage.title}
                </h1>
                {/* price */}
                <h1 className=" mt-[10px] text-white text-[21px] font-nunito">
                  Цена: {selectedImage.price}$
                </h1>
                <h1 className=" mt-[10px] text-white text-[21px] font-nunito">
                  Диаметр: {selectedImage.diometr}
                </h1>
                <h1 className=" mt-[10px] text-white text-[21px] font-nunito">
                  Гарантия: 1 Года
                </h1>
                <h1 className=" mt-[10px] text-white text-[21px] font-nunito">
                  Состояние: C пробегом
                </h1>

                <div className="w-[100%] mt-[15px] flex justify-center items-center ">
                  <a
                    href="https://t.me/Bekhruz777"
                    target="_blank"
                    className=" text-[20px] p-[5px] border-[2px]  bg-green-600 rounded-[10px] border-black w-[50%] text-center "
                  >
                    Kупить
                  </a>
                </div>
                {/* Price and valuto calqulator */}
                {/* <h1 className=" hidden text-black text-center mt-2">
                  {currency === "USD"
                    ? `$${selectedImage.price}`
                    : `${selectedImage.price * exchangeRate} UZS`}
                </h1> */}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// import React from "react";
// // icons
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { tissotLogo } from "../../assets/Images";
// import { PopulorWatch } from "../Data/WatchData";

// const Populor = () => {
//   return (
//     <div className=" mt-[25px] w-[97%] m-auto">
//       <h1 className=" font-nunito md:text-[35px] text-[25px] dark:text-black font-bold text-white">
//         Top Cakes
//       </h1>
//       <div className="mt-[7px] mb-[30px] grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-[10px] ">
//         {/* Products */}

//         {/* rolex */}
//         {PopulorWatch.map((watch) => {
//           return (
//             <Link key={watch.id} to={watch.link}>
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ ease: "easeOut", duration: 1.5 }}
//                 className=" flex justify-between items-center dark:border-[#c3c1c1] border-[#25365a] dark:bg-[#f9aec0] bg-[#2e1563] overflow-hidden relative rounded-[20px] border-[2px] border-solid  p-[10px]"
//               >
//                 {/* text */}
//                 <div className=" flex flex-col justify-between gap-[23px] ">
//                   {/* logo */}
//                   <motion.div
//                     initial={{ opacity: 0, x: -50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{
//                       ease: "easeOut", // Easing funksiyasi
//                       duration: 1, // Animatsiya davomiyligi
//                       delay: 0.1,
//                     }}
//                     className=" flex gap-[10px] items-center "
//                   >
//                     <img
//                       src={watch.logo}
//                       alt="logo-brend"
//                       className={` ${watch.logoWidth} ${watch.logoColor} ${watch.logoPa} rounded-lg object-cover`}
//                     />
//                   </motion.div>
//                   {/* title */}
//                   <motion.div
//                     initial={{ opacity: 0, x: -50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{
//                       ease: "easeOut", // Easing funksiyasi
//                       duration: 1, // Animatsiya davomiyligi
//                       delay: 0.2,
//                     }}
//                   >
//                     <h1 className="text-[19px] leading-6 uppercase font-bold font-nunito ">
//                       {watch.brend}
//                     </h1>
//                     <h1 className=" text-[12px]">{watch.rafcode}</h1>
//                   </motion.div>
//                   {/* price */}
//                   <motion.div
//                     initial={{ opacity: 0, x: -50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{
//                       ease: "easeOut", // Easing funksiyasi
//                       duration: 1, // Animatsiya davomiyligi
//                       delay: 0.3,
//                     }}
//                   >
//                     <h1 className="font-kanit text-[27px] uppercase">
//                       {watch.price}$
//                     </h1>
//                   </motion.div>
//                 </div>
//                 {/* img */}
//                 <motion.div
//                   initial={{ opacity: 0, x: 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{
//                     ease: "easeOut", // Easing funksiyasi
//                     duration: 1, // Animatsiya davomiyligi
//                     delay: 0.2,
//                   }}
//                 >
//                   <img
//                     src={watch.mainImage}
//                     alt="image-product-watch"
//                     className=" h-[200px] "
//                   />
//                 </motion.div>
//               </motion.div>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Populor;
