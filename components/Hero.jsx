"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f8f6f2] via-white to-[#eef2ec] pt-32">
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#dfe8da] blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-[#efe7dd] blur-3xl opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center min-h-[85vh]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <p className="uppercase tracking-[0.35em] text-stone-500 text-sm mb-6">
            GZ-Psycholoog • Executive Coaching
          </p>

          <h1 className="text-5xl lg:text-7xl font-light leading-tight text-stone-800">
            Persoonlijke
            <br />
            én professionele
            <br />
            ontwikkeling.
          </h1>

          <p className="mt-8 text-xl text-stone-600 leading-9 max-w-xl">
            Soms wilt u groeien. Soms loopt u vast. En soms vraagt een nieuwe
            fase in werk of leven om reflectie, richting en ondersteuning.
          </p>

          <div className="flex flex-wrap gap-5 mt-12">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-stone-800 text-white px-8 py-4 rounded-full shadow-xl hover:bg-stone-900 transition inline-block"
            >
              Plan een kennismaking
            </motion.a>

            <motion.a
              href="#about"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="border border-stone-300 px-8 py-4 rounded-full hover:bg-white transition inline-block"
            >
              Lees meer
            </motion.a>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16">
            <div>
              <h3 className="text-3xl font-light text-stone-800">20+</h3>
              <p className="text-stone-500 mt-2 text-sm">Jaar ervaring</p>
            </div>

            <div>
              <h3 className="text-3xl font-light text-stone-800">100%</h3>
              <p className="text-stone-500 mt-2 text-sm">
                Persoonlijke aandacht
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-light text-stone-800">1-op-1</h3>
              <p className="text-stone-500 mt-2 text-sm">Begeleiding</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="absolute h-[90%] w-[90%] rounded-[40px] bg-[#dfe8da] blur-3xl opacity-40" />

          <motion.img
            src="/mariska.jpg"
            alt="Mariska Davidse"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-[36px] shadow-2xl w-full max-w-md object-cover"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-7 h-12 rounded-full border border-stone-400 flex justify-center"
        >
          <div className="w-1 h-3 rounded-full bg-stone-400 mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}