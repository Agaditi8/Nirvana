"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const menu = ["ABOUT", "EVENTS", "GALLERY", "TEAM", "CONTACT"];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    x: 500,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 18,
    },
  },
};

export default function MenuOverlay() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed inset-0 z-40 bg-black"
    >
      <div className="flex h-screen">
        {/* LEFT SIDE */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex w-[70%] flex-col border-r border-white/10"
        >
          {menu.map((itemText, index) => (
            <motion.div
              key={itemText}
              variants={item}
              whileHover={{
                scale: 1.015,
                backgroundColor: "rgba(124,92,255,.08)",
              }}
              transition={{
                type: "tween",
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex h-1/5 cursor-pointer items-center border-b border-white/10 px-20"
              style={{
                marginLeft: `${index * 40}px`,
              }}
            >
              <h1 className="text-3xl font-bold tracking-wider text-white">
                {itemText}
              </h1>
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex w-[30%] flex-col justify-between px-10 py-14"
        >
          {/* Top */}
          <div>
            <h1 className="mb-8 text-5xl font-bold tracking-[0.25em] text-white">
              NIRVANA
            </h1>

            <div className="relative mb-10 h-72 w-full overflow-hidden rounded-md border border-white/10">
              <Image
                src="/images/hero/navbar.png"
                alt="Nirvana"
                fill
                className="object-cover"
              />
            </div>

            <button
              className="
    group
    inline-flex
    items-center
    gap-3
    border
    border-white/15
    bg-white/[0.02]
    px-7
    py-3
    text-sm
    font-medium
    uppercase
    tracking-[0.25em]
    text-white
    transition-all
    duration-500
    hover:border-[#7C5CFF]/50
    hover:bg-[#7C5CFF]/5
  "
            >
              Join Us
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          {/* Bottom */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              Connect
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-zinc-300 transition-colors hover:text-white"
              >
                Instagram
              </a>

              <a
                href="#"
                className="text-zinc-300 transition-colors hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="text-zinc-300 transition-colors hover:text-white"
              >
                Behance
              </a>

              <a
                href="#"
                className="text-zinc-300 transition-colors hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
