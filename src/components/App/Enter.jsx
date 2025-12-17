import React, { useEffect } from "react";
import Navbar from "../comps/Navbar";
import Slider from "../comps/Slider";
import Countries from "../comps/Countries";
import NewCarpets from "../comps/NewCarpets";
import Controller from "../comps/Controller";
import Footer from "../comps/Footer";

const Enter = () => {
  // useEffect(() => {
  //   const tg = window.Telegram.WebApp;
  //   tg.ready();

  //   const user = tg.initDataUnsafe?.user;

  //   if (user) {
  //     fetch("FIREBASE_FUNCTION_URL", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ user }),
  //     });
  //   }
  // }, []);

  return (
    <div className="mb-[100px]">
      <Navbar />
      <Slider />
      <Countries />
      <NewCarpets />
      <Controller />
      {/* <Footer /> */}
    </div>
  );
};

export default Enter;
