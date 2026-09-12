"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-light tracking-wide">
              Mariska Davidse
            </h2>

            <p className="mt-3 text-stone-400">
              GZ-Psycholoog | Executive Coaching
            </p>

            <p className="mt-6 text-stone-400 leading-7 max-w-md">
              Persoonlijke en professionele ontwikkeling voor professionals,
              leidinggevenden en bestuurders.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:text-right"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500 mb-5">
              Navigatie
            </p>

            <div className="flex md:justify-end flex-wrap gap-x-6 gap-y-3">
              <a
                href="#services"
                className="text-stone-300 hover:text-white transition"
              >
                Diensten
              </a>

              <a
                href="#about"
                className="text-stone-300 hover:text-white transition"
              >
                Over Mariska
              </a>

              <a
                href="#contact"
                className="text-stone-300 hover:text-white transition"
              >
                Contact
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-stone-500">
          <p>© {new Date().getFullYear()} Mariska Davidse. Alle rechten voorbehouden.</p>

          <p>GZ-Psycholoog • Executive Coaching</p>
        </div>
      </div>
    </footer>
  );
}