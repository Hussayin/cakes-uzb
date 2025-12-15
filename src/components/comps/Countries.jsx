import React from "react";

const Countries = () => {
  return (
    <div className=" mt-[20px] flex justify-center items-center ">
      <div className=" w-[95%] px-[15px] py-[10px] border-2 rounded-[20px] border-[#9A7447] bg-white flex justify-between items-center flex-wrap">
        {/* eron */}
        <div className=" flex flex-col justify-center items-center ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/500px-Flag_of_Iran.svg.png"
            alt="Eron gilamlar"
            className=" h-[60px] w-[60px] rounded-[50%] object-cover "
          />
          <h3 className=" font-cormorant font-bold ">Иран</h3>
        </div>
        {/* Turkiya */}
        <div className=" flex flex-col justify-center items-center ">
          <img
            src="https://cdn.britannica.com/82/4782-050-8129909C/Flag-Turkey.jpg"
            alt="Eron gilamlar"
            className=" h-[60px] w-[60px] rounded-[50%] object-cover"
          />
          <h3 className=" font-cormorant font-bold ">Турция</h3>
        </div>
        {/* Afgon */}
        <div className=" flex flex-col justify-center items-center ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg/1200px-Flag_of_Afghanistan_%282013%E2%80%932021%29.svg.png"
            alt="Eron gilamlar"
            className=" h-[60px] w-[60px] rounded-[50%] object-cover "
          />
          <h3 className=" font-cormorant font-bold ">Афган</h3>
        </div>
        {/* Turkman */}
        <div className=" flex flex-col justify-center items-center ">
          <img
            src="https://www.advantour.com/img/turkmenistan/symbolics/turkmenistan-flag_sm.jpg"
            alt="Eron gilamlar"
            className=" h-[60px] w-[60px] rounded-[50%] object-cover"
          />
          <h3 className=" font-cormorant font-bold ">Tуркмен</h3>
        </div>
      </div>
    </div>
  );
};

export default Countries;
