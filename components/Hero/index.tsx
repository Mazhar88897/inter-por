"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex mt-6 lg:gap-8 xl:gap-32.5">
            <div className="items-center md:w-1/2">
              {/* <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
              Rexcorp LLC is Pakistan Liaison Office of B Group & Bridgexpo USA
              </h4> */}
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
              Rexcorpllc is a leading Event and Exhibition Marketing Company specializing in 
                {/* <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark "> */}
                 {" "}
                 <span className="text-purple-700 dark:text-purple-500">
             Textile and Leather Trade Shows.

                </span>
              </h1>
             
              <p className="pt-3">
            
As a trusted partner, we represent distinguished companies: B-Group LLC USA, 1st Arabia Trade Shows & Conferences (Saudi Arabia), and Nihalani Event (United Arab Emirates), KFA (Turkey), Bangladesh Denim Expo (Bangladesh), Advance Textile Expo (USA), facilitating collaboration and showcasing Pakistani high-end raw material and finished goods on the global stage.  </p>
            
              {/* <div className="mt-10">
              <p className="text-2xl font-bold text-white mb-3">
              Exhibitors Affliations:
              </p>

                  <div className="flex flex-wrap gap-5">
                   
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Ready to wear
                    </button>
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Fabrics
                    </button>
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Fiber, Yarn, and Row Material
                    </button>
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                     Wool Silk Lace Embroidery
                    </button>
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                        Denim Fabrics and Weavers
                    </button> <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Digital Printing
                    </button> <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                    Buttons, Zippers Other Types of Trims
                    </button><button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                   Textile Machinery
                    </button><button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                    Home Textile
                    </button>   
                  </div>
               

               
              </div> */}
               <p className="text-yellow-500 dark:text-yellow-300 font-semibold">
             Google Form Attachment
              </p>
            </div>

            <div className="animate_right items-center justify-center hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                
                <div className=" relative h-90 object-fill w-90">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/nav.jpg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/nav.jpg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
