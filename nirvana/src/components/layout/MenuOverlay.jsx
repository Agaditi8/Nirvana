"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ============================================================
   MENU LINKS
============================================================ */

const menu = [
  {
    name: "ABOUT",
    href: "/about",
    number: "01",
  },
  {
    name: "EVENTS",
    href: "/events",
    number: "02",
  },
  {
    name: "GALLERY",
    href: "/gallery",
    number: "03",
  },
  {
    name: "TEAM",
    href: "/team",
    number: "04",
  },
  {
    name: "CONTACT",
    href: "/contact",
    number: "05",
  },
];

/* ============================================================
   NIRVANA LINKS

   Add the real Nirvana links here.
============================================================ */

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
  },
  {
    name: "LinkedIn",
    href: "#",
  },
  {
    name: "Behance",
    href: "#",
  },
  {
    name: "GitHub",
    href: "#",
  },
];

const WHATSAPP_LINK =
  "https://chat.whatsapp.com/ImoVWQe1jslG5O72ubUnq2";

/* ============================================================
   ANIMATION VARIANTS
============================================================ */

const container = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
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

/* ============================================================
   MENU OVERLAY
============================================================ */

export default function MenuOverlay() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        fixed
        inset-0
        z-40
        overflow-hidden
        bg-black
      "
    >
      {/* SUBTLE PURPLE GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          right-[10%]
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-violet-900/[0.12]
          blur-[160px]
        "
      />

      <div className="relative z-10 flex h-screen">

        {/* ====================================================
            LEFT SIDE
        ==================================================== */}

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="
            flex
            w-[70%]
            flex-col
            border-r
            border-white/10
          "
        >
          {menu.map((menuItem, index) => (
            <motion.div
              key={menuItem.name}
              variants={item}
              className="
                relative
                h-1/5
                border-b
                border-white/10
              "
              style={{
                marginLeft: `${index * 40}px`,
              }}
            >
              <Link
                href={menuItem.href}
                className="
                  group
                  relative
                  flex
                  h-full
                  w-full
                  items-center
                  overflow-hidden
                  px-20
                "
              >
                {/* HOVER BACKGROUND */}

                <div
                  className="
                    absolute
                    inset-0
                    origin-left
                    scale-x-0
                    bg-violet-500/[0.08]
                    transition-transform
                    duration-700
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    group-hover:scale-x-100
                  "
                />

                {/* NUMBER */}

                <span
                  className="
                    relative
                    z-10
                    mr-8
                    text-[9px]
                    tracking-[0.25em]
                    text-white/20
                    transition-colors
                    duration-500
                    group-hover:text-violet-300
                  "
                >
                  {menuItem.number}
                </span>

                {/* TEXT */}

                <motion.h2
                  className="
                    relative
                    z-10
                    text-[clamp(2rem,3vw,3.5rem)]
                    leading-none
                    tracking-[-0.02em]
                    text-white
                  "
                  style={{
                    fontFamily:
                      '"Instrument Serif", serif',
                  }}
                >
                  {menuItem.name}
                </motion.h2>

                {/* ARROW */}

                <span
                  className="
                    relative
                    z-10
                    ml-auto
                    translate-x-8
                    text-2xl
                    text-violet-200
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                >
                  ↗
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* ====================================================
            RIGHT SIDE
        ==================================================== */}

        <motion.div
          initial={{
            x: 80,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            w-[30%]
            flex-col
            justify-between
            px-10
            py-14
          "
        >
          {/* TOP */}

          <div>
            {/* LOGO / HOME LINK */}

            <Link href="/">
              <h1
                className="
                  mb-8
                  text-5xl
                  font-bold
                  tracking-[0.25em]
                  text-white
                  transition-colors
                  duration-300
                  hover:text-violet-200
                "
              >
                NIRVANA
              </h1>
            </Link>

            {/* IMAGE */}

            <Link href="/">
              <div
                className="
                  group
                  relative
                  mb-10
                  h-72
                  w-full
                  overflow-hidden
                  rounded-md
                "
              >
                <Image
                  src="/images/hero/navbar.png"
                  alt="Nirvana"
                  fill
                  sizes="30vw"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.03]
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-violet-950/0
                    transition-colors
                    duration-500
                    group-hover:bg-violet-950/10
                  "
                />
              </div>
            </Link>

            {/* JOIN COMMUNITY */}

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                items-center
                gap-4
                bg-white
                px-7
                py-4
                text-[11px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-black
                transition-all
                duration-500
                hover:bg-violet-200
              "
            >
              Join Community

              <span
                className="
                  text-lg
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              >
                ↗
              </span>
            </a>
          </div>

          {/* ==================================================
              SOCIALS
          ================================================== */}

          <div>
            <p
              className="
                mb-5
                text-[9px]
                uppercase
                tracking-[0.35em]
                text-white/25
              "
            >
              Connect
            </p>

            <div className="flex flex-col">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    py-2
                    text-zinc-400
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  <span>{social.name}</span>

                  <span
                    className="
                      translate-x-2
                      text-sm
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>

            <p
              className="
                mt-8
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-white/15
              "
            >
              Create / Explore / Evolve
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}