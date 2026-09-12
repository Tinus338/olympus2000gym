"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Diensten", href: "#services" },
    { name: "Over Mariska", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-5 sm:px-6 py-4">
        <div className="bg-white/85 backdrop-blur-xl border border-stone-200/70 shadow-sm rounded-full px-4 sm:px-5 py-2.5 flex items-center justify-between">
          <a href="#" onClick={handleLinkClick} className="flex items-center">
            <img
              src="/logo.png"
              alt="Mariska Davidse"
              className="w-12 h-12 rounded-full object-cover"
            />
          </a>

          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm text-stone-600 hover:text-stone-900 transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-stone-800 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            <a
              href="#contact"
              className="bg-stone-800 text-white px-5 py-2.5 rounded-full text-sm hover:bg-stone-900 hover:scale-[1.02] transition-all duration-300"
            >
              Kennismaken
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-stone-700 rounded-full hover:bg-stone-100 transition-colors duration-300"
            aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
            aria-expanded={menuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {!menuOpen ? (
                <motion.span
                  key="open"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="text-xl"
                >
                  ☰
                </motion.span>
              ) : (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                  className="text-xl"
                >
                  ×
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="md:hidden mt-3 bg-white/95 backdrop-blur-xl border border-stone-200/70 shadow-xl rounded-3xl p-4"
            >
              <div className="flex flex-col">
                {links.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.25 }}
                    className="px-4 py-3.5 rounded-2xl text-stone-700 hover:bg-stone-100 transition-colors duration-300"
                  >
                    {link.name}
                  </motion.a>
                ))}

                <motion.a
                  href="#contact"
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.25 }}
                  className="mt-2 text-center bg-stone-800 text-white px-5 py-3.5 rounded-full hover:bg-stone-900 transition-colors duration-300"
                >
                  Plan een kennismaking
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}