"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ============================================================
   MENU LINKS
============================================================ */

const menu = [
  {
    name: "HOME",
    href: "/",
    number: "00",
  },
  {
    name: "ABOUT",
    href: "/about",
    number: "01",
  },
  // {
  //   name: "EVENTS",
  //   href: "/events",
  //   number: "02",
  // },
  {
    name: "GALLERY",
    href: "/gallery",
    number: "02",
  },
  {
    name: "TEAM",
    href: "/team",
    number: "03",
  },
  {
    name: "CONTACT",
    href: "/contact",
    number: "04",
  },
];


/* ============================================================
   SOCIAL LINKS
============================================================ */

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/designclubigdtuw/",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nirvana-design-club-of-igdtuw-6590203a8/",
  },
];

const WHATSAPP_LINK =
  "https://chat.whatsapp.com/ImoVWQe1jslG5O72ubUnq2";


/* ============================================================
   ANIMATION
============================================================ */

const container = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.08,
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

export default function MenuOverlay({ onClose }) {
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
        bg-[var(--color-black)]
        text-primary
      "
    >

      {/* ====================================================
          NOISE
      ==================================================== */}

      <div className="noise z-0 opacity-[0.06]" />


      {/* ====================================================
          DARK VIOLET ATMOSPHERE
      ==================================================== */}

      <div
        className="
          violet-glow-soft
          pointer-events-none
          absolute
          right-[8%]
          top-[18%]
          h-[350px]
          w-[350px]
          rounded-full
          opacity-60

          md:h-[500px]
          md:w-[500px]
          md:opacity-80
        "
      />


      {/* ====================================================
          MAIN LAYOUT
      ==================================================== */}

      <div
        className="
          relative
          z-10
          flex
          h-full
          w-full
          flex-col

          md:flex-row
        "
      >

        {/* ==================================================
            LEFT SIDE — MENU
        ================================================== */}

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="
            flex
            h-[60%]
            w-full
            flex-col

            md:h-full
            md:w-[70%]
            md:border-r
            md:border-[var(--color-border)]
          "
        >

          {menu.map((menuItem, index) => (
            <motion.div
              key={menuItem.name}
              variants={item}
              className="
                relative
                flex-1
                border-b
                border-[var(--color-border)]

                md:h-1/6
                md:flex-none
              "
              style={{
                marginLeft:
                  typeof window !== "undefined" &&
                  window.innerWidth >= 768
                    ? `${index * 40}px`
                    : "0px",
              }}
            >

              <Link
                href={menuItem.href}
                onClick={onClose}
                className="
                  group
                  relative
                  flex
                  h-full
                  w-full
                  items-center
                  overflow-hidden
                  px-5

                  sm:px-7

                  md:px-20
                "
              >

                {/* ==================================================
                    HOVER BACKGROUND
                ================================================== */}

                <div
                  className="
                    absolute
                    inset-0
                    origin-left
                    scale-x-0
                    bg-[var(--color-violet-soft)]
                    transition-transform
                    duration-700
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    group-hover:scale-x-100
                  "
                />


                {/* ==================================================
                    NUMBER
                ================================================== */}

                <span
                  className="
                    relative
                    z-10
                    mr-4
                    text-micro
                    text-subtle
                    transition-colors
                    duration-500
                    group-hover:text-[var(--color-violet-muted)]

                    sm:mr-5

                    md:mr-8
                  "
                >
                  {menuItem.number}
                </span>


                {/* ==================================================
                    MENU TEXT
                ================================================== */}

                <motion.h2
                  className="
                    relative
                    z-10
                    text-[clamp(1.8rem,8vw,3.5rem)]
                    leading-[0.85]
                    tracking-[-0.04em]
                    text-primary
                    transition-transform
                    duration-500
                    group-hover:translate-x-2

                    md:text-h2
                  "
                >
                  {menuItem.name}
                </motion.h2>


                {/* ==================================================
                    ARROW
                ================================================== */}

                <span
                  className="
                    relative
                    z-10
                    ml-auto
                    translate-x-2
                    text-xl
                    text-[var(--color-violet-muted)]
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:translate-x-0
                    group-hover:opacity-100

                    sm:text-2xl
                  "
                >
                  ↗
                </span>

              </Link>

            </motion.div>
          ))}

        </motion.div>


        {/* ==================================================
            RIGHT SIDE
        ================================================== */}

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
            h-[40%]
            w-full
            flex-col
            justify-between
            px-5
            py-5

            sm:px-7
            sm:py-6

            md:h-full
            md:w-[30%]
            md:px-10
            md:py-14
          "
        >

          {/* ==================================================
              TOP
          ================================================== */}

          <div>

            {/* LOGO */}

            <Link
              href="/"
              onClick={onClose}
            >
              <h1
                className="
                  mb-4
                  font-display
                  text-2xl
                  tracking-[0.18em]
                  text-primary
                  transition-colors
                  duration-300
                  hover:text-[var(--color-violet-muted)]

                  sm:mb-6
                  sm:text-3xl

                  md:mb-8
                  md:text-5xl
                "
              >
                NIRVANA
              </h1>
            </Link>


            {/* ==================================================
                IMAGE
            ================================================== */}

            <Link
              href="/"
              onClick={onClose}
            >
              <div
                className="
                  group
                  relative
                  mb-4
                  h-[120px]
                  w-full
                  overflow-hidden
                  border
                  border-[var(--color-border)]
                  bg-[var(--color-surface)]

                  sm:h-[150px]
                  sm:mb-5

                  md:mb-10
                  md:h-72
                "
              >

                <Image
                  src="/images/hero/navbar.png"
                  alt="Nirvana"
                  fill
                  sizes="(max-width: 767px) 100vw, 30vw"
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
                    bg-[var(--color-violet-deep)]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-[0.12]
                  "
                />

              </div>
            </Link>


            {/* ==================================================
                JOIN COMMUNITY
            ================================================== */}

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="
                group
                inline-flex
                items-center
                gap-3
                border
                border-[var(--color-border-strong)]
                bg-[var(--color-surface)]
                px-4
                py-3
                text-micro
                text-primary
                transition-all
                duration-500
                hover:border-[var(--color-violet-muted)]
                hover:bg-[var(--color-violet-soft)]

                sm:px-5
                sm:py-3.5

                md:gap-4
                md:px-6
                md:py-4
              "
            >

              Join Community

              <span
                className="
                  text-base
                  text-[var(--color-violet-muted)]
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                  group-hover:-translate-y-1

                  md:text-lg
                "
              >
                ↗
              </span>

            </a>

          </div>


          {/* ==================================================
              SOCIALS
          ================================================== */}

          <div
            className="
              mt-5
              md:mt-0
            "
          >

            <p
              className="
                text-micro
                mb-3
                text-subtle

                md:mb-5
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
                  onClick={onClose}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    border-b
                    border-[var(--color-border)]
                    py-2
                    text-body-sm
                    text-muted
                    transition-colors
                    duration-300
                    first:border-t
                    hover:text-primary

                    md:py-3
                  "
                >

                  <span>
                    {social.name}
                  </span>


                  <span
                    className="
                      translate-x-2
                      text-sm
                      text-[var(--color-violet-muted)]
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


            {/* ==================================================
                TAGLINE
            ================================================== */}

            <p
              className="
                text-micro
                mt-4
                text-subtle

                md:mt-8
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