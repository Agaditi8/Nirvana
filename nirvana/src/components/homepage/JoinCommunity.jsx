"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function JoinCommunity() {
  return (
    <section
      className="
        relative
        w-full
        min-h-screen
        overflow-hidden
        bg-black
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND GLOWS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[10%]
          top-[15%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-purple-900/20
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-100px]
          right-[5%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-900/20
          blur-[150px]
        "
      />

      {/* =====================================================
          GALAXY DOTS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.16]
          [background-image:radial-gradient(rgba(196,181,253,0.8)_0.7px,transparent_0.7px)]
          [background-size:28px_28px]
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1600px]
          flex-col
          px-8
          py-16
          md:px-12
        "
      >
        {/* =================================================
            SMALL TOP LABEL
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="flex items-center gap-4"
        >
        </motion.div>

        {/* =================================================
            MAIN TYPOGRAPHY
        ================================================= */}

        <div
          className="
            flex
            flex-1
            flex-col
            justify-center
            py-20
          "
        >
          {/* JOIN */}

          <RevealText delay={0}>
            <h2
              className="
                text-[clamp(6rem,15vw,15rem)]
                leading-[0.72]
                tracking-[-0.06em]
                text-white
              "
              style={{
                fontFamily: '"Instrument Serif", serif',
              }}
            >
              JOIN
            </h2>
          </RevealText>

          {/* THE */}

          <div
            className="
              flex
              w-full
              items-center
              gap-8
              py-5
            "
          >
            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.2,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                hidden
                h-px
                flex-1
                origin-left
                bg-gradient-to-r
                from-violet-400/70
                via-violet-300/30
                to-transparent
                md:block
              "
            />

            <RevealText delay={0.15}>
              <h2
                className="
                  text-[clamp(5rem,10vw,10rem)]
                  leading-[0.72]
                  tracking-[-0.05em]
                  text-violet-200/50
                "
                style={{
                  fontFamily: '"Instrument Serif", serif',
                }}
              >
                THE
              </h2>
            </RevealText>
          </div>

          {/* COMMUNITY */}

          <RevealText delay={0.3}>
            <h2
              className="
                text-right
                text-[clamp(5rem,13vw,13rem)]
                leading-[0.72]
                tracking-[-0.06em]
                text-white
              "
              style={{
                fontFamily: '"Instrument Serif", serif',
              }}
            >
              COMMUNITY
            </h2>
          </RevealText>

          {/* DESCRIPTION */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
            className="
              mt-12
              flex
              justify-end
            "
          >
            <p
              className="
                max-w-[420px]
                text-lg
                leading-relaxed
                text-white/45
              "
            >
              Designers, artists, storytellers, thinkers and
              experimenters — there&apos;s a place for you here.
            </p>
          </motion.div>
        </div>

        {/* =================================================
            CTA + MESSAGE
        ================================================= */}

        <div
          className="
            flex
            flex-col
            gap-10
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          {/* JOIN BUTTON */}

          <motion.a
            href="#"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="
              group
              relative
              flex
              h-[120px]
              w-full
              max-w-[440px]
              items-center
              justify-between
              overflow-hidden
              rounded-full
              bg-white
              px-10
              text-black
            "
          >
            {/* PURPLE HOVER */}

            <div
              className="
                absolute
                right-8
                h-20
                w-20
                rounded-full
                bg-violet-500
                transition-all
                duration-700
                ease-out
                group-hover:scale-[10]
              "
            />

            <span
              className="
                relative
                z-10
                text-[clamp(2rem,3vw,3rem)]
                transition-colors
                duration-500
                group-hover:text-white
              "
              style={{
                fontFamily: '"Instrument Serif", serif',
              }}
            >
              Join Nirvana
            </span>

            <div
              className="
                relative
                z-10
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-black
                text-white
                transition-all
                duration-500
                group-hover:rotate-45
                group-hover:bg-white
                group-hover:text-black
              "
            >
              <ArrowUpRight
                size={21}
                strokeWidth={1.3}
              />
            </div>
          </motion.a>

          {/* RIGHT COPY */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.55,
            }}
            className="md:text-right"
          >
            <p
              className="
                text-[clamp(2rem,3vw,3.5rem)]
                leading-[0.95]
                text-white/75
              "
              style={{
                fontFamily: '"Instrument Serif", serif',
              }}
            >
              Make things.
              <br />
              Break things.
              <br />
              Make them better.
            </p>
          </motion.div>
        </div>

        {/* =================================================
            BACKED BY ACM
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.7,
          }}
          className="
            mt-20
            flex
            flex-col
            gap-6
            pb-4
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div>
            <p
              className="
                mb-3
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/30
              "
            >
              Backed by
            </p>

            <h3
              className="
                text-[clamp(2rem,4vw,4rem)]
                leading-none
                text-white/80
              "
              style={{
                fontFamily: '"Instrument Serif", serif',
              }}
            >
              ACM IGDTUW Chapter
            </h3>
          </div>

          <div className="flex items-center gap-4">
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-white/30
              "
            >
              Create / Explore / Evolve
            </p>

            <div
              className="
                h-[6px]
                w-[6px]
                rounded-full
                bg-violet-300
                shadow-[0_0_10px_rgba(196,181,253,0.7)]
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   REVEAL COMPONENT
============================================================ */

function RevealText({ children, delay = 0 }) {
  return (
    <div className="overflow-hidden py-4">
      <motion.div
        initial={{
          opacity: 0,
          y: 120,
          rotate: 2,
          filter: "blur(15px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          rotate: 0,
          filter: "blur(0px)",
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.1,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}