import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// icons
import { FaShoppingBasket } from "react-icons/fa";
import { MdMenuOpen, MdClose } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <div className="bg-white flex justify-between px-[15px] items-center pb-[5px] border-b-2 rounded-b-[30px] border-[#9A7447] relative z-50">
        {/* logo */}
        <img src="/image512.png" alt="logo" className="h-[80px]" />

        <div className="flex items-center gap-[30px]">
          <FaShoppingBasket className="text-[#9A7447]" size={25} />

          <button onClick={() => setOpen(true)}>
            <MdMenuOpen className="text-[#9A7447]" size={30} />
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* SIDE MENU */}
            <motion.div
              className="fixed top-0 right-0 h-full w-[100%] bg-white z-50 shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
            >
              {/* close button */}
              <div className="flex justify-end p-4">
                <button onClick={() => setOpen(false)}>
                  <MdClose size={28} className="text-[#9A7447]" />
                </button>
              </div>

              {/* menu items */}
              <ul className="flex flex-col gap-6 px-6 text-lg font-medium">
                <li className="text-[#9A7447] cursor-pointer">Bosh sahifa</li>
                <li className="cursor-pointer">Mahsulotlar</li>
                <li className="cursor-pointer">Savatcha</li>
                <li className="cursor-pointer">Aloqa</li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
