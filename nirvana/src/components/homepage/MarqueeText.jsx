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


        <IconCapsule
          icon={PenTool}
          progress={scrollYProgress}
          direction={1}
          shape="soft"
          label="CREATE"
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


        <IconCapsule
          icon={Palette}
          progress={scrollYProgress}
          direction={-1}
          shape="wave"
          label="EXPLORE"
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


        <IconCapsule
          icon={Layers3}
          progress={scrollYProgress}
          direction={1}
          shape="cut"
          label="DESIGN"
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


        <IconCapsule
          icon={Spline}
          progress={scrollYProgress}
          direction={-1}
          shape="pill"
          label="EVOLVE"
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
        border-violet-200/[0.12]
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
          gap-5
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
            gap-5
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
            gap-5
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
            ? "text-violet-200/45"
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
   DESIGN ICON CAPSULE
============================================================ */

function IconCapsule({
  icon: Icon,
  shape = "pill",
  progress,
  direction = 1,
  label,
}) {


  /* ========================================================
     DIFFERENT CAPSULE SHAPES
  ======================================================== */

  const shapes = {

    pill:
      "rounded-full",

    soft:
      "rounded-[38px]",

    wave:
      "rounded-[50%_18%_50%_18%/40%_50%_40%_50%]",

    cut:
      "[clip-path:polygon(8%_0,92%_0,100%_50%,92%_100%,8%_100%,0_50%)]",

  };



  /* ========================================================
     ICON X PARALLAX
  ======================================================== */

  const iconX = useTransform(
    progress,

    [
      0,
      0.5,
      1,
    ],

    direction === 1

      ? [
          -22,
          0,
          22,
        ]

      : [
          22,
          0,
          -22,
        ]
  );



  /* ========================================================
     ICON Y PARALLAX
  ======================================================== */

  const iconY = useTransform(
    progress,

    [
      0,
      0.5,
      1,
    ],

    direction === 1

      ? [
          -25,
          0,
          25,
        ]

      : [
          25,
          0,
          -25,
        ]
  );



  /* ========================================================
     ICON ROTATION
  ======================================================== */

  const rotate = useTransform(
    progress,

    [
      0,
      0.5,
      1,
    ],

    direction === 1

      ? [
          -14,
          0,
          14,
        ]

      : [
          14,
          0,
          -14,
        ]
  );



  /* ========================================================
     ICON SCALE
  ======================================================== */

  const iconScale = useTransform(
    progress,

    [
      0,
      0.5,
      1,
    ],

    [
      0.72,
      1,
      0.72,
    ]
  );



  /* ========================================================
     ICON BLUR
  ======================================================== */

  const iconBlur = useTransform(
    progress,

    [
      0,
      0.2,
      0.5,
      0.8,
      1,
    ],

    [
      "blur(12px)",
      "blur(3px)",
      "blur(0px)",
      "blur(3px)",
      "blur(12px)",
    ]
  );



  /* ========================================================
     PURPLE GLOW
  ======================================================== */

  const glowOpacity = useTransform(
    progress,

    [
      0,
      0.5,
      1,
    ],

    [
      0.1,
      0.65,
      0.1,
    ]
  );



  /* ========================================================
     DECORATIVE BACKGROUND ICON ROTATION
  ======================================================== */

  const backgroundRotate = useTransform(
    progress,

    [
      0,
      1,
    ],

    direction === 1

      ? [
          -20,
          20,
        ]

      : [
          20,
          -20,
        ]
  );


  return (

    <div
      className={`
        relative

        flex

        h-[100px]
        w-[250px]

        shrink-0

        items-center
        justify-center

        overflow-hidden

        border
        border-violet-200/[0.12]

        bg-[radial-gradient(circle_at_50%_50%,rgba(96,70,165,0.20),transparent_55%),linear-gradient(135deg,#0b0712_0%,#07060c_45%,#05050a_100%)]

        md:h-[115px]
        md:w-[290px]

        ${shapes[shape]}
      `}
    >


      {/* ==================================================
          PURPLE GLOW
      ================================================== */}

      <motion.div
        style={{
          opacity: glowOpacity,
        }}
        className="
          pointer-events-none

          absolute

          left-1/2
          top-1/2

          h-[130px]
          w-[130px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-violet-500/30

          blur-[45px]
        "
      />



      {/* ==================================================
          DARK BLUE GLOW
      ================================================== */}

      <div
        className="
          pointer-events-none

          absolute

          -bottom-[50px]
          -right-[30px]

          h-[120px]
          w-[150px]

          rounded-full

          bg-blue-900/20

          blur-[50px]
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

          opacity-[0.22]

          [background-image:radial-gradient(rgba(210,200,255,0.75)_0.6px,transparent_0.6px)]

          [background-size:19px_19px]
        "
      />



      {/* ==================================================
          SECOND DOT LAYER
      ================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          opacity-[0.1]

          [background-image:radial-gradient(rgba(120,145,255,0.9)_0.5px,transparent_0.5px)]

          [background-position:8px_11px]

          [background-size:31px_31px]
        "
      />



      {/* ==================================================
          LARGE BACKGROUND ICON
      ================================================== */}

      <motion.div
        style={{
          rotate: backgroundRotate,
        }}
        className="
          pointer-events-none

          absolute

          left-1/2
          top-1/2

          -translate-x-1/2
          -translate-y-1/2
        "
      >

        <Icon
          strokeWidth={0.55}
          className="
            h-[125px]
            w-[125px]
            text-violet-200/[0.07]
          "
        />

      </motion.div>



      {/* ==================================================
          LEFT DECORATIVE LINE
      ================================================== */}

      <div
        className="
          absolute
          left-4
          top-1/2

          h-px
          w-[35px]

          -translate-y-1/2

          bg-gradient-to-r
          from-transparent
          to-violet-200/20
        "
      />



      {/* ==================================================
          MAIN ICON
      ================================================== */}

      <motion.div
        style={{
          x: iconX,
          y: iconY,
          rotate,
          scale: iconScale,
          filter: iconBlur,
        }}
        className="
          relative
          z-10

          flex

          h-[68px]
          w-[68px]

          items-center
          justify-center

          rounded-full

          border
          border-violet-100/[0.15]

          bg-black/30

          shadow-[0_0_30px_rgba(111,91,255,0.12)]

          backdrop-blur-md

          will-change-transform
        "
      >

        <Icon
          size={30}
          strokeWidth={1.1}
          className="text-violet-50/90"
        />

      </motion.div>



      {/* ==================================================
          RIGHT DECORATIVE LINE
      ================================================== */}

      <div
        className="
          absolute
          right-4
          top-1/2

          h-px
          w-[35px]

          -translate-y-1/2

          bg-gradient-to-l
          from-transparent
          to-violet-200/20
        "
      />



      {/* ==================================================
          SMALL LABEL
      ================================================== */}

      <div
        className="
          absolute
          bottom-[7px]
          left-1/2

          z-20

          -translate-x-1/2

          text-[7px]

          uppercase

          tracking-[0.3em]

          text-violet-100/35
        "
      >
        {label}
      </div>



      {/* ==================================================
          SUBTLE TOP SHINE
      ================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          bg-gradient-to-br

          from-white/[0.05]

          via-transparent

          to-violet-500/[0.06]
        "
      />



      {/* ==================================================
          INNER BORDER
      ================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          inset-[1px]

          rounded-[inherit]

          border
          border-white/[0.025]
        "
      />

    </div>
  );
}