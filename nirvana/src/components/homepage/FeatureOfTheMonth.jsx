"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

export default function ThirdSection() {
  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        bg-black
        p-6
        text-white
      "
    >
      {/* ==================================================
          MAIN FRAME
      ================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 80,
          scale: 0.97,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.1,
        }}
        transition={{
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
    relative
    flex
    h-[calc(100vh-48px)]
    w-full
    flex-col
    overflow-hidden
  "
      >
        {/* ================================================
      DARK PURPLE / SPACE BACKGROUND
  ================================================ */}

        <div
          className="
      pointer-events-none
      absolute
      inset-0
      z-0
      bg-[radial-gradient(circle_at_15%_20%,rgba(92,65,160,0.16),transparent_30%),radial-gradient(circle_at_85%_75%,rgba(38,50,110,0.16),transparent_35%),radial-gradient(circle_at_55%_45%,rgba(69,38,96,0.08),transparent_38%),linear-gradient(135deg,#050407_0%,#090711_48%,#05060b_100%)]
    "
        />

        {/* ================================================
      TINY STAR / NOISE DOTS
  ================================================ */}

        <div
          className="
      pointer-events-none
      absolute
      inset-0
      z-0
      opacity-[0.16]
      [background-image:radial-gradient(rgba(190,175,255,0.65)_0.6px,transparent_0.6px)]
      [background-size:24px_24px]
    "
        />

        {/* ================================================
      SECOND RANDOM-LOOKING DOT LAYER
  ================================================ */}

        <div
          className="
      pointer-events-none
      absolute
      inset-0
      z-0
      opacity-[0.08]
      [background-image:radial-gradient(rgba(120,145,255,0.8)_0.5px,transparent_0.5px)]
      [background-position:11px_8px]
      [background-size:37px_37px]
    "
        />

        {/* ================================================
      VERY SUBTLE TOP GLOW
  ================================================ */}

        <div
          className="
      pointer-events-none
      absolute
      left-1/2
      top-[-20%]
      z-0
      h-[45%]
      w-[70%]
      -translate-x-1/2
      rounded-full
      bg-violet-800/[0.08]
      blur-[100px]
    "
        />



        {/* ==================================================
            LARGE HEADING
        ================================================== */}

        <div
          className="
            flex
            h-[19vh]
            shrink-0
            items-center
            justify-center
            border-b
            border-white/20
          "
        >
          <motion.h2
            initial={{
              opacity: 0,
              y: 70,
              filter: "blur(15px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              whitespace-nowrap
              text-center
              text-[clamp(4rem,7vw,8rem)]
              leading-none
              tracking-[-0.05em]
            "
            style={{
              fontFamily: '"Instrument Serif", serif',
            }}
          >
            FEATURE OF THE MONTH
          </motion.h2>
        </div>


        {/* ==================================================
            MAIN CONTENT
        ================================================== */}

        <div
          className="
            grid
            min-h-0
            flex-1
            grid-cols-[0.7fr_2.2fr_0.95fr]
          "
        >

          {/* ==================================================
              LEFT
          ================================================== */}

          <div
            className="
              relative
              border-r
              border-white/20
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                x: -60,
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                absolute
                bottom-5
                left-5
                right-5
              "
            >
              {/* SMALL NUMBER */}

              <p
                className="
                  mb-5
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-white/40
                "
              >
                02 / 2026
              </p>

              {/* DATE */}

              <p
                className="
                  text-[clamp(2.5rem,3.6vw,3rem)]
                  leading-[0.88]
                  tracking-[-0.04em]
                "
                style={{
                  fontFamily: '"Instrument Serif", serif',
                }}
              >
                NIRVANA
                <br />
                IGDTUW
                <br />


              </p>
            </motion.div>
          </div>


          {/* ==================================================
              CENTER IMAGE
          ================================================== */}

          <div
            className="
              relative
              min-h-0
              overflow-hidden
              border-r
              border-white/20
              p-5
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.35,
                rotate: -5,
                filter: "blur(25px)",
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                type: "spring",
                stiffness: 65,
                damping: 12,
                mass: 1,
                delay: 0.15,
              }}
              whileHover={{
                scale: 0.985,
              }}
              className="
                relative
                h-full
                w-full
                overflow-hidden
                bg-neutral-900
              "
            >
              <motion.img
                src="/images/hero/hero-left.png"
                alt="Featured Nirvana project"
                initial={{
                  scale: 1.3,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 1.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />

              {/* IMAGE OVERLAY */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-black/5
                "
              />


              {/* IMAGE NUMBER */}

              <div
                className="
                  absolute
                  left-4
                  top-4
                  z-10
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-white/70
                "
              >
                Featured / 001
              </div>


              {/* IMAGE ARROW */}


            </motion.div>
          </div>


          {/* ==================================================
    RIGHT
================================================== */}

          <div
            className="
    flex
    h-full
    min-h-0
    flex-col
    overflow-hidden
  "
          >
            {/* ================================================
      RIGHT TOP — CREATOR
  ================================================ */}

            <motion.div
              initial={{
                opacity: 0,
                x: 60,
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
      shrink-0
      border-b
      border-violet-200/10
      p-5
    "
            >
              <p
                className="
        mb-3
        text-[10px]
        uppercase
        tracking-[0.25em]
        text-violet-100/40
      "
              >
                Featured Designer
              </p>

              <h3
                className="
        text-[clamp(1.8rem,2.3vw,2.8rem)]
        leading-[0.9]
        tracking-[-0.03em]
      "
                style={{
                  fontFamily: '"Instrument Serif", serif',
                }}
              >
                ANUSHKA
                <br />
                KOTNALA
              </h3>

              <p
                className="
        mt-3
        text-xs
        uppercase
        tracking-[0.12em]
        text-white/40
      "
              >
                CSE_AI / 3rd Year
              </p>
            </motion.div>


            {/* ================================================
      DESCRIPTION — THIS TAKES REMAINING SPACE
  ================================================ */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
              className="
      flex
      min-h-0
      flex-1
      items-end
      p-5
    "
            >
              <p
                className="
        max-w-[260px]
        text-xs
        leading-relaxed
        text-white/40
      "
              >
                Celebrating standout work from the
                creative community at Nirvana.
              </p>
            </motion.div>


            {/* ================================================
      BUTTON AREA

      shrink-0 is IMPORTANT
  ================================================ */}

            <div className="relative z-20 shrink-0">

              {/* ================================================
        SEE ALL FEATURES
    ================================================ */}

              <a
                href="#"
                className="
        group
        flex
        w-full
        items-center
        justify-between
        border-t
        border-violet-200/10
        bg-[#08060d]
        px-5
        py-3.5
        transition-all
        duration-500
        hover:bg-[#110c1d]
      "
              >
                <span
                  className="
          text-[17px]
          text-white/80
          transition-colors
          duration-300
          group-hover:text-white
        "
                  style={{
                    fontFamily: '"Instrument Serif", serif',
                  }}
                >
                  See all features
                </span>

                <ArrowUpRight
                  size={19}
                  strokeWidth={1.3}
                  className="
          text-violet-200/70
          transition-transform
          duration-500
          group-hover:rotate-45
          group-hover:text-white
        "
                />
              </a>


              {/* ================================================
        REGISTER NOW
    ================================================ */}

              <a
                href="#"
                className="
        group
        relative
        flex
        w-full
        items-center
        justify-between
        overflow-hidden
        border-t
        border-violet-200/10
        bg-[#0e0917]
        px-5
        py-4
        text-white
        transition-all
        duration-500
        hover:bg-[#171023]
      "
              >
                {/* PURPLE GLOW */}

                <div
                  className="
          pointer-events-none
          absolute
          -right-10
          top-1/2
          h-24
          w-24
          -translate-y-1/2
          rounded-full
          bg-violet-700/20
          blur-[35px]
          transition-all
          duration-700
          group-hover:bg-violet-600/30
        "
                />

                {/* DOT TEXTURE */}

                <div
                  className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.1]
          [background-image:radial-gradient(rgba(200,190,255,0.8)_0.5px,transparent_0.5px)]
          [background-size:15px_15px]
      "
                />

                <div className="relative z-10">
                  <span
                    className="
            block
            text-[9px]
            uppercase
            tracking-[0.22em]
            text-violet-200/40
          "
                  >
                    Applications open
                  </span>

                  <span
                    className="
            mt-1
            block
            text-[clamp(1.4rem,1.8vw,2rem)]
            leading-none
          "
                    style={{
                      fontFamily: '"Instrument Serif", serif',
                    }}
                  >
                    REGISTER NOW
                  </span>
                </div>


                {/* ARROW */}

                <div
                  className="
          relative
          z-10
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-violet-200/15
          bg-violet-200/[0.05]
          transition-all
          duration-500
          group-hover:border-violet-200/30
          group-hover:bg-violet-200/10
        "
                >
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.3}
                    className="
            transition-transform
            duration-500
            group-hover:translate-x-[2px]
            group-hover:-translate-y-[2px]
          "
                  />
                </div>
              </a>

            </div>
          </div>
        </div>


      </motion.div>
    </section>
  );
}