"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  PenTool,
  Palette,
  Layers3,
  Spline,
} from "lucide-react";


/* ============================================================
   ANIMATION
============================================================ */

const ease = [0.16, 1, 0.3, 1];


/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function MarqueeText() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });


  return (
    <section
      ref={sectionRef}
      className="
        section
        relative
        w-full
        overflow-hidden
        py-24
      "
    >

      {/* ======================================================
          NOISE
      ====================================================== */}

      <div className="noise z-0 opacity-[0.06]" />


      {/* ======================================================
          DARK VIOLET ATMOSPHERE
      ====================================================== */}

      <div
        className="
          violet-glow-soft
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          opacity-70
        "
      />


      {/* =====================================================
          ROW 01
      ===================================================== */}

      <MovingRow
        progress={scrollYProgress}
        direction={-1}
        distance={280}
        parallax={55}
      >
        <BigSerif>
          The
        </BigSerif>

        <IconMark
          icon={PenTool}
          progress={scrollYProgress}
          direction={1}
        />

        <BigSerif muted>
          Art of
        </BigSerif>

        <BigSerif>
          Creating
        </BigSerif>
      </MovingRow>


      {/* =====================================================
          ROW 02
      ===================================================== */}

      <MovingRow
        progress={scrollYProgress}
        direction={1}
        distance={330}
        parallax={-45}
      >
        <BigSerif muted>
          Ideas
        </BigSerif>

        <BigSerif>
          Into
        </BigSerif>

        <IconMark
          icon={Palette}
          progress={scrollYProgress}
          direction={-1}
        />

        <BigSerif>
          Visuals
        </BigSerif>
      </MovingRow>


      {/* =====================================================
          ROW 03
      ===================================================== */}

      <MovingRow
        progress={scrollYProgress}
        direction={-1}
        distance={380}
        parallax={60}
      >
        <BigSerif>
          for
        </BigSerif>

        <IconMark
          icon={Layers3}
          progress={scrollYProgress}
          direction={1}
        />

        <BigSerif muted>
          Curious
        </BigSerif>

        <BigSerif>
          Minds
        </BigSerif>
      </MovingRow>


      {/* =====================================================
          ROW 04
      ===================================================== */}

      <MovingRow
        progress={scrollYProgress}
        direction={1}
        distance={300}
        parallax={-55}
      >
        <BigSerif muted>
          To Design
        </BigSerif>

        <BigSerif>
          Without
        </BigSerif>

        <IconMark
          icon={Spline}
          progress={scrollYProgress}
          direction={-1}
        />

        <BigSerif>
          Limits!
        </BigSerif>
      </MovingRow>

    </section>
  );
}


/* ============================================================
   MOVING ROW
============================================================ */

function MovingRow({
  children,
  progress,
  direction = 1,
  distance = 300,
  parallax = 50,
}) {

  /* ========================================================
     HORIZONTAL MOVEMENT
  ======================================================== */

  const x = useTransform(
    progress,
    [0, 1],
    direction === 1
      ? [-distance, distance]
      : [distance, -distance]
  );


  /* ========================================================
     VERTICAL PARALLAX
  ======================================================== */

  const y = useTransform(
    progress,
    [0, 0.5, 1],
    [
      parallax,
      0,
      -parallax,
    ]
  );


  /* ========================================================
     BLUR
  ======================================================== */

  const blur = useTransform(
    progress,
    [
      0,
      0.18,
      0.5,
      0.82,
      1,
    ],
    [
      "blur(14px)",
      "blur(4px)",
      "blur(0px)",
      "blur(4px)",
      "blur(14px)",
    ]
  );


  /* ========================================================
     OPACITY
  ======================================================== */

  const opacity = useTransform(
    progress,
    [
      0,
      0.15,
      0.5,
      0.85,
      1,
    ],
    [
      0.25,
      0.8,
      1,
      0.8,
      0.25,
    ]
  );


  /* ========================================================
     SCALE
  ======================================================== */

  const scale = useTransform(
    progress,
    [
      0,
      0.5,
      1,
    ],
    [
      0.96,
      1,
      0.96,
    ]
  );


  return (
    <div
      className="
        relative
        flex
        h-[18vh]
        min-h-[150px]
        items-center
        overflow-hidden
        border-b
        border-[var(--color-border)]
      "
    >

      <motion.div
        style={{
          x,
          y,
          opacity,
          scale,
          filter: blur,
        }}
        className="
          flex
          w-max
          min-w-max
          items-center
          gap-7
          whitespace-nowrap
          will-change-transform
        "
      >

        {/* ==================================================
            FIRST COPY
        ================================================== */}

        <div
          className="
            flex
            shrink-0
            items-center
            gap-7
          "
        >
          {children}
        </div>


        {/* ==================================================
            SECOND COPY
        ================================================== */}

        <div
          aria-hidden="true"
          className="
            flex
            shrink-0
            items-center
            gap-7
          "
        >
          {children}
        </div>

      </motion.div>

    </div>
  );
}


/* ============================================================
   LARGE DISPLAY TEXT
============================================================ */

function BigSerif({
  children,
  muted = false,
}) {
  return (
    <span
      className={`
        text-display-lg
        shrink-0
        whitespace-nowrap

        ${
          muted
            ? "text-subtle"
            : "text-primary"
        }
      `}
    >
      {children}
    </span>
  );
}


/* ============================================================
   ICON MARK
============================================================ */

function IconMark({
  icon: Icon,
  progress,
  direction = 1,
}) {

  /* ========================================================
     SUBTLE DRIFT
  ======================================================== */

  const x = useTransform(
    progress,
    [0, 0.5, 1],
    direction === 1
      ? [-14, 0, 14]
      : [14, 0, -14]
  );


  const y = useTransform(
    progress,
    [0, 0.5, 1],
    direction === 1
      ? [-10, 0, 10]
      : [10, 0, -10]
  );


  const rotate = useTransform(
    progress,
    [0, 0.5, 1],
    direction === 1
      ? [-8, 0, 8]
      : [8, 0, -8]
  );


  const scale = useTransform(
    progress,
    [0, 0.5, 1],
    [0.82, 1, 0.82]
  );


  const blur = useTransform(
    progress,
    [0, 0.2, 0.5, 0.8, 1],
    [
      "blur(8px)",
      "blur(2px)",
      "blur(0px)",
      "blur(2px)",
      "blur(8px)",
    ]
  );


  return (
    <motion.div
      style={{
        x,
        y,
        rotate,
        scale,
        filter: blur,
      }}
      className="
        flex
        shrink-0
        items-center
        justify-center
        will-change-transform
      "
    >

      {/* ==================================================
          SIMPLE ICON ONLY
      ================================================== */}

      <Icon
        size={48}
        strokeWidth={1.15}
        className="
          text-[var(--color-violet-muted)]
          md:h-14
          md:w-14
        "
      />

    </motion.div>
  );
}