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
    image:
      "https://picsum.photos/seed/nirvana-event-01/1200/1500",
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
    image:
      "https://picsum.photos/seed/nirvana-event-02/1200/1500",
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
    image:
      "https://picsum.photos/seed/nirvana-event-03/1200/1500",
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
    image:
      "https://picsum.photos/seed/nirvana-event-04/1200/1500",
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
    image:
      "https://picsum.photos/seed/nirvana-event-05/1200/1500",
    description:
      "A week-long celebration of visual culture, experimentation and collaborative design featuring challenges, workshops, conversations and creative showcases.",
  },
];

const ease = [0.16, 1, 0.3, 1];

const textVariants = {
  initial: {
    opacity: 0,
    y: 25,
    filter: "blur(6px)",
  },

  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },

  exit: {
    opacity: 0,
    y: -20,
    filter: "blur(6px)",
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


  /* ==========================================================
     PARALLAX
  ========================================================== */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [60, 0, -60]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [25, 0, -25]
  );

  const headingX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-30, 0, 25]
  );


  /* ==========================================================
     NAVIGATION
  ========================================================== */

  const nextEvent = () => {
    setDirection(1);

    setActiveEvent((prev) =>
      prev === events.length - 1
        ? 0
        : prev + 1
    );
  };


  const previousEvent = () => {
    setDirection(-1);

    setActiveEvent((prev) =>
      prev === 0
        ? events.length - 1
        : prev - 1
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
        bg-[var(--color-black)]
        text-primary
      "
    >

      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.08]
          [background-image:radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)]
          [background-size:32px_32px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-15%]
          top-[10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[radial-gradient(circle,rgba(61,45,82,0.15),transparent_68%)]
          blur-[100px]
        "
      />


      {/* ======================================================
          DESKTOP
      ====================================================== */}

      <div
        className="
          relative
          z-10
          hidden
          min-h-screen
          w-full
          grid-cols-[52%_48%]
          lg:grid
        "
      >

        {/* ==================================================
            DESKTOP IMAGE
        ================================================== */}

        <div
          className="
            relative
            min-h-screen
            overflow-hidden
            border-r
            border-[var(--color-border)]
          "
        >

          <DesktopImage
            event={event}
            direction={direction}
            imageY={imageY}
          />

          <ImageLabel />

          <DesktopEventNumber event={event} />

        </div>


        {/* ==================================================
            DESKTOP CONTENT
        ================================================== */}

        <DesktopContent
          event={event}
          activeEvent={activeEvent}
          nextEvent={nextEvent}
          previousEvent={previousEvent}
          contentY={contentY}
          headingX={headingX}
          direction={direction}
          setDirection={setDirection}
          setActiveEvent={setActiveEvent}
        />

      </div>


      {/* ======================================================
          MOBILE — SINGLE SCREEN EVENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          flex
          min-h-[100svh]
          flex-col
          px-4
          py-4
          lg:hidden
        "
      >

        {/* ==================================================
            MOBILE TOP BAR
        ================================================== */}

        <div
          className="
            flex
            shrink-0
            items-center
            justify-between
            pb-3
          "
        >

          <div className="flex items-center gap-2">

            <span
              className="
                h-px
                w-6
                bg-[var(--color-border-strong)]
              "
            />

            <span className="text-micro text-subtle">
              EVENT ARCHIVE
            </span>

          </div>

          <span className="text-micro text-subtle">
            {event.number} / 05
          </span>

        </div>


        {/* ==================================================
            MOBILE IMAGE
        ================================================== */}

        <div
          className="
            relative
            h-[38svh]
            min-h-[220px]
            max-h-[360px]
            shrink-0
            overflow-hidden
            bg-[#09090b]
          "
        >

          <AnimatePresence mode="wait">

            <motion.div
              key={event.image}
              initial={{
                opacity: 0,
                x: direction > 0 ? 45 : -45,
                scale: 1.04,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: direction > 0 ? -35 : 35,
                scale: 0.98,
              }}
              transition={{
                duration: 0.6,
                ease,
              }}
              className="
                absolute
                inset-0
              "
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
                  h-[116%]
                  w-full
                  object-cover
                "
              />

            </motion.div>

          </AnimatePresence>


          {/* Image overlay */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              via-transparent
              to-black/10
            "
          />


          {/* Number */}

          <AnimatePresence mode="wait">

            <motion.span
              key={event.number}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -15,
              }}
              className="
                absolute
                bottom-2
                left-3
                text-[clamp(4rem,18vw,7rem)]
                leading-none
                tracking-[-0.07em]
                text-white/80
              "
            >
              {event.number}
            </motion.span>

          </AnimatePresence>

        </div>


        {/* ==================================================
            MOBILE CONTENT
        ================================================== */}

        <motion.div
          style={{
            y: contentY,
          }}
          className="
            flex
            min-h-0
            flex-1
            flex-col
            justify-between
            pt-4
          "
        >

          <AnimatePresence mode="wait">

            <motion.div
              key={event.number}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.5,
                ease,
              }}
              className="
                flex
                min-h-0
                flex-1
                flex-col
              "
            >

              {/* Meta */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >

                <span className="text-micro text-[var(--color-violet-muted)]">
                  {event.category}
                </span>

                <span className="text-micro text-subtle">
                  {event.year}
                </span>

              </div>


              {/* Title */}

              <div className="mt-3">

                <h2
                  className="
                    text-[clamp(2.8rem,12vw,5rem)]
                    leading-[0.8]
                    tracking-[-0.055em]
                    text-primary
                  "
                >
                  {event.title}
                </h2>

                <p
                  className="
                    mt-2
                    max-w-[340px]
                    text-body
                    leading-5
                    text-muted
                  "
                >
                  {event.subtitle}
                </p>

              </div>


              {/* Date + Description */}

              <div
                className="
                  mt-auto
                  grid
                  grid-cols-[90px_1fr]
                  gap-4
                  border-t
                  border-[var(--color-border)]
                  pt-3
                "
              >

                <div>

                  <p className="text-micro text-subtle">
                    DATE
                  </p>

                  <p
                    className="
                      mt-1
                      text-[10px]
                      leading-4
                      text-muted
                    "
                  >
                    {event.date}
                  </p>

                </div>


                <p
                  className="
                    line-clamp-3
                    text-[10px]
                    leading-4
                    text-muted
                  "
                >
                  {event.description}
                </p>

              </div>

            </motion.div>

          </AnimatePresence>


          {/* ==================================================
              MOBILE NAVIGATION
          ================================================== */}

          <div
            className="
              mt-3
              shrink-0
              border-t
              border-[var(--color-border)]
            "
          >

            {/* Progress */}

            <div
              className="
                flex
                items-center
                gap-3
                py-2
              "
            >

              <span className="text-micro text-subtle">
                {String(activeEvent + 1).padStart(2, "0")}
              </span>

              <div
                className="
                  relative
                  h-px
                  flex-1
                  overflow-hidden
                  bg-[var(--color-border)]
                "
              >

                <motion.div
                  animate={{
                    width: `${
                      ((activeEvent + 1) /
                        events.length) *
                      100
                    }%`,
                  }}
                  transition={{
                    duration: 0.5,
                    ease,
                  }}
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    bg-[var(--color-violet-muted)]
                  "
                />

              </div>

              <span className="text-micro text-subtle">
                {String(events.length).padStart(2, "0")}
              </span>

            </div>


            {/* Buttons */}

            <div
              className="
                grid
                grid-cols-2
                border-t
                border-[var(--color-border)]
              "
            >

              <button
                onClick={previousEvent}
                aria-label="Previous event"
                className="
                  group
                  flex
                  h-11
                  items-center
                  justify-center
                  gap-2
                  border-r
                  border-[var(--color-border)]
                  text-subtle
                  transition-colors
                  duration-300
                  hover:bg-[var(--color-violet-soft)]
                  hover:text-primary
                "
              >

                <ArrowLeft
                  size={14}
                  strokeWidth={1.2}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-x-1
                  "
                />

                <span className="text-micro">
                  Previous
                </span>

              </button>


              <button
                onClick={nextEvent}
                aria-label="Next event"
                className="
                  group
                  flex
                  h-11
                  items-center
                  justify-center
                  gap-2
                  bg-[var(--color-violet-soft)]
                  text-primary
                  transition-colors
                  duration-300
                  hover:bg-[var(--color-violet-muted)]
                "
              >

                <span className="text-micro">
                  Next
                </span>

                <ArrowRight
                  size={14}
                  strokeWidth={1.2}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </button>

            </div>

          </div>

        </motion.div>

      </div>


      {/* Decorative desktop text */}

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
          hidden
          select-none
          whitespace-nowrap
          text-[11vw]
          leading-none
          tracking-[-0.06em]
          text-white/[0.018]
          lg:block
        "
      >
        NIRVANA
      </motion.p>

    </section>
  );
}


