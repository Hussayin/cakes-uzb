import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiDelete } from "react-icons/ti";
import { MdPriceChange } from "react-icons/md";
import { OldWatches } from "../Data/WatchData";

const images = OldWatches;

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [currency, setCurrency] = useState("USD");
  const exchangeRate = 12000; // USD to UZS

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  const filteredImages = images.filter((img) => {
    const isBrandMatch = selectedBrand === "All" || img.brend === selectedBrand;
    const isPriceMatch =
      (!minPrice || img.price >= minPrice) &&
      (!maxPrice || img.price <= maxPrice);
    return isBrandMatch && isPriceMatch;
  });

  return (
    <div className="mt-[0px] mb-[100px] text-white">
      <div className="flex gap-[13px]  p-[10px] overflow-x-scroll hide-scrollbar ">
        {[
          "All",
          "Tissot",
          "Ulysse",
          "Raymond",
          "Baume",
          "Rolex",
          "Rado",
          "Breguet",
          "Movado",
          "Breitling",
          "Maurice",
          "Omega",
          "Frederique",
          "Brentling",
          "Seiko",
          "Longines",
          "Montblanc",
          "Chopard",
          "Cuervo",
          "Hamilton",
          "Perrelet",
          "Edox",
          "Harry",
          "Martin",
          "Aerowatch",
          "ZENITH",
          "Bulova",
          "Louis",
          "Dubey",
        ].map((brand) => (
          <button
            key={brand}
            className={` px-[20px] py-[5px] font-nunito text-[17px] rounded-md ${
              selectedBrand === brand ? "bg-blue-500" : "bg-gray-300 text-black"
            }`}
            onClick={() => setSelectedBrand(brand)}
          >
            {brand}
          </button>
        ))}
      </div>
      {/* input */}
      <div className=" px-[10px] w-[100%] m-auto  flex justify-center items-center gap-2 mb-4">
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="p-2 rounded-md w-[100%] text-black"
        />
        <span>до</span>
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="p-2 rounded-md w-[100%] text-black"
        />
      </div>
      {/* <button
        className="px-4 py-2 bg-green-500 text-white rounded-md mb-4"
        onClick={() => setCurrency(currency === "USD" ? "UZS" : "USD")}
      >
        {currency}
      </button> */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[7px] p-2">
        {filteredImages.map((img, index) => (
          <div
            key={img.id}
            className=" mb-[8px] bg-[#0d1d33] p-[8px] flex flex-col gap-[10px] rounded-lg "
          >
            <motion.img
              src={img.img}
              alt={`Image ${index}`}
              className="cursor-pointer rounded-lg shadow-md w-[100%] object-cover h-[200px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(img)}
            />
            <div>
              <h1 className=" text-[18px] font-nunito">{img.title}</h1>
              {/* price */}
              <h1 className=" leading-4 text-[17px] font-nunito text-white">
                {img.price}$
              </h1>
              {/* <h1>
              {currency === "USD"
                ? `$${img.price}`
                : `${img.price * exchangeRate} UZS`}
            </h1> */}
            </div>
          </div>
        ))}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-[#112544] z-[1111111111] flex items-start justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative bg-[#0e1629] w-[100%]  justify-center py-[18px] px-[14px] pt-[20px] rounded-lg shadow-lg"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 bg-gray-800 text-white p-1 rounded-full"
                  onClick={() => setSelectedImage(null)}
                >
                  <TiDelete size={29} />
                </button>
                <img
                  src={selectedImage.img}
                  alt="Selected"
                  className=" w-[95%] object-cover m-auto border-[#9a9494] border-[2px] h-[350px] rounded-lg"
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
