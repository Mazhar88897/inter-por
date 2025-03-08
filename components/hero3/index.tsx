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
      <section className="overflow-hidden pb-6 pt-5 ">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" ">
              {/* <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
              Rexcorp LLC is Pakistan Liaison Office of B Group & Bridgexpo USA
              </h4> */}
              {/* <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                We are connecting the
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                 Textile World
                </span>
              </h1> */}
              {/* <p className="text-yellow-500 dark:text-yellow-300 font-semibold">
             Google Form Attachment
              </p> */}
              <p>

              </p>
            
              <div className="mt-10">
              <p className="text-2xl font-bold text-black dark:text-white mb-3">
             VISITORS 
              </p>

              <div className="flex flex-wrap gap-5">
      <button
        aria-label="Brand Owners, Labels button"
        className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
      >
        Brand Owners, Labels
      </button>
      <button
        aria-label="Manufacturers button"
        className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
      >
        Manufacturers
      </button>
      <button
        aria-label="Denim Brands button"
        className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
      >
        Denim Brands
      </button>
      <button
        aria-label="Retailers and Wholesalers button"
        className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
      >
        Retailers and Wholesalers
      </button>
      <button
        aria-label="Purchasers button"
        className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
      >
        Purchasers
      </button>
      <button
        aria-label="Designers and Design Studio Owners button"
        className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
      >
        Designers and Design Studio Owners
      </button>
      <button
        aria-label="Importers button"
        className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
      >
        Importers
      </button>
      <button
        aria-label="Distributors button"
        className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
      >
        Distributors
      </button>
      <button
        aria-label="Textile Houses button"
        className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
      >
        Textile Houses
      </button>
      <button
        aria-label="Agents button"
        className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
      >
        Agents
      </button>
      <button
        aria-label="Trade Body Representatives button"
        className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
      >
        Trade Body Representatives
      </button>
      <button
        aria-label="Sourcing Offices button"
        className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
      >
        Sourcing Offices
      </button>
      <button
        aria-label="Chambers of Commerce button"
        className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
      >
        Chambers of Commerce
      </button>
      <button
        aria-label="Associations button"
        className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
      >
        Associations
      </button>
      <button
        aria-label="Press Representatives button"
        className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
      >
        Press Representatives
      </button>
    </div>
               

               
              </div>
            </div>

            {/* <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                
                <div className=" relative aspect-[700/666] w-full">
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
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