/* ============================================================
   DESKTOP IMAGE
============================================================ */

function DesktopImage({
  event,
  direction,
  imageY,
}) {
  return (
    <>

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


      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-black/75
          via-black/10
          to-black/15
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
          to-black/25
        "
      />

    </>
  );
}


/* ============================================================
   IMAGE LABEL
============================================================ */

function ImageLabel() {
  return (
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
      }}
      className="
        absolute
        left-10
        top-10
        z-10
        flex
        items-center
        gap-3
      "
    >

      <div
        className="
          h-px
          w-8
          bg-white/40
        "
      />

      <p className="text-micro text-white/65">
        Event Archive
      </p>

    </motion.div>
  );
}


/* ============================================================
   DESKTOP EVENT NUMBER
============================================================ */

function DesktopEventNumber({ event }) {
  return (
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
          bottom-5
          left-8
          z-10
          text-[clamp(6rem,15vw,14rem)]
          leading-[0.7]
          tracking-[-0.07em]
          text-white/85
        "
      >
        {event.number}
      </motion.p>

    </AnimatePresence>
  );
}


/* ============================================================
   DESKTOP CONTENT
============================================================ */

function DesktopContent({
  event,
  activeEvent,
  nextEvent,
  previousEvent,
  contentY,
  headingX,
}) {
  return (
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
        bg-[var(--color-black)]
      "
    >

      {/* TOP META */}

      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-[var(--color-border)]
          px-10
          py-5
          lg:px-12
        "
      >

        <p className="text-micro text-subtle">
          {event.category}
        </p>

        <p className="text-micro text-subtle">
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
          px-10
          py-16
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

              <span className="text-micro text-[var(--color-violet-muted)]">
                {event.number}
              </span>

              <div
                className="
                  h-px
                  w-12
                  bg-[var(--color-border-strong)]
                "
              />

            </motion.div>


            <motion.h2
              variants={textVariants}
              transition={{
                duration: 0.7,
                delay: 0.05,
                ease,
              }}
              className="
                text-display-lg
                max-w-[700px]
                text-primary
              "
            >
              {event.title}
            </motion.h2>


            <motion.p
              variants={textVariants}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease,
              }}
              className="
                text-body-lg
                mt-7
                max-w-md
                text-muted
              "
            >
              {event.subtitle}
            </motion.p>


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
                grid-cols-[120px_1fr]
                gap-8
                border-t
                border-[var(--color-border)]
                pt-8
              "
            >

              <div>

                <p className="text-micro text-subtle">
                  Date
                </p>

                <p className="text-body-sm mt-2 text-muted">
                  {event.date}
                </p>

              </div>

              <p className="text-body-sm max-w-md leading-7 text-muted">
                {event.description}
              </p>

            </motion.div>

          </motion.div>

        </AnimatePresence>

      </div>


      {/* DESKTOP NAVIGATION */}

      <div
        className="
          grid
          grid-cols-[1fr_auto_auto]
          border-t
          border-[var(--color-border)]
        "
      >

        <div
          className="
            flex
            items-center
            gap-5
            px-10
            lg:px-12
          "
        >

          <span className="text-micro text-subtle">
            {String(activeEvent + 1).padStart(2, "0")}
          </span>

          <div
            className="
              relative
              h-px
              max-w-[180px]
              flex-1
              overflow-hidden
              bg-[var(--color-border)]
            "
          >

            <motion.div
              animate={{
                width: `${
                  ((activeEvent + 1) /
                    events.length) *
                  100
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
                bg-[var(--color-violet-muted)]
              "
            />

          </div>

          <span className="text-micro text-subtle">
            {String(events.length).padStart(2, "0")}
          </span>

        </div>


        <button
          onClick={previousEvent}
          aria-label="Previous event"
          className="
            group
            flex
            h-20
            items-center
            justify-center
            gap-3
            border-l
            border-[var(--color-border)]
            px-7
            text-subtle
            transition-all
            duration-500
            hover:bg-[var(--color-violet-soft)]
            hover:text-primary
          "
        >

          <ArrowLeft
            size={17}
            strokeWidth={1.2}
            className="
              transition-transform
              duration-500
              group-hover:-translate-x-1
            "
          />

          <span className="text-micro">
            Previous
          </span>

        </button>


        <button
          onClick={nextEvent}
          aria-label="Next event"
          className="
            group
            flex
            h-20
            items-center
            justify-center
            gap-4
            border-l
            border-[var(--color-border)]
            bg-[var(--color-violet-soft)]
            px-8
            text-primary
            transition-all
            duration-500
            hover:bg-[var(--color-violet-muted)]
            hover:text-white
          "
        >

          <span className="text-micro">
            Next
          </span>

          <ArrowRight
            size={17}
            strokeWidth={1.2}
            className="
              transition-transform
              duration-500
              group-hover:translate-x-1
            "
          />

        </button>

      </div>


      {/* Decorative text */}

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
  );
}