"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const people = [
  {
    image:
      "https://picsum.photos/seed/nirvana-team-1/800/1100",
    label: "TECHNICAL",
  },
  {
    image:
      "https://picsum.photos/seed/nirvana-team-2/800/950",
    label: "CREATIVE",
  },
  {
    image:
      "https://picsum.photos/seed/nirvana-team-3/800/1200",
    label: "PR/SPONSI",
  },
  {
    image:
      "https://picsum.photos/seed/nirvana-team-4/800/1000",
    label: "EVENTS",
  },
  {
    image:
      "https://picsum.photos/seed/nirvana-team-5/800/1150",
    label: "CONTENT",
  },
];

export default function Hero() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[var(--color-black)]
        px-6
        py-20
        text-primary
        md:px-10
        md:py-24
        lg:px-14
        lg:py-28
      "
    >
      {/* ==================================================
          BACKGROUND TEXTURE
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.045]
          [background-image:radial-gradient(rgba(255,255,255,0.8)_0.6px,transparent_0.6px)]
          [background-size:32px_32px]
        "
      />

      {/* ==================================================
          MUTED VIOLET ATMOSPHERE
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-15%]
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(61,45,82,0.18),transparent_68%)]
          blur-[120px]
        "
      />

      {/* ==================================================
          CONTENT
      ================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-120px)]
          max-w-[1500px]
          flex-col
          items-center
        "
      >
        {/* ==================================================
            HEADING
        ================================================== */}

        <div className="flex w-full flex-col items-center text-center">
          <motion.p
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
              ease,
            }}
            className="
              text-micro
              mb-7
              text-[var(--color-violet-muted)]
            "
          >
            THE PEOPLE BEHIND NIRVANA
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 60,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1,
              delay: 0.12,
              ease,
            }}
            className="
              text-display-lg
              max-w-[1100px]
              leading-[0.8]
              text-primary
            "
          >
            THE PEOPLE
            <br />

            <span className="text-muted">
              BEHIND THE WORK.
            </span>
          </motion.h1>

          {/* ==================================================
              DESCRIPTION
          ================================================== */}

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
              duration: 0.8,
              delay: 0.35,
              ease,
            }}
            className="
              text-body-lg
              mt-9
              max-w-[550px]
              leading-7
              text-muted
            "
          >
            Designers, thinkers, storytellers and makers
            shaping the visual world of Nirvana together.
          </motion.p>

          {/* ==================================================
              BUTTONS
          ================================================== */}

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
              delay: 0.5,
              ease,
            }}
            className="
              mt-8
              flex
              flex-col
              gap-2
              sm:flex-row
            "
          >

            {/* BECOME OUR Groupie */}

            <a
              href="#join-community"
              className="
                flex
                min-w-[190px]
                items-center
                justify-center
                border
                border-white/10
                bg-white/[0.02]
                px-6
                py-3.5
                text-button
                text-white/65
                transition-all
                duration-500
                hover:border-white/25
                hover:bg-white/[0.05]
                hover:text-white
              "
            >
              BECOME PART OF THE TEAM
            </a>
          </motion.div>
        </div>

        {/* ==================================================
            FIVE PEOPLE
        ================================================== */}

        <div
          className="
            mt-16
            grid
            w-full
            max-w-[1200px]
            grid-cols-2
            items-end
            gap-3
            md:mt-20
            md:grid-cols-5
            md:gap-4
            lg:mt-24
            lg:gap-5
          "
        >
          {people.map((person, index) => (
            <PersonCard
              key={person.label}
              person={person}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   PERSON CARD
============================================================ */

function PersonCard({ person, index }) {
  const heights = [
    "h-[280px] md:h-[390px]",
    "h-[330px] md:h-[450px]",
    "h-[300px] md:h-[410px]",
    "h-[350px] md:h-[470px]",
    "h-[310px] md:h-[430px]",
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 70,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.9,
        delay: 0.4 + index * 0.08,
        ease,
      }}
      whileHover={{
        y: -14,
        scale: 1.025,
        transition: {
          duration: 0.45,
          ease,
        },
      }}
      className={`
        group
        relative
        ${heights[index]}
        w-full
        cursor-pointer
        overflow-hidden
        bg-[#0a090c]
      `}
    >
      {/* ==================================================
          IMAGE
      ================================================== */}

      <img
        src={person.image}
        alt=""
        draggable="false"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          grayscale
          opacity-75
          transition-all
          duration-700
          ease-out
          group-hover:scale-105
          group-hover:grayscale-0
          group-hover:opacity-100
        "
      />

      {/* ==================================================
          DARK GRADIENT
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-black/80
          via-black/10
          to-transparent
        "
      />

      {/* ==================================================
          MUTED VIOLET HOVER
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_25%,rgba(73,52,91,0.18),transparent_60%)]
          opacity-0
          transition-opacity
          duration-700
          group-hover:opacity-100
        "
      />

      {/* ==================================================
          LABEL
      ================================================== */}

      <div
        className="
          absolute
          left-4
          right-4
          top-4
          flex
          items-center
          justify-between
          md:left-5
          md:right-5
          md:top-5
        "
      >
        <span className="text-micro text-white/55">
          {person.label}
        </span>

        <span className="text-micro text-white/35">
          0{index + 1}
        </span>
      </div>

      {/* ==================================================
          BOTTOM ACCENT
      ================================================== */}

      <div
        className="
          absolute
          bottom-5
          left-5
          h-px
          w-7
          bg-white/45
          transition-all
          duration-500
          group-hover:w-12
        "
      />
    </motion.div>
  );
}