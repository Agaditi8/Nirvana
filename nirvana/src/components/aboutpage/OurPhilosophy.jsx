"use client";

import { motion } from "framer-motion";

const philosophyCards = [
  {
    id: 1,
    title: "CURIOSITY",
    description:
      "Question the obvious. Explore the unfamiliar. Every good idea begins with curiosity.",
    image: "/images/aboutpage/about-1.jpg",
  },
  {
    id: 2,
    title: "EXPERIMENTATION",
    description:
      "Try things that might fail. We believe the most interesting work often starts with experimentation.",
    image: "/images/aboutpage/about-2.jpg",
  },
  {
    id: 3,
    title: "CRAFT",
    description:
      "Details matter. From a single pixel to an entire visual system, we care about how things are made.",
    image: "/images/aboutpage/about-3.jpg",
  },
  {
    id: 4,
    title: "EXPRESSION",
    description:
      "There is no single way to create. We encourage ideas to take their own visual language.",
    image: "/images/aboutpage/about-4.jpg",
  },
  {
    id: 5,
    title: "COMMUNITY",
    description:
      "The best ideas rarely happen alone. We learn, create and grow together.",
    image: "/images/aboutpage/about-5.jpg",
  },
];

const ease = [0.16, 1, 0.3, 1];

export default function OurPhilosophy() {
  return (
    <section
      className="
        section
        relative
        w-full
        overflow-hidden
        bg-[var(--color-black)]
        text-primary
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="noise z-0 opacity-[0.06]" />

      <div
        className="
          violet-glow-soft
          pointer-events-none
          absolute
          left-[5%]
          top-[10%]
          h-[350px]
          w-[350px]
          rounded-full
          opacity-60

          sm:h-[450px]
          sm:w-[450px]

          lg:left-[15%]
          lg:h-[500px]
          lg:w-[500px]
        "
      />


      {/* =====================================================
          INTRO
      ===================================================== */}

      <div className="container relative z-10">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(8px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
        >

          {/* Label */}

          <span className="text-micro text-subtle">
            02 — Our Philosophy
          </span>


          {/* Heading */}

          <h2
            className="
              mt-6
              max-w-[1100px]
              text-[clamp(3.2rem,11vw,6rem)]
              leading-[0.78]
              tracking-[-0.055em]
              text-primary

              sm:mt-8
              sm:text-display-lg
            "
          >
            WE BELIEVE
            <br />

            <span className="text-subtle">
              IN MAKING.
            </span>
          </h2>


          {/* Description */}

          <p
            className="
              text-body
              mt-7
              max-w-[460px]
              leading-6
              text-muted

              sm:mt-10
              sm:text-body-lg
              sm:leading-7
            "
          >
            Design is more than making things look good.
            It is about curiosity, experimentation,
            expression and the courage to make something new.
          </p>

        </motion.div>

      </div>


      {/* =====================================================
          CARDS
      ===================================================== */}

      <div
        className="
          container
          relative
          z-10
          mt-14

          sm:mt-20

          lg:mt-24
        "
      >

        <div
          className="
            grid
            grid-cols-1
            gap-4

            sm:grid-cols-2

            lg:grid-cols-3
          "
        >

          {philosophyCards.map((card, index) => (
            <PhilosophyCard
              key={card.id}
              card={card}
              index={index}
            />
          ))}

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   PHILOSOPHY CARD
========================================================= */

function PhilosophyCard({ card, index }) {
  return (
    <motion.article

      /* =====================================================
         MOBILE + DESKTOP ENTRANCE
      ===================================================== */

      initial={{
        opacity: 0,
        y: 60,
        rotateX: 7,
        scale: 0.96,
        filter: "blur(8px)",
      }}

      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        filter: "blur(0px)",
      }}

      viewport={{
        once: true,
        amount: 0.2,
      }}

      transition={{
        duration: 0.85,
        delay: index * 0.07,
        ease,
      }}


      /* =====================================================
         DESKTOP HOVER

         Hover remains useful on desktop.
         Touch devices simply get the entrance animation.
      ===================================================== */

      whileHover={{
        y: -10,
        scale: 1.015,

        transition: {
          duration: 0.5,
          ease,
        },
      }}

      style={{
        transformPerspective: 1000,
      }}

      className="
        group
        relative
        h-[330px]
        w-full
        cursor-pointer
        overflow-hidden
        border
        border-[var(--color-border)]
        bg-[var(--color-surface)]

        sm:h-[360px]

        lg:h-[400px]
      "
    >

      {/* =================================================
          IMAGE
      ================================================= */}

      <motion.img
        src={card.image}
        alt={card.title}
        initial={{
          scale: 1.08,
        }}
        whileInView={{
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.1,
          delay: index * 0.07,
          ease,
        }}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          opacity-65
          grayscale-[20%]
          transition-all
          duration-700
          ease-out

          group-hover:scale-105
          group-hover:grayscale-0
          group-hover:opacity-90
        "
      />


      {/* =================================================
          DARK OVERLAY
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-[rgba(5,4,6,0.96)]
          via-[rgba(5,4,6,0.42)]
          to-[rgba(5,4,6,0.05)]
        "
      />


      {/* =================================================
          VIOLET ATMOSPHERE
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_25%,rgba(56,32,68,0.22),transparent_58%)]
          opacity-0
          transition-opacity
          duration-700

          group-hover:opacity-100
        "
      />


      {/* =================================================
          MOBILE ACCENT
          
          Gives touch users a subtle visual response
          without requiring hover.
      ================================================= */}

      <motion.div
        initial={{
          width: 24,
          opacity: 0.35,
        }}
        whileInView={{
          width: 38,
          opacity: 0.65,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: 0.25 + index * 0.07,
          ease,
        }}
        className="
          absolute
          bottom-[105px]
          left-5
          z-10
          h-px
          bg-[var(--color-violet-muted)]

          sm:left-6
          lg:left-8
        "
      />


      {/* =================================================
          CONTENT
      ================================================= */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-10
          p-5

          sm:p-6

          lg:p-8
        "
      >

        {/* Title */}

        <h3
          className="
            text-[clamp(1.9rem,7vw,3rem)]
            leading-[0.85]
            tracking-[-0.04em]
            text-primary

            sm:text-h3
          "
        >
          {card.title}
        </h3>


        {/* Description */}

        <p
          className="
            text-body-sm
            mt-3
            max-w-[430px]
            leading-5
            text-muted

            sm:mt-4
            sm:leading-6
          "
        >
          {card.description}
        </p>

      </div>

    </motion.article>
  );
}