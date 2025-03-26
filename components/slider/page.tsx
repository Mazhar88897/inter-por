"use client";

import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="relative overflow-hidden bg-gray-900 text-white py-3">
      <motion.div
        className="flex space-x-10 whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        <p className="text-lg font-semibold">🌍 Connecting Global Markets</p>
        <p className="text-lg font-semibold">📢 Elevating Textile & Leather Industries</p>
        <p className="text-lg font-semibold">🤝 Facilitating Strategic Partnerships</p>
        <p className="text-lg font-semibold">🚀 Showcasing Excellence Worldwide</p>
      <p className="text-lg font-semibold">🚀 Showcasing Excellence Worldwide</p>
      </motion.div>
    </div>
  );
};

export default Marquee;
