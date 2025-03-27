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
          transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }} // Slower & smoother
        >
          <div className="flex gap-1 justify-center items-center">
            <p className="text-lg font-bold">
            Sapphire Textile Mills 
            </p>
            <p className="pl-2 text-lg text-yellow-600 font-semibold">
            ★★★★★ 
            </p>
            <ImagePak />
            
            
          </div>
          <div className="flex gap-1 justify-center items-center">
            <p className="text-lg font-bold">
            Mehmood Group of Industries
            </p>
            <p className=" pl-2 text-lg text-yellow-600 font-semibold">
            ★★★★★ 
            </p>
            <ImagePak />
            
            
          </div>

          <div className="flex gap-1 justify-center items-center">
            <p className="text-lg font-semibold">
            Nishat Chunian Ltd.
            </p>
            <p className="text-lg text-yellow-600 font-semibold pl-2">
            ★★★★★ 
            </p>
            <ImagePak />
            
            
          </div>

          <div className="flex gap-1 justify-center items-center">
            <p className="text-lg font-semibold">
            Artistic Milliners
            </p>
            <p className="text-lg text-yellow-600 font-semibold pl-2">
            ★★★★★ 
            </p>
            <ImagePak />
            
            
          </div>

          <div className="flex gap-1 justify-center items-center">
            <p className="text-lg font-semibold">
            Sapphire Textile Mills 
            </p>
            <p className="text-lg text-yellow-600 font-semibold pl-2">
            ★★★★★ 
            </p>
            <ImagePak />
            
            
          </div>

          <div className="flex gap-1 justify-center items-center ">
            <p className="text-lg font-semibold">
            Soorty
            </p>
            <p className="text-lg text-yellow-600 font-semibold pl-2">
            ★★★★★ 
            </p>
            <ImagePak />
            
            
          </div>
          <div className="flex gap-1 justify-center items-center">
            <p className="text-lg font-semibold">
         Naveena
            </p>
            <p className="text-lg text-yellow-600 font-semibold pl-2">
            ★★★★★ 
            </p>
            <ImagePak />
            
          </div>
          <div className="flex gap-1 justify-center items-center">
            <p className="text-lg font-semibold">
            Sadaqat Group
            </p>
            <p className="text-lg text-yellow-600 font-semibold pl-2">
            ★★★★★ 
            </p>
           
            <ImagePak />
            
          </div>
          <div className="flex gap-1 justify-center items-center">
            <p className="text-lg font-semibold">
            Al Karam Towel
            </p>
            <p className="text-lg text-yellow-600 font-semibold pl-2">
            ★★★★★ 
            </p>
           <ImagePak />
            
          </div>
 

          
        </motion.div>
      </div>
    </>
  );
};

export default EventList;


import React from 'react'

const ImagePak = () => {
  return (
    <div> <img
    src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"
    alt="USA Flag"
    width="20"
  /></div>
  )
}
