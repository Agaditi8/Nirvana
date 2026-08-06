"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

/* ============================================================
   EVENTS DATA
============================================================ */

const events = [
  {
    number: "01",
    title: "Vision Board",
    subtitle: "Designing the year before living it.",
    year: "2026",
    category: "Creative Workshop",
    date: "January 18, 2026",
    image: "https://picsum.photos/seed/nirvana-event-01/1200/1500",
    description:
      "An immersive vision board experience where ideas, aspirations, typography, imagery and personal stories came together to create a visual map for the year ahead.",
  },
  {
    number: "02",
    title: "Design Jam",
    subtitle: "Ideas moving faster than perfection.",
    year: "2026",
    category: "Design Sprint",
    date: "February 12, 2026",
    image: "https://picsum.photos/seed/nirvana-event-02/1200/1500",
    description:
      "A fast-paced collaborative design session built around experimentation. Teams explored unconventional ideas, challenged familiar patterns and transformed rough concepts into visual experiences.",
  },
  {
    number: "03",
    title: "Creative Chaos",
    subtitle: "Where unfinished ideas find direction.",
    year: "2025",
    category: "Creative Session",
    date: "October 24, 2025",
    image: "https://picsum.photos/seed/nirvana-event-03/1200/1500",
    description:
      "A celebration of imperfect ideas, strange experiments and unexpected outcomes. Creative Chaos gave designers the freedom to explore without worrying about getting everything right.",
  },
  {
    number: "04",
    title: "Poster Making",
    subtitle: "One canvas. Infinite interpretations.",
    year: "2025",
    category: "Competition",
    date: "September 09, 2025",
    image: "https://picsum.photos/seed/nirvana-event-04/1200/1500",
    description:
      "A visual storytelling competition exploring how typography, composition, illustration and colour can communicate powerful ideas within a single frame.",
  },
  {
    number: "05",
    title: "Design Week",
    subtitle: "Seven days dedicated to making.",
    year: "2025",
    category: "Design Festival",
    date: "August 14, 2025",
    image: "https://picsum.photos/seed/nirvana-event-05/1200/1500",
    description:
      "A week-long celebration of visual culture, experimentation and collaborative design featuring challenges, workshops, conversations and creative showcases.",
  },
];

/* ============================================================
   ANIMATION
============================================================ */

const ease = [0.16, 1, 0.3, 1];

const textVariants = {
  initial: {
    opacity: 0,
    y: 45,
    filter: "blur(8px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  exit: {
    opacity: 0,
    y: -35,
    filter: "blur(8px)",
  },
};

/* ============================================================
   EVENTS
============================================================ */

