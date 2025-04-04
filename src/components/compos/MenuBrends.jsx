import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { watchBrends } from "../Data/WatchData";
const MenuBrends = () => {
  return (
    <Swiper
      // spaceBetween={5}
      slidesPerView={3.7}
      //   onSlideChange={() => console.log("Slide Change")}
      //   onSwiper={(swiper) => console.log(swiper)}
      className=" md:hidden block pb-[8px]  mx-[5px] font-kanit dark:bg-[#f9aec0] bg-[#2e1563] border-[#1c2c4d] dark:border-[#c3c1c1] border-[2px]  mt-[6px] rounded-2xl px-[3px] py-[7px] "
    >
      {watchBrends.map((brend) => {
        return (
          <SwiperSlide key={brend.id}>
            <Link
              to={brend.link}
              className=" flex flex-col justify-center items-center gap-[2px] "
            >
              <img
                src={brend.image}
                alt={brend.title}
                className=" border-solid rounded-[50%] p-[2px] h-[83px] w-[83px] text-center dark:bg-white bg-[#5f36b8] border-[#1c2c4d] border-[1px] object-cover "
              />
              <h1 className=" font-nunito font-bold text-[15px]">
                {brend.title}
              </h1>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MenuBrends;
