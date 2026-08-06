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
   THIRD SECTION
============================================================ */

export default function MarqueeText() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,

    /*
      0   = section entering viewport
      0.5 = section centered
      1   = section leaving viewport
    */

    offset: ["start end", "end start"],
  });


  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        bg-black
        px-6
        py-24
        text-white
      "
    >

      {/* ambient background wash so single icons don't sit on flat black */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(124,58,237,0.10),transparent_70%)]
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

   direction -1 = LEFT
   direction  1 = RIGHT

   Each row:
   - moves horizontally
   - moves slightly vertically
   - becomes sharp in center
   - blurs when entering/leaving
   - fades slightly
   - scales slightly
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

     ENTERING → BLUR
     CENTER   → SHARP
     LEAVING → BLUR
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
        border-violet-200/[0.10]
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

            Gives the horizontal movement a more continuous
            marquee-like appearance.
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
   LARGE SERIF TYPOGRAPHY
============================================================ */

function BigSerif({
  children,
  muted = false,
}) {

  return (

    <span
      className={`
        shrink-0

        text-[clamp(5rem,8vw,9rem)]

        leading-[0.75]

        tracking-[-0.05em]

        ${
          muted
            ? "text-violet-200/40"
            : "text-white"
        }
      `}
      style={{
        fontFamily: '"Instrument Serif", serif',
      }}
    >
      {children}
    </span>

  );
}



/* ============================================================
   SINGLE ICON MARK

   A small, quiet icon badge — no shape gimmicks, no label,
   just a fine ring, a soft violet glow, and the icon itself.
   Reads premium sitting inline with the serif type instead
   of competing with it.
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
    direction === 1 ? [-14, 0, 14] : [14, 0, -14]
  );

  const y = useTransform(
    progress,
    [0, 0.5, 1],
    direction === 1 ? [-10, 0, 10] : [10, 0, -10]
  );

  const rotate = useTransform(
    progress,
    [0, 0.5, 1],
    direction === 1 ? [-8, 0, 8] : [8, 0, -8]
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

  const glowOpacity = useTransform(
    progress,
    [0, 0.5, 1],
    [0.15, 0.55, 0.15]
  );

  const ringOpacity = useTransform(
    progress,
    [0, 0.5, 1],
    [0.15, 0.4, 0.15]
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
        relative

        flex

        h-[76px]
        w-[76px]

        shrink-0

        items-center
        justify-center

        rounded-full

        will-change-transform

        md:h-[92px]
        md:w-[92px]
      "
    >

      {/* ==================================================
          SOFT VIOLET GLOW
      ================================================== */}

      <motion.div
        style={{ opacity: glowOpacity }}
        className="
          pointer-events-none

          absolute
          inset-0

          rounded-full

          bg-violet-500/40

          blur-[22px]
        "
      />



      {/* ==================================================
          FINE RING
      ================================================== */}

      <motion.div
        style={{ opacity: ringOpacity }}
        className="
          pointer-events-none

          absolute
          inset-0

          rounded-full

          border
          border-violet-200
        "
      />



      {/* ==================================================
          GLASS DISC
      ================================================== */}

      <div
        className="
          absolute
          inset-[6px]

          rounded-full

          bg-white/[0.03]

          backdrop-blur-sm
        "
      />



      {/* ==================================================
          ICON
      ================================================== */}

      <Icon
        size={26}
        strokeWidth={1.15}
        className="
          relative
          z-10

          text-violet-50/90

          md:h-8
          md:w-8
        "
      />

    </motion.div>

  );
}