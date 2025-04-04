import React, { useState } from "react";
import { AllWatchs } from "../Data/WatchData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);
  const [view, setView] = useState(false);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchTerm(query);

    if (query === "") {
      setFilteredCars([]);
      setView(false);
      return;
    }

    const filtered = Object.keys(AllWatchs).flatMap((watchType) =>
      AllWatchs[watchType].filter(
        (watch) =>
          // Qidiruvni title yoki rafcode bo'yicha amalga oshirish
          watch.title.toLowerCase().includes(query.toLowerCase()) ||
          watch.rafcode.toLowerCase().includes(query.toLowerCase())
      )
    );

    setFilteredCars(filtered);
    setView(filtered.length > 0);
  };

  return (
    <div
      className={` w-[100%] ${
        view ? "fixed top-0 bg-[#0f192b] " : "block mt-[5px] "
      } search-container z-[100000]  `}
    >
      <div className={`w-[90%]  mt-[12px] mb-[8px]  m-auto `}>
        <input
          type="text"
          placeholder="Search Cakes"
          value={searchTerm}
          onChange={handleSearch}
          className=" w-[100%] border-2 border-[#c3c1c1] text-black px-[10px] rounded-md  p-[5px] outline-none  "
        />
      </div>

      {view && (
        <div
          className={`search-results pb-[70px]  ${
            searchTerm ? "fixed" : "h-0"
          } z-[10000] bg-[#112544] mt-[0px] h-[100vh] w-screen overflow-auto transition-all duration-300`}
        >
          {filteredCars.length === 0 ? (
            <p className="text-center justify-center items-center text-[25px] text-white mt-10">
              Ничего не найдено...
            </p>
          ) : (
            filteredCars.map((car) => (
              <Link
                key={car.id}
                to={car.link}
                className="block m-[10px] p-[10px] bg-[#0f192b] rounded-lg shadow-md"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 1 }}
                  className="car-item  gap-[10px] flex items-center"
                >
                  <img
                    src={car.mainImage}
                    alt={car.title}
                    className="car-image w-[120px] h-[120px] object-contain rounded-md"
                  />
                  <div className="">
                    <h3 className="text-lg uppercase font-semibold">
                      {car.title}
                    </h3>
                    <p className="text-gray-600 text-[15px] ">{car.rafcode}</p>
                  </div>
                </motion.div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
