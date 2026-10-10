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
            Psychologische expertise
            <br />
            voor mens & organisatie
          
          </h2>

          <p className="text-lg text-stone-600 leading-8 mb-6">
            Ik werk ruim twintig jaar als GZ-psycholoog en executive coach binnen de geestelijke
            gezondheidszorg, arbodienstverlening en zakelijke dienstverlening. 
            Daarnaast heb ik meer dan tien jaar ervaring als leidinggevende, 
            bestuurder, directeur en ondernemer.
          </p>

          <p className="text-lg text-stone-600 leading-8 mb-6">
            Die combinatie bepaalt hoe ik naar vraagstukken kijk. Ik kijk naar wat er speelt, welke factoren van invloed zijn en wat iemand nodig heeft om verder te komen. Daarbij betrek ik niet alleen de persoon, maar ook de context van werk, verantwoordelijkheid en leven.
          </p>

          <p className="text-lg text-stone-600 leading-8 mb-8">
            Als voormalig eigenaar en directeur ken ik de dynamiek van leidinggeven, ondernemen en verantwoordelijkheid dragen van binnenuit. Die ervaring helpt mij om professionele en leiderschapsvraagstukken vanuit verschillende perspectieven te bekijken.
          </p>

          
<div>
  <p className="text-lg text-stone-600 leading-8 mb-8">
    Mijn begeleiding is gericht op inzicht én resultaat: begrijpen wat er speelt, patronen herkennen en gericht werken aan wat nodig is om klachten te verminderen, anders met situaties om te gaan of verdere ontwikkeling mogelijk te maken.
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
                  GZ-Psycholoog & Executive coach
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
                  Persoonlijke online begeleiding
                </h3>
                <p className="text-stone-500 mt-2 leading-6">
                  Een betrokken en professionele aanpak met aandacht voor duurzame
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