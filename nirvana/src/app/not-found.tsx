"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

export default function NotFound() {
  return (
    <main
      className="
        relative
        flex
        min-h-screen
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[var(--color-black)]
        px-5
        py-16
        text-primary
        sm:px-8
      "
    >
      {/* =====================================================
          NOISE
      ===================================================== */}

      <div className="noise z-0 opacity-[0.06]" />


      {/* =====================================================
          VIOLET ATMOSPHERE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[35%]
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(61,45,82,0.22),transparent_68%)]
          blur-[90px]

          sm:h-[450px]
          sm:w-[450px]

          lg:h-[600px]
          lg:w-[600px]
        "
      />


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          flex
          w-full
          max-w-[900px]
          flex-col
          items-center
          text-center
        "
      >

        {/* =================================================
            NIRA
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: -40,
            scale: 0.9,
            rotate: -4,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            ease,
          }}
          className="
            relative
            mb-7
            h-[150px]
            w-[150px]

            sm:mb-9
            sm:h-[190px]
            sm:w-[190px]

            md:h-[220px]
            md:w-[220px]
          "
        >
          {/* Floating animation */}

          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 1.5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-full w-full"
          >
            <img
              src="/images/icons/Footer-1.png"
              alt="Nira"
              className="
                h-full
                w-full
                object-contain
              "
            />
          </motion.div>
        </motion.div>


        {/* =================================================
            SMALL LABEL
        ================================================= */}

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
            duration: 0.7,
            delay: 0.15,
            ease,
          }}
          className="
            flex
            items-center
            gap-3
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              bg-[var(--color-violet-muted)]
            "
          />

          <span className="text-micro text-subtle">
            404 — NIRA IS CONFUSED
          </span>

          <span
            className="
              h-1.5
              w-1.5
              bg-[var(--color-violet-muted)]
            "
          />
        </motion.div>


        {/* =================================================
            MAIN HEADING
        ================================================= */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 60,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease,
          }}
          className="
            mt-7
            max-w-[850px]
            text-[clamp(3.5rem,10vw,8rem)]
            leading-[0.75]
            tracking-[-0.065em]
            text-primary

            sm:mt-9
          "
        >
          UH OH.
          <br />

          <span className="text-subtle">
            WHERE DID IT GO?
          </span>
        </motion.h1>


        {/* =================================================
            FUNNY COPY
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.45,
            ease,
          }}
          className="
            mt-7
            max-w-[430px]

            sm:mt-9
          "
        >

          <p
            className="
              text-body-lg
              leading-6
              text-muted

              sm:leading-7
            "
          >
            Nira went looking for this page.
            <br />

            She found absolutely nothing.
          </p>

          <p
            className="
              text-body-sm
              mt-4
              text-subtle
            "
          >
            Apparently, this page decided to
            <span className="text-primary">
              {" "}touch grass.
            </span>
          </p>

        </motion.div>


        {/* =================================================
            CTA
        ================================================= */}

        <motion.a
          href="/"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
          transition={{
            duration: 0.7,
            delay: 0.6,
            ease,
          }}
          className="
            group
            mt-9
            flex
            items-center
            gap-4
            border
            border-[var(--color-border)]
            bg-[var(--color-surface)]
            px-6
            py-3.5
            text-micro
            text-primary
            transition-all
            duration-500
            hover:border-[var(--color-violet-muted)]
            hover:bg-[var(--color-violet-soft)]

            sm:mt-10
            sm:px-7
            sm:py-4
          "
        >
          <span>
            TAKE ME HOME
          </span>

          <ArrowUpRight
            size={16}
            strokeWidth={1.3}
            className="
              text-[var(--color-violet-muted)]
              transition-transform
              duration-500
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </motion.a>


        {/* =================================================
            BOTTOM MICRO COPY
        ================================================= */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.9,
          }}
          className="
            mt-12
            text-micro
            text-subtle

            sm:mt-16
          "
        >
          NO PAGE WAS HARMED IN THE MAKING OF THIS ERROR.
        </motion.p>

      </div>


      {/* =====================================================
          DECORATIVE CORNERS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-5
          top-5
          h-7
          w-7
          border-l
          border-t
          border-[var(--color-border)]

          sm:left-8
          sm:top-8
          sm:h-9
          sm:w-9
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-5
          right-5
          h-7
          w-7
          border-b
          border-r
          border-[var(--color-border)]

          sm:bottom-8
          sm:right-8
          sm:h-9
          sm:w-9
        "
      />

    </main>
  );
}