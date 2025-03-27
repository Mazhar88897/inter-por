"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const EventList = () => {
  return (
    <>
      <div className="relative my-5 lg:my-14 overflow-hidden border-b border-t text-black dark:text-white py-3">
        <motion.div
          className="flex space-x-10 whitespace-nowrap"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 200, ease: "easeInOut" }} // Slower & smoother
        >
          <div className="flex gap-1 justify-center items-center">
            <p className="text-lg font-semibold">
              Advanced Textiles EXPO - 05-07 Nov 2025 - Indianapolis, USA
            </p>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt="USA Flag"
              width="20"
            />
          </div>

          <div className="flex gap-1 justify-center items-center">
            <p className="text-lg font-semibold">
              HOMETEX - 20-23 May 2025 - Istanbul, Turkey
            </p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg"
              alt="Turkey Flag"
              width="20"
            />
          </div>

          <div className="flex gap-1 justify-center items-center">
            <p className="text-lg font-semibold">
              INTERTEX Portugal - 20-22 May 2025 - Porto, Portugal
            </p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg"
              alt="Portugal Flag"
              width="20"
            />
          </div>

          <div className="flex gap-1 justify-center items-center">
            <p className="text-lg font-semibold">
              INTERLEATHER Portugal - 20-22 May 2025 - Porto, Portugal
            </p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg"
              alt="Portugal Flag"
              width="20"
            />
          </div>

          <div className="flex gap-1 justify-center items-center">
            <p className="text-lg font-semibold">ITF Macao - 7-9 Nov 2025 - Macao</p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/63/Flag_of_Macau.svg"
              alt="Macao Flag"
              width="20"
            />
          </div>

          <div className="flex gap-1 justify-center items-center">
            <p className="text-lg font-semibold">
              INTERTEX Spain - 25-27 Nov 2025 - Madrid, Spain
            </p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg"
              alt="Spain Flag"
              width="20"
            />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default EventList;
