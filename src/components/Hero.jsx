import React from "react";
import { motion } from "framer-motion";

const Hero = () => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
    <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl sm:text-6xl font-bold text-green-400">
      Hi, I'm Nihar Konda
    </motion.h1>
    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="mt-4 text-white text-lg max-w-xl">
      A passionate student developer and cybersecurity enthusiast. Check out my projects and skills below.
    </motion.p>
  </section>
);

export default Hero;
