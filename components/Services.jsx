"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Persoonlijke Ontwikkeling",
      text: "Meer inzicht krijgen in uzelf, uw patronen, kwaliteiten en mogelijkheden.",
      items: [
        "Zelfvertrouwen en zelfinzicht",
        "Persoonlijke effectiviteit",
        "Levensfase- en ontwikkelingsvragen",
        "Balans tussen werk en privé",
        "Zingeving en richting",
      ],
    },
    {
      title: "Psychologische Begeleiding & Behandeling",
      text: "Professionele ondersteuning bij psychische klachten of vastgelopen patronen.",
      items: [
        "Stress en burn-out",
        "Angstklachten",
        "Somberheid",
        "Overbelasting",
        "Werkgerelateerde klachten",
      ],
    },
    {
      title: "Executive Coaching",
      text: "Voor professionals, leidinggevenden, ondernemers en bestuurders die willen groeien in hun rol en impact.",
      items: [
        "Persoonlijk leiderschap",
        "Effectief communiceren",
        "Omgaan met verandering",
        "Besluitvorming",
        "Veerkracht onder druk",
      ],
    },
  ];

  return (
    <section id="services" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <p className="uppercase tracking-[0.3em] text-stone-500 text-sm mb-5">
            Waarmee kan ik u helpen?
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-stone-800 leading-tight">
            Begeleiding die aansluit bij uw persoonlijke en professionele
            vraagstukken.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[#f8f6f2] rounded-[32px] p-8 md:p-10 border border-stone-200/70 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-medium text-stone-800 mb-5">
                {service.title}
              </h3>

              <p className="text-stone-600 leading-7 mb-8">
                {service.text}
              </p>

              <div className="space-y-3">
                {service.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-stone-600"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#a9b9a2] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}