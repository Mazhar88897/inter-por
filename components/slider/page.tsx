"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
    "/images/hero/artistic.png",
  "/images/hero/mehmood.png",
  "/images/hero/naveena.png",
    "/images/hero/sapp.png",
    "/images/hero/soor.png",
  
  
  "/images/hero/nishat.png",
  "/images/hero/sadaqat.png",
 "/images/hero/alkaram.png",
];

const EventList = () => {
  return (
    <>
    <div className="relative my-5 lg:my-14 overflow-hidden border-b border-t text-black dark:text-white py-3">
      <motion.div
        className="flex space-x-10 whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }} // Slower & smoother
      >
        {images.map((src, index) => (
          <div key={index} className="w-40 h-40 lg:w-60 lg:h-60 relative flex-shrink-0">
           <Image 
              src={src} 
              alt={`Event ${index + 1}`} 
              fill 
              className="object-cover" 
            />    </div>
        ))}
      </motion.div>
    </div>
    </>
  );
};

export default EventList;
