import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {

  return (
    <section className="relative text-center py-32 sm:py-48 lg:py-64 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img 
                src="https://picsum.photos/seed/investment/1920/1080"
                alt="Abstract background"
                className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400"
        >
          Od Zera do 100 000 zł.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-400"
        >
          Twoja droga do niezależności finansowej zaczyna się tutaj. Opanuj sztukę inwestowania z kursem, który zmienia zasady gry.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex justify-center gap-4"
        >
          <a
            href="#pricing"
            className="px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500"
          >
            Zacznij Już Dziś
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;