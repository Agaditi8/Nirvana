"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MenuOverlay from "./MenuOverlay";
import nira from "../../public/logo.webp"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6 "
      >
        {/* Logo */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-32 sm:w-40 h-10 sm:h-14 lg:w-42 lg:h-15"
        >
          <Image
            src={nira}
            alt="Nirvana Logo"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Desktop Nav - Hidden on mobile */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden md:flex items-center gap-8"
        >
          <motion.a 
            href="#home"
            className="font-anton uppercase text-white text-sm tracking-widest hover:text-gray-300 transition-colors duration-300 cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Home
          </motion.a>
          <motion.a 
            href="#work"
            className="font-anton uppercase text-white text-sm tracking-widest hover:text-gray-300 transition-colors duration-300 cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Work
          </motion.a>
          <motion.a 
            href="#about"
            className="font-anton uppercase text-white text-sm tracking-widest hover:text-gray-300 transition-colors duration-300 cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            About
          </motion.a>
          <motion.a 
            href="#contact"
            className="font-anton uppercase text-white text-sm tracking-widest hover:text-gray-300 transition-colors duration-300 cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.a>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="md:hidden border border-white/80 px-4 py-2 sm:px-5 sm:py-2 text-xs sm:text-sm tracking-widest uppercase font-anton text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm rounded-md"
        >
          Menu
        </motion.button>
      </motion.nav>

      <MenuOverlay
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
