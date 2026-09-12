"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#f8f6f2]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[0.3em] text-stone-500 text-sm mb-5">
            Over Mariska
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-stone-800 leading-tight mb-8">
            Psychologische expertise,
            <br />
            gecombineerd met
            <br />
            praktijkervaring.
          </h2>

          <p className="text-lg text-stone-600 leading-8 mb-6">
            Ik ben GZ-psycholoog met ruim twintig jaar ervaring binnen de
            geestelijke gezondheidszorg, arbodienstverlening en zakelijke
            dienstverlening.
          </p>

          <p className="text-lg text-stone-600 leading-8 mb-6">
            Daarnaast heb ik meer dan tien jaar ervaring als manager,
            bestuurder, directeur en ondernemer. Als voormalig eigenaar en
            directeur ken ik de uitdagingen van verantwoordelijkheid dragen,
            leidinggeven en ondernemen van binnenuit.
          </p>

          <p className="text-lg text-stone-600 leading-8 mb-8">
            Die combinatie van psychologische expertise en praktijkervaring
            stelt mij in staat om mensen te begeleiden bij zowel persoonlijke
            als professionele vraagstukken.
          </p>

          <div className="border-l-2 border-[#a9b9a2] pl-6">
            <p className="text-stone-700 leading-7 italic">
              "Mijn aanpak is betrokken, deskundig, reflectief en praktisch.
              Ik geloof dat duurzame ontwikkeling ontstaat wanneer inzicht
              leidt tot beweging en verandering."
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[40px] bg-[#d8e3d2] opacity-40 blur-2xl" />

          <div className="relative bg-white rounded-[36px] p-8 md:p-10 shadow-xl border border-stone-200">
            <p className="uppercase tracking-[0.25em] text-stone-400 text-xs mb-8">
              Ervaring & expertise
            </p>

            <div className="space-y-7">
              <div>
                <h3 className="text-xl font-medium text-stone-800">
                  GZ-Psycholoog
                </h3>
                <p className="text-stone-500 mt-2 leading-6">
                  Ruim 20 jaar ervaring in psychologie, behandeling en
                  begeleiding.
                </p>
              </div>

              <div className="h-px bg-stone-200" />

              <div>
                <h3 className="text-xl font-medium text-stone-800">
                  Bestuur & management
                </h3>
                <p className="text-stone-500 mt-2 leading-6">
                  Meer dan 10 jaar ervaring als manager, bestuurder, directeur
                  en ondernemer.
                </p>
              </div>

              <div className="h-px bg-stone-200" />

              <div>
                <h3 className="text-xl font-medium text-stone-800">
                  Persoonlijke begeleiding
                </h3>
                <p className="text-stone-500 mt-2 leading-6">
                  Een betrokken en praktische aanpak met aandacht voor duurzame
                  ontwikkeling.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}