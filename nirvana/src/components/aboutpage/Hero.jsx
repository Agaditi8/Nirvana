"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="section min-h-screen w-full overflow-hidden">
      {/* ============================================================
          MAIN FRAME
      ============================================================ */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.98,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          min-h-[100svh]
          w-full
          overflow-hidden
          bg-[var(--color-surface)]
        "
      >
        {/* ============================================================
            BACKGROUND NOISE
        ============================================================ */}

        <div className="noise z-0" />


        {/* ============================================================
            DARK VIOLET AMBIENT GLOW
        ============================================================ */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.16, 0.22, 0.16],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            violet-glow
            pointer-events-none
            absolute
            right-[5%]
            top-[10%]
            z-0
            h-[300px]
            w-[300px]
            rounded-full

            sm:h-[400px]
            sm:w-[400px]

            md:h-[500px]
            md:w-[500px]
          "
        />


        {/* ============================================================
            MAIN GRID
        ============================================================ */}

        <div
          className="
            relative
            z-10
            grid
            min-h-[100svh]
            w-full
            grid-cols-1

            md:grid-cols-[1fr_1fr]
          "
        >

          {/* ==========================================================
              LEFT — IDENTITY
          ========================================================== */}

          <div
            className="
              relative
              flex
              min-h-[56svh]
              flex-col
              justify-between
              border-b
              border-[var(--color-border)]
              p-5

              sm:min-h-[58svh]
              sm:p-7

              md:min-h-0
              md:border-b-0
              md:border-r
              md:p-12

              lg:p-16
            "
          >

            {/* ========================================================
                TOP LABEL
            ======================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.25,
                duration: 0.8,
              }}
              className="flex items-center"
            >
              <span
                className="
                  rounded-full
                  border
                  border-[var(--color-border-strong)]
                  px-3
                  py-1.5
                  text-micro
                  text-subtle

                  sm:px-4
                  sm:py-2
                "
              >
                ABOUT US
              </span>
            </motion.div>


            {/* ========================================================
                MAIN CONTENT
            ======================================================== */}

            <div className="relative">

              {/* Small eyebrow */}

              <motion.p
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.8,
                }}
                className="
                  mb-3
                  text-micro
                  text-[var(--color-violet-muted)]

                  sm:mb-5
                "
              >
                The Design Society of IGDTUW
              </motion.p>


              {/* ======================================================
                  NIRVANA
              ====================================================== */}

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 60,
                  filter: "blur(15px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  delay: 0.3,
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  whitespace-nowrap
                  text-[clamp(3.7rem,15vw,6.5rem)]
                  leading-[0.78]
                  tracking-[-0.06em]
                  text-primary

                  sm:text-[clamp(5rem,13vw,8rem)]

                  md:text-display-xl
                "
              >
                NIRVANA
              </motion.h1>


              {/* ======================================================
                  DIVIDER
              ====================================================== */}

              <motion.div
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                animate={{
                  width: 48,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.8,
                  duration: 0.7,
                }}
                className="
                  mt-6
                  h-px
                  bg-[var(--color-violet-muted)]

                  sm:mt-8

                  md:mt-10
                "
              />


              {/* ======================================================
                  DESCRIPTION
              ====================================================== */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.9,
                  duration: 0.9,
                }}
                className="
                  text-body
                  mt-5
                  max-w-[460px]
                  leading-6
                  text-muted

                  sm:mt-7
                  sm:text-body-lg
                  sm:leading-7

                  md:mt-8
                  md:max-w-[540px]
                "
              >
                A space where ideas find form, curiosity becomes craft,
                and creativity becomes a way of thinking.
              </motion.p>

            </div>


            {/* ========================================================
                BOTTOM TEXT
            ======================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.1,
                duration: 0.8,
              }}
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-x-3
                gap-y-2
                text-micro
                text-subtle

                sm:mt-10
                sm:gap-x-5

                md:mt-0
              "
            >
              <span>DESIGN</span>

              <span className="text-[var(--color-violet-muted)]">
                •
              </span>

              <span>CREATE</span>

              <span className="text-[var(--color-violet-muted)]">
                •
              </span>

              <span>EXPERIMENT</span>

              <span className="text-[var(--color-violet-muted)]">
                •
              </span>

              <span>COLLABORATE</span>
            </motion.div>

          </div>


          {/* ==========================================================
              RIGHT — VISUAL
          ========================================================== */}

          <div
            className="
              relative
              min-h-[44svh]
              overflow-hidden
              bg-[var(--color-surface-violet)]

              sm:min-h-[42svh]

              md:min-h-0
            "
          >

            {/* ========================================================
                IMAGE
            ======================================================== */}

            <motion.div
              initial={{
                scale: 1.15,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1.5,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute inset-0"
            >
              <img
                src="/logos/logo_transparent.png"
                alt="Nirvana creative visual"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />
            </motion.div>


            {/* ========================================================
                DARK OVERLAY
            ======================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-black/35
              "
            />


            {/* ========================================================
                DARK VIOLET ATMOSPHERE
            ======================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-[radial-gradient(circle_at_65%_45%,rgba(56,32,68,0.28),transparent_42%),linear-gradient(90deg,rgba(5,4,6,0.5),transparent_45%,rgba(26,16,32,0.2))]
              "
            />


            {/* ========================================================
                VERTICAL GLASS LINES

                Fewer / softer on mobile
            ======================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-[18%]
                w-px
                bg-[var(--color-border-subtle)]

                md:left-[12%]
                md:bg-[var(--color-border)]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-[35%]
                w-px
                bg-[var(--color-border-subtle)]

                md:left-[22%]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-[52%]
                w-px
                bg-[var(--color-border-subtle)]

                md:left-[32%]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-y-0
                right-[18%]
                w-px
                bg-[var(--color-border-subtle)]

                md:right-[20%]
              "
            />


            {/* ========================================================
                FLOATING TITLE
            ======================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1,
                duration: 0.8,
              }}
              className="
                absolute
                bottom-6
                left-5
                z-10

                sm:bottom-8
                sm:left-7

                md:bottom-[20%]
                md:left-10
              "
            >
              <p
                className="
                  text-[1.6rem]
                  leading-[0.9]
                  tracking-[-0.04em]
                  text-primary

                  sm:text-[2rem]

                  md:text-h2
                "
              >
                Ideas into form.
              </p>

              <p className="text-micro mt-2 text-subtle">
                A visual culture of making
              </p>
            </motion.div>


            {/* ========================================================
                NOISE OVERLAY
            ======================================================== */}

            <div className="noise mix-blend-screen opacity-[0.08]" />

          </div>

        </div>

      </motion.div>
    </section>
  );
}