"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuOverlay({ isOpen, onClose }: Props) {
  // Lock scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background Blur */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Top Right Panel */}
          <motion.div
            className="fixed top-20 sm:top-24 right-4 sm:right-10 z-50 
                      w-[95vw] sm:w-[90vw] md:w-[80vw] lg:w-[750px] 
                      h-[70vh] max-h-[480px] sm:max-h-[500px]
                      rounded-2xl border border-white/30 
                      bg-black shadow-2xl flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: -30, x: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, x: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {/* Close Button */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="absolute -top-10 sm:-top-12 right-4 sm:right-0 border border-white px-3 sm:px-4 py-1 text-xs sm:text-sm tracking-widest uppercase font-anton text-white hover:bg-white/10 self-end mt-2 mr-2 transition-all duration-300 backdrop-blur-sm rounded-md"
            >
              CLOSE
            </motion.button>

            {/* Top Section - Navigation (Original Left) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="w-full p-6 sm:p-10 flex flex-col justify-between flex-1 min-h-0"
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="space-y-4 sm:space-y-6 text-lg sm:text-2xl font-bold text-white flex-1 flex flex-col justify-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-zinc-800 rounded-xl px-4 sm:px-6 py-2 sm:py-3 flex justify-between items-center cursor-pointer border border-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <span className="font-anton uppercase tracking-widest">HOME</span>
                  <span className="font-anton text-xl sm:text-2xl">→</span>
                </motion.div>
                <motion.p 
                  whileHover={{ x: 10 }}
                  className="font-anton uppercase tracking-widest cursor-pointer hover:text-gray-300 transition-colors duration-300"
                  whileTap={{ scale: 0.98 }}
                >
                  ABOUT
                </motion.p>
                <motion.p 
                  whileHover={{ x: 10 }}
                  className="font-anton uppercase tracking-widest cursor-pointer hover:text-gray-300 transition-colors duration-300"
                  whileTap={{ scale: 0.98 }}
                >
                  WORK
                </motion.p>
                <motion.p 
                  whileHover={{ x: 10 }}
                  className="font-anton uppercase tracking-widest cursor-pointer hover:text-gray-300 transition-colors duration-300"
                  whileTap={{ scale: 0.98 }}
                >
                  BLOG
                </motion.p>
                <motion.p 
                  whileHover={{ x: 10 }}
                  className="font-anton uppercase tracking-widest cursor-pointer hover:text-gray-300 transition-colors duration-300"
                  whileTap={{ scale: 0.98 }}
                >
                  CONTACT
                </motion.p>
              </motion.div>

        
            </motion.div>

            {/* Bottom Section - Image (Original Right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full relative h-48 sm:h-64 lg:h-[480px] flex-shrink-0"
            >
              <img
                src="/Hero_Section_Nira.png"
                alt="Background"
                className="w-full h-full object-cover"
              />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 text-white text-sm sm:text-base"
              >
                <motion.p whileHover={{ x: 5 }}>Email on</motion.p>
                <motion.p 
                  whileHover={{ x: 5 }}
                  className="uppercase font-bold text-base sm:text-lg cursor-pointer text-spacing-wide hover:text-gray-300 transition-colors duration-300"
                >
                  designclubigdtuw@gmail.com
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
