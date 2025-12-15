import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    img: "https://www.sagexpress.uz/media/images/Gilamlar.png",
  },
  {
    id: 2,
    img: "https://www.sagexpress.uz/media/images/movaroun_2.jpg",
  },
  {
    id: 3,
    img: "https://www.sagexpress.uz/media/images/isfahan.jpg",
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  // ⏱ Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mt-[15px] px-[10px] ">
      {/* SLIDER CONTAINER */}
      <div className="relative h-[200px] overflow-hidden border-2 border-[#9A7447] rounded-[20px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[index].id}
            src={slides[index].img}
            alt="slide"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 0, opacity: 0 }}
            transition={{ duration: 0.1 }}
          />
        </AnimatePresence>
      </div>

      {/* DOT CONTROLS */}
      <div className="flex justify-center gap-[15px] mt-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === index ? "bg-[#9A7447] scale-110" : "bg-[#d4c3ac]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
