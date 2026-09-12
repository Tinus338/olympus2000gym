"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 bg-[#f4f1eb] overflow-hidden"
    >
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#dce5d7] blur-3xl opacity-50" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="uppercase tracking-[0.3em] text-stone-500 text-sm mb-5">
            Kennismaken
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-stone-800 leading-tight">
            Klaar voor een
            <br />
            volgende stap?
          </h2>

          <p className="mt-7 text-lg leading-8 text-stone-600">
            Wilt u bespreken wat ik voor u kan betekenen? Neem dan rechtstreeks
            contact met mij op via e-mail. Ik kom vervolgens persoonlijk bij u
            terug.
          </p>

          <div className="mt-10 bg-white rounded-[32px] p-8 md:p-10 shadow-xl border border-stone-200">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-400 mb-4">
              Neem contact op
            </p>

            <a
              href="mailto:davidsemariska@hotmail.com"
              className="text-xl md:text-2xl text-stone-800 hover:text-stone-500 transition-colors duration-300"
            >
              davidsemariska@hotmail.com
            </a>

            <div className="mt-7">
              <a
                href="mailto:davidsemariska@hotmail.com"
                className="inline-block rounded-full bg-stone-800 text-white px-8 py-4 font-medium hover:bg-stone-900 hover:scale-[1.01] transition-all duration-300"
              >
                Stuur een e-mail
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}