import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rexcropllc",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;