export default function Events() {
  const sectionRef = useRef(null);
  const [activeEvent, setActiveEvent] = useState(0);
  const [direction, setDirection] = useState(1);

  const event = events[activeEvent];

  /* ----------------------------------------------------------
     SCROLL PARALLAX
  ---------------------------------------------------------- */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [80, 0, -80]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [35, 0, -35]
  );

  const headingX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-40, 0, 30]
  );

  /* ----------------------------------------------------------
     NAVIGATION
  ---------------------------------------------------------- */

  const nextEvent = () => {
    setDirection(1);

    setActiveEvent((prev) =>
      prev === events.length - 1 ? 0 : prev + 1
    );
  };

  const previousEvent = () => {
    setDirection(-1);

    setActiveEvent((prev) =>
      prev === 0 ? events.length - 1 : prev - 1
    );
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#050505]
        text-white
      "
    >
      {/* ======================================================
          SUBTLE BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40
          [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)]
          [background-size:32px_32px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-15%]
          top-[10%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-violet-800/10
          blur-[160px]
        "
      />

      {/* ======================================================
          HEADER
      ====================================================== */}

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
          ease,
        }}
        className="
          relative
          z-20
          flex
          items-center
          justify-between
          border-b
          border-white/10
          px-6
          py-5
          md:px-10
          lg:px-14
        "
      >
        <div className="flex items-center gap-4">
          <span
            className="
              h-2
              w-2
              rounded-full
              bg-violet-300
              shadow-[0_0_15px_rgba(196,181,253,0.8)]
            "
          />

          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-white/50
            "
          >
            Nirvana / Past Events
          </p>
        </div>

        <p
          className="
            text-[10px]
            uppercase
            tracking-[0.25em]
            text-white/30
          "
        >
          {String(activeEvent + 1).padStart(2, "0")} /{" "}
          {String(events.length).padStart(2, "0")}
        </p>
      </motion.div>

      {/* ======================================================
          MAIN GRID
      ====================================================== */}

      <div
        className="
          relative
          z-10
          grid
          min-h-[calc(100vh-65px)]
          grid-cols-1
          lg:grid-cols-[52%_48%]
        "
      >
        {/* ==================================================
            LEFT — IMAGE
        ================================================== */}

        <div
          className="
            relative
            min-h-[60vh]
            overflow-hidden
            border-b
            border-white/10
            lg:min-h-0
            lg:border-b-0
            lg:border-r
          "
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={event.image}
              initial={{
                opacity: 0,
                scale: 1.08,
                x: direction > 0 ? 70 : -70,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                x: direction > 0 ? -60 : 60,
              }}
              transition={{
                duration: 0.85,
                ease,
              }}
              className="absolute inset-0"
            >
              <motion.img
                style={{
                  y: imageY,
                }}
                src={event.image}
                alt={event.title}
                className="
                  absolute
                  -top-[8%]
                  left-0
                  h-[116%]
                  w-full
                  object-cover
                "
              />
            </motion.div>
          </AnimatePresence>

          {/* IMAGE OVERLAY */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              via-black/5
              to-black/20
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-r
              from-transparent
              via-transparent
              to-black/20
            "
          />

          {/* IMAGE TOP LABEL */}

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
              delay: 0.2,
            }}
            className="
              absolute
              left-6
              top-6
              z-10
              flex
              items-center
              gap-3
              md:left-10
              md:top-10
            "
          >
            <div className="h-px w-8 bg-white/50" />

            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.28em]
                text-white/70
              "
            >
              Event Archive
            </p>
          </motion.div>

          {/* HUGE EVENT NUMBER */}

          <AnimatePresence mode="wait">
            <motion.p
              key={event.number}
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -50,
              }}
              transition={{
                duration: 0.7,
                ease,
              }}
              className="
                absolute
                bottom-4
                left-5
                z-10
                text-[clamp(7rem,17vw,16rem)]
                font-light
                leading-[0.7]
                tracking-[-0.07em]
                text-white/90
                md:left-8
              "
              style={{
                fontFamily: '"Instrument Serif", serif',
              }}
            >
              {event.number}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* ==================================================
            RIGHT — CONTENT
        ================================================== */}

        <motion.div
          style={{
            y: contentY,
          }}
          className="
            relative
            flex
            min-h-[650px]
            flex-col
            justify-between
            overflow-hidden
          "
        >
          {/* TOP META */}

          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-white/10
              px-6
              py-5
              md:px-10
              lg:px-12
            "
          >
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.28em]
                text-white/35
              "
            >
              {event.category}
            </p>

            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.28em]
                text-white/35
              "
            >
              {event.year}
            </p>
          </div>

          {/* CONTENT */}

          <div
            className="
              flex
              flex-1
              flex-col
              justify-center
              px-6
              py-16
              md:px-10
              lg:px-12
              xl:px-16
            "
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={event.number}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {/* SMALL NUMBER */}

                <motion.div
                  variants={textVariants}
                  transition={{
                    duration: 0.65,
                    ease,
                  }}
                  className="
                    mb-8
                    flex
                    items-center
                    gap-4
                  "
                >
                  <span
                    className="
                      text-xs
                      tracking-[0.2em]
                      text-violet-300
                    "
                  >
                    {event.number}
                  </span>

                  <div
                    className="
                      h-px
                      w-16
                      bg-gradient-to-r
                      from-violet-300/70
                      to-transparent
                    "
                  />
                </motion.div>

                {/* TITLE */}

                <motion.h2
                  variants={textVariants}
                  transition={{
                    duration: 0.7,
                    delay: 0.05,
                    ease,
                  }}
                  className="
                    max-w-[700px]
                    text-[clamp(4rem,8vw,9rem)]
                    leading-[0.76]
                    tracking-[-0.055em]
                  "
                  style={{
                    fontFamily: '"Instrument Serif", serif',
                  }}
                >
                  {event.title}
                </motion.h2>

                {/* SUBTITLE */}

                <motion.p
                  variants={textVariants}
                  transition={{
                    duration: 0.7,
                    delay: 0.1,
                    ease,
                  }}
                  className="
                    mt-7
                    max-w-md
                    text-lg
                    font-light
                    leading-relaxed
                    text-white/65
                    md:text-xl
                  "
                >
                  {event.subtitle}
                </motion.p>

                {/* DESCRIPTION */}

                <motion.div
                  variants={textVariants}
                  transition={{
                    duration: 0.7,
                    delay: 0.15,
                    ease,
                  }}
                  className="
                    mt-10
                    grid
                    max-w-xl
                    grid-cols-1
                    gap-8
                    border-t
                    border-white/10
                    pt-8
                    md:grid-cols-[120px_1fr]
                  "
                >
                  <div>
                    <p
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.25em]
                        text-white/30
                      "
                    >
                      Date
                    </p>

                    <p
                      className="
                        mt-2
                        text-xs
                        text-white/60
                      "
                    >
                      {event.date}
                    </p>
                  </div>

                  <p
                    className="
                      max-w-md
                      text-sm
                      font-light
                      leading-7
                      text-white/45
                    "
                  >
                    {event.description}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ==================================================
              BOTTOM NAVIGATION
          ================================================== */}

          <div
            className="
              grid
              grid-cols-[1fr_auto_auto]
              border-t
              border-white/10
            "
          >
            {/* PROGRESS */}

            <div
              className="
                flex
                items-center
                gap-5
                px-6
                md:px-10
                lg:px-12
              "
            >
              <span
                className="
                  text-[10px]
                  tracking-[0.2em]
                  text-white/30
                "
              >
                {String(activeEvent + 1).padStart(2, "0")}
              </span>

              <div
                className="
                  relative
                  h-px
                  max-w-[180px]
                  flex-1
                  overflow-hidden
                  bg-white/10
                "
              >
                <motion.div
                  animate={{
                    width: `${
                      ((activeEvent + 1) / events.length) * 100
                    }%`,
                  }}
                  transition={{
                    duration: 0.6,
                    ease,
                  }}
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    bg-violet-300
                  "
                />
              </div>

              <span
                className="
                  text-[10px]
                  tracking-[0.2em]
                  text-white/30
                "
              >
                {String(events.length).padStart(2, "0")}
              </span>
            </div>

            {/* PREVIOUS */}

            <button
              onClick={previousEvent}
              aria-label="Previous event"
              className="
                group
                flex
                h-20
                w-20
                items-center
                justify-center
                border-l
                border-white/10
                transition-all
                duration-500
                hover:bg-white
                hover:text-black
                md:h-24
                md:w-24
              "
            >
              <ArrowLeft
                size={21}
                strokeWidth={1.3}
                className="
                  transition-transform
                  duration-500
                  group-hover:-translate-x-1
                "
              />
            </button>

            {/* NEXT */}

            <button
              onClick={nextEvent}
              aria-label="Next event"
              className="
                group
                flex
                h-20
                min-w-[130px]
                items-center
                justify-center
                gap-4
                border-l
                border-white/10
                bg-violet-200
                px-7
                text-black
                transition-all
                duration-500
                hover:bg-white
                md:h-24
                md:min-w-[165px]
              "
            >
              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.22em]
                "
              >
                Next
              </span>

              <ArrowRight
                size={20}
                strokeWidth={1.4}
                className="
                  transition-transform
                  duration-500
                  group-hover:translate-x-2
                "
              />
            </button>
          </div>

          {/* DECORATIVE BIG TEXT */}

          <motion.p
            style={{
              x: headingX,
            }}
            className="
              pointer-events-none
              absolute
              bottom-[12%]
              right-[-5%]
              -z-10
              select-none
              whitespace-nowrap
              text-[11vw]
              leading-none
              tracking-[-0.06em]
              text-white/[0.018]
            "
          >
            NIRVANA
          </motion.p>
        </motion.div>
      </div>

      {/* ======================================================
          BOTTOM SCROLL LINE
      ====================================================== */}

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
          duration: 1.4,
          ease,
        }}
        className="
          absolute
          bottom-0
          left-0
          z-30
          h-px
          w-full
          origin-left
          bg-gradient-to-r
          from-violet-400/70
          via-violet-200/20
          to-transparent
        "
      />
    </section>
  );
}