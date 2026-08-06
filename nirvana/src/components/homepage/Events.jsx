"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

/* ============================================================
   EVENTS
============================================================ */

const events = [
  {
    number: "01",
    title: "VISION BOARD",
    year: "2026",
    image: "https://picsum.photos/seed/event1/700/900",
  },
  {
    number: "02",
    title: "DESIGN JAM",
    year: "2026",
    image: "https://picsum.photos/seed/event2/700/900",
  },
  {
    number: "03",
    title: "CREATIVE CHAOS",
    year: "2025",
    image: "https://picsum.photos/seed/event3/700/900",
  },
  {
    number: "04",
    title: "POSTER MAKING",
    year: "2025",
    image: "https://picsum.photos/seed/event4/700/900",
  },
  {
    number: "05",
    title: "DESIGN WEEK",
    year: "2025",
    image: "https://picsum.photos/seed/event5/700/900",
  },
  {
    number: "06",
    title: "ART NIGHT",
    year: "2025",
    image: "https://picsum.photos/seed/event6/700/900",
  },
];

/* ============================================================
   FOURTH SECTION
============================================================ */

export default function Events() {
  const sliderRef = useRef(null);
  const [activeEvent, setActiveEvent] = useState(0);

  const previousEvent = () => {
    setActiveEvent((prev) =>
      prev === 0 ? events.length - 1 : prev - 1
    );
  };

  const nextEvent = () => {
    setActiveEvent((prev) =>
      prev === events.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
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
          scale: 0.96,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          flex
          h-[calc(100vh-48px)]
          w-full
          flex-col
          overflow-hidden
          border
          border-violet-200/[0.12]
          bg-[#050407]
        "
      >
        {/* ==================================================
            SPACE BACKGROUND
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-0

            bg-[radial-gradient(circle_at_15%_20%,rgba(104,71,170,0.17),transparent_30%),radial-gradient(circle_at_82%_65%,rgba(38,51,120,0.16),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(82,46,120,0.11),transparent_40%),linear-gradient(135deg,#050407_0%,#090711_48%,#05060b_100%)]
          "
        />

        {/* ==================================================
            GALAXY DOTS
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            opacity-[0.14]

            [background-image:radial-gradient(rgba(205,190,255,0.7)_0.6px,transparent_0.6px)]
            [background-size:25px_25px]
          "
        />

        {/* SECOND DOT LAYER */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            opacity-[0.07]

            [background-image:radial-gradient(rgba(120,145,255,0.9)_0.5px,transparent_0.5px)]
            [background-position:12px_8px]
            [background-size:39px_39px]
          "
        />

        {/* ==================================================
            PURPLE TOP GLOW
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-[30%]
            top-[-160px]
            z-0

            h-[350px]
            w-[550px]

            rounded-full
            bg-violet-700/[0.11]
            blur-[120px]
          "
        />

        {/* ==================================================
            BLUE BOTTOM GLOW
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-170px]
            right-[5%]
            z-0

            h-[400px]
            w-[500px]

            rounded-full
            bg-blue-900/[0.12]
            blur-[130px]
          "
        />

        {/* ==================================================
            ACTUAL CONTENT
        ================================================== */}

        <div className="relative z-10 flex h-full min-h-0 flex-col">

          {/* ==================================================
              TOP BAR
          ================================================== */}

          <div
            className="
              relative
              flex
              h-[12vh]
              min-h-[95px]
              shrink-0
              items-center
              justify-between
              overflow-hidden
              border-b
              border-violet-200/[0.12]
              px-6
            "
          >
            {/* LEFT */}

            <div className="relative z-10 flex items-center gap-5">

              <span
                className="
                  text-[10px]
                  tracking-[0.25em]
                  text-violet-200/35
                "
              >
                04
              </span>

              <div
                className="
                  h-7
                  w-px
                  bg-violet-200/[0.15]
                "
              />

              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.28em]
                  text-white/55
                "
              >
                Past Events / Archive
              </p>
            </div>

            {/* CENTER LINE */}

            <div
              className="
                absolute
                left-1/2
                top-1/2

                hidden
                h-px
                w-[26%]

                -translate-x-1/2
                -translate-y-1/2

                bg-gradient-to-r
                from-transparent
                via-violet-200/[0.16]
                to-transparent

                lg:block
              "
            />

            {/* RIGHT */}

            <div
              className="
                relative
                z-10
                flex
                items-center
                gap-3
              "
            >
              
            </div>

            {/* BAR PURPLE TINT */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0

                bg-gradient-to-r
                from-violet-950/[0.18]
                via-transparent
                to-blue-950/[0.12]
              "
            />

            {/* TOP GLOW */}

            <div
              className="
                pointer-events-none
                absolute
                left-[20%]
                top-[-100px]

                h-[160px]
                w-[350px]

                rounded-full
                bg-violet-600/[0.10]
                blur-[70px]
              "
            />
          </div>

          {/* ==================================================
              GALLERY
          ================================================== */}

          <div
            className="
              relative
              flex
              min-h-0
              flex-1
              items-center
              overflow-hidden
            "
          >
            {/* LEFT FADE */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                left-0
                top-0
                z-20
                w-16
                bg-gradient-to-r
                from-[#07050b]
                to-transparent
              "
            />

            {/* RIGHT FADE */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                right-0
                top-0
                z-20
                w-16
                bg-gradient-to-l
                from-[#06060b]
                to-transparent
              "
            />

            <motion.div
              ref={sliderRef}
              drag="x"
              dragConstraints={{
                left: -700,
                right: 0,
              }}
              dragElastic={0.08}
              className="
                flex
                cursor-grab
                items-start
                gap-3
                px-5
                active:cursor-grabbing
              "
            >
              {events.map((event, index) => (
                <EventCard
                  key={event.number}
                  event={event}
                  index={index}
                  active={activeEvent === index}
                  onHover={() => setActiveEvent(index)}
                />
              ))}
            </motion.div>
          </div>

          {/* ==================================================
              BOTTOM
          ================================================== */}

          <div
            className="
              grid
              shrink-0
              grid-cols-[1fr_auto]
              items-stretch
              border-t
              border-violet-200/[0.12]
              bg-black/[0.08]
              backdrop-blur-sm
            "
          >
            {/* ==================================================
                BOTTOM LEFT
            ================================================== */}

            <div
              className="
                flex
                items-end
                justify-between
                px-5
                py-5
              "
            >
              {/* NUMBER */}

              <motion.div
                key={events[activeEvent].number}
                initial={{
                  opacity: 0,
                  y: 40,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <p
                  className="
                    text-[clamp(4rem,7vw,8rem)]
                    leading-[0.7]
                    text-violet-100/90
                  "
                  style={{
                    fontFamily: '"Instrument Serif", serif',
                  }}
                >
                  {events[activeEvent].number}
                </p>
              </motion.div>

              {/* TITLE */}

              <div className="mr-10 text-right">
                <motion.h2
                  key={events[activeEvent].title}
                  initial={{
                    opacity: 0,
                    y: 35,
                    filter: "blur(8px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    text-[clamp(4rem,7vw,8rem)]
                    leading-[0.75]
                    tracking-[-0.04em]
                  "
                  style={{
                    fontFamily: '"Instrument Serif", serif',
                  }}
                >
                  PAST EVENTS
                </motion.h2>

                <motion.p
                  key={`${events[activeEvent].title}-meta`}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.05,
                  }}
                  className="
                    mt-4
                    text-xs
                    uppercase
                    tracking-[0.25em]
                    text-violet-100/35
                  "
                >
                  {events[activeEvent].title} /{" "}
                  {events[activeEvent].year}
                </motion.p>
              </div>
            </div>

            {/* ==================================================
                SIDE CONTROLS
            ================================================== */}

            <div
              className="
                flex
                h-full
                flex-col
                border-l
                border-violet-200/[0.12]
              "
            >
              {/* EXPLORE */}

              <button
                aria-label="Explore event"
                className="
                  group
                  relative
                  flex
                  min-h-[70px]
                  flex-1
                  items-center
                  justify-center
                  overflow-hidden
                  px-7
                  transition-all
                  duration-500
                  hover:bg-violet-100
                  hover:text-black
                "
              >
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-violet-800/[0.12]
                    via-transparent
                    to-blue-900/[0.08]
                    transition-opacity
                    duration-500
                    group-hover:opacity-0
                  "
                />

                <ArrowUpRight
                  size={34}
                  strokeWidth={1.3}
                  className="
                    relative
                    z-10
                    transition-transform
                    duration-500
                    group-hover:rotate-45
                  "
                />
              </button>

              {/* ================================================
                  ARROWS
              ================================================ */}

              <div
                className="
                  flex
                  border-t
                  border-violet-200/[0.12]
                "
              >
                <button
                  onClick={previousEvent}
                  aria-label="Previous event"
                  className="
                    group
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    hover:bg-violet-100
                    hover:text-black
                  "
                >
                  <ArrowLeft
                    size={20}
                    strokeWidth={1.3}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-x-1
                    "
                  />
                </button>

                <button
                  onClick={nextEvent}
                  aria-label="Next event"
                  className="
                    group
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    border-l
                    border-violet-200/[0.12]
                    transition-all
                    duration-300
                    hover:bg-violet-100
                    hover:text-black
                  "
                >
                  <ArrowRight
                    size={20}
                    strokeWidth={1.3}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ============================================================
   EVENT CARD
============================================================ */

function EventCard({
  event,
  index,
  active,
  onHover,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 120,
        rotate: index % 2 === 0 ? -3 : 3,
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
      }}
      transition={{
        duration: 0.9,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={onHover}
      className="
        group
        w-[16vw]
        min-w-[210px]
        shrink-0
      "
    >
      {/* ==================================================
          IMAGE
      ================================================== */}

      <motion.div
        animate={{
          y: active ? -15 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 20,
        }}
        className="
          relative
          aspect-[3/4]
          overflow-hidden
          border
          border-violet-200/[0.10]
          bg-[#08060d]
        "
      >
        <motion.img
          src={event.image}
          alt={event.title}
          draggable="false"
          animate={{
            scale: active ? 1.08 : 1,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            h-full
            w-full
            select-none
            object-cover
          "
        />

        {/* DARK / PURPLE OVERLAY */}

        <motion.div
          animate={{
            opacity: active ? 0.05 : 0.32,
          }}
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#0c0714]/20
            via-black/10
            to-[#090511]/60
          "
        />

        {/* ACTIVE PURPLE GLOW */}

        <motion.div
          animate={{
            opacity: active ? 1 : 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-violet-950/35
            via-transparent
            to-transparent
          "
        />

        {/* NUMBER */}

        <div
          className="
            absolute
            left-3
            top-3
            flex
            items-center
            gap-2
          "
        >
          <div
            className={`
              h-[5px]
              w-[5px]
              rounded-full
              transition-all
              duration-500

              ${
                active
                  ? "bg-violet-300 shadow-[0_0_10px_rgba(196,181,253,0.8)]"
                  : "bg-white/40"
              }
            `}
          />

          <span
            className="
              text-[10px]
              tracking-[0.2em]
              text-white/80
            "
          >
            {event.number}
          </span>
        </div>

        {/* ACTIVE CORNER */}

        <motion.div
          animate={{
            opacity: active ? 1 : 0,
            scale: active ? 1 : 0.7,
          }}
          className="
            absolute
            bottom-3
            right-3

            flex
            h-8
            w-8
            items-center
            justify-center

            rounded-full

            border
            border-violet-100/20

            bg-black/30
            backdrop-blur-md
          "
        >
          <ArrowUpRight
            size={14}
            strokeWidth={1.2}
          />
        </motion.div>
      </motion.div>

      {/* ==================================================
          CARD INFO
      ================================================== */}

      <div
        className="
          flex
          items-start
          justify-between
          pt-3
        "
      >
        <p
          className={`
            text-xs
            uppercase
            tracking-[0.12em]
            transition-colors
            duration-300

            ${
              active
                ? "text-violet-100"
                : "text-white/70"
            }
          `}
        >
          {event.title}
        </p>

        <p
          className="
            text-xs
            text-violet-100/30
          "
        >
          {event.year}
        </p>
      </div>
    </motion.div>
  );
}