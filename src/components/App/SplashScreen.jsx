import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Local storage orqali tekshirish: Splash Screen ko‘rsatilganmi
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      setIsVisible(true); // Agar ko‘rsatilmagan bo‘lsa, Splash Screen ni ko‘rsatamiz
      localStorage.setItem("hasVisited", "true"); // Keyingi safar uchun yozib qo‘yamiz
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Splash Screen 5 soniya davomida ko‘rinadi
      const timer = setTimeout(() => {
        setIsVisible(false); // 5 soniyadan keyin Splash Screen-ni o‘chiradi
      }, 5000);

      return () => clearTimeout(timer); // Tozalash
    }
  }, [isVisible]);

  // Agar Splash Screen ko‘rinmas bo‘lsa, hech narsa qaytarmaslik
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 4 }} // Sekin yo‘qolish 1 soniya davom etadi, 4 soniya kutib turadi
      className="fixed inset-0 bg-black text-white flex items-center justify-center z-[10000000000000]"
    >
      <h1 className="text-2xl font-bold">Sitemizga hush kelibsiz!</h1>
    </motion.div>
  );
};

export default SplashScreen;
