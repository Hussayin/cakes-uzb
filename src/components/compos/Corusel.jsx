import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { ramazon } from "../../assets/Images";

const imgs = [
  "https://static.insales-cdn.com/files/1/881/3138417/original/slider001.jpg",
  "https://static.insales-cdn.com/files/1/878/3138414/original/slider003.jpg",
  "https://static.insales-cdn.com/files/1/880/3138416/original/slider004.jpg",
  "https://static.insales-cdn.com/files/1/882/3138418/original/slider005.jpg",
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 6;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const Corusel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1.5 }}
      className="  relative1 mt-[0px] overflow-hidden md:h-[55vh] md:mx-[70px] "
    >
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab h-[100%] items-start active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      {/* <GradientEdges /> */}
    </motion.div>
  );
};

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-[100%] h-[100%] shrink-0 border-2 border-[#c3c1c1] rounded-xl bg-neutral-800 object-cover"
          />
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className=" flex w-full justify-center gap-2 m-0 p-0">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-[9px] w-[9px] rounded-full  transition-colors ${
              idx === imgIndex ? "bg-[#e5e2ee]" : "bg-white"
            }`}
          />
        );
      })}
    </div>
  );
};
