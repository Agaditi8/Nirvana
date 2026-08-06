"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const floatingImages = [
  {
    src: "https://picsum.photos/seed/nirvana1/400/400",
    className: "left-[5%] top-[18%] w-[110px] h-[110px]",
  },
  {
    src: "https://picsum.photos/seed/nirvana2/400/400",
    className: "left-[17%] top-[48%] w-[75px] h-[75px]",
  },
  {
    src: "https://picsum.photos/seed/nirvana3/400/400",
    className: "right-[7%] top-[22%] w-[100px] h-[100px]",
  },
  {
    src: "https://picsum.photos/seed/nirvana4/400/400",
    className: "right-[19%] top-[52%] w-[70px] h-[70px]",
  },
  {
    src: "https://picsum.photos/seed/nirvana5/400/400",
    className: "left-[28%] top-[12%] w-[55px] h-[55px]",
  },
  {
    src: "https://picsum.photos/seed/nirvana6/400/400",
    className: "right-[30%] top-[14%] w-[60px] h-[60px]",
  },
];

/* ============================================================
   FLOATING IMAGE
============================================================ */

function FloatingImage({ image, index, scrollYProgress }) {
  /*
    Each circle gets a slightly later exit point.

    Circle 1 → disappears first
    Circle 2 → next
    Circle 3 → next
    ...
  */

  const start = 0.08 + index * 0.055;
  const end = start + 0.22;

  const opacity = useTransform(
    scrollYProgress,
    [start, end],
    [1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [start, end],
    [0, -100 - index * 12]
  );

  const scale = useTransform(
    scrollYProgress,
    [start, end],
    [1, 0.8]
  );

  return (
    <motion.div
      style={{
        opacity,
        y,
        scale,
      }}
      className={`
        absolute
        z-20
        overflow-hidden
        rounded-full
        border
        border-white/20
        bg-neutral-900
        ${image.className}
      `}
    >
      <img
        src={image.src}
        alt=""
        className="
          h-full
          w-full
          object-cover
          grayscale
          transition-all
          duration-500
          hover:scale-110
          hover:grayscale-0
        "
      />
    </motion.div>
  );
}

/* ============================================================
   HERO
============================================================ */

export default function Hero() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,

    /*
      Animation begins while the hero is at the top
      and finishes as we move through the section.
    */
    offset: ["start start", "end start"],
  });

  /* ============================================================
     ABOUT US EXIT
  ============================================================ */

  const titleY = useTransform(
    scrollYProgress,
    [0, 0.32],
    [0, -140]
  );

  const titleOpacity = useTransform(
    scrollYProgress,
    [0.08, 0.3],
    [1, 0]
  );

  /* ============================================================
     CENTER IMAGE EXIT
  ============================================================ */

  const centerY = useTransform(
    scrollYProgress,
    [0.18, 0.55],
    [0, -130]
  );

  const centerOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.48],
    [1, 0]
  );

  const centerScale = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    [1, 0.85]
  );

  /* ============================================================
     CENTER TEXT EXIT
  ============================================================ */

  const centerTextY = useTransform(
    scrollYProgress,
    [0.15, 0.4],
    [0, -80]
  );

  const centerTextOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.35],
    [1, 0]
  );

  /* ============================================================
     ORBITS
  ============================================================ */

  const orbitOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.6],
    [1, 0]
  );

  const orbitY = useTransform(
    scrollYProgress,
    [0, 0.6],
    [0, -70]
  );

  return (
    /*
      Taller wrapper gives the animation scroll distance.
    */
    <section
      ref={heroRef}
      className="relative h-[140vh] bg-black"
    >

      {/* ======================================================
          STICKY HERO
      ====================================================== */}

      <div
        className="
          sticky
          top-0
          h-screen
          w-full
          overflow-hidden
          bg-black
          text-white
        "
      >

        {/* ====================================================
            PURPLE GLOW
        ==================================================== */}

        <div
          className="
            absolute
            left-1/2
            top-[42%]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#6F5BFF]/10
            blur-[140px]
          "
        />

        {/* ====================================================
            ORBIT LINES
        ==================================================== */}

        <motion.div
          style={{
            opacity: orbitOpacity,
            y: orbitY,
          }}
          className="
            absolute
            left-1/2
            top-[43%]
            h-[620px]
            w-[1100px]
            -translate-x-1/2
            -translate-y-1/2
            rotate-[5deg]
            rounded-[50%]
            border
            border-white/[0.08]
          "
        />

        <motion.div
          style={{
            opacity: orbitOpacity,
            y: orbitY,
          }}
          className="
            absolute
            left-1/2
            top-[43%]
            h-[450px]
            w-[850px]
            -translate-x-1/2
            -translate-y-1/2
            -rotate-[8deg]
            rounded-[50%]
            border
            border-white/[0.06]
          "
        />

        {/* ====================================================
            FLOATING IMAGES
        ==================================================== */}

        {floatingImages.map((image, index) => (
          <FloatingImage
            key={index}
            image={image}
            index={index}
            scrollYProgress={scrollYProgress}
          />
        ))}

        {/* ====================================================
            CENTER IMAGE
        ==================================================== */}

        <motion.div
          style={{
            opacity: centerOpacity,
            y: centerY,
            scale: centerScale,
          }}
          className="
            absolute
            left-1/2
            top-[42%]
            z-10
            h-[390px]
            w-[390px]
            -translate-x-1/2
            -translate-y-1/2
            overflow-hidden
            rounded-full
            border
            border-white/10
            bg-neutral-900
            md:h-[440px]
            md:w-[440px]
          "
        >
          <img
            src="https://picsum.photos/seed/nirvana-main/800/800"
            alt=""
            className="
              h-full
              w-full
              object-cover
              grayscale
              opacity-80
            "
          />

          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        {/* ====================================================
            CENTER TEXT
        ==================================================== */}

        <motion.div
          style={{
            opacity: centerTextOpacity,
            y: centerTextY,
          }}
          className="
            absolute
            left-1/2
            top-[42%]
            z-30
            -translate-x-1/2
            -translate-y-1/2
            text-center
          "
        >
          <p
            className="
              mb-3
              text-[9px]
              uppercase
              tracking-[0.45em]
              text-white/60
            "
          >
            The Design Society
          </p>

          <h2
            className="
              text-3xl
              font-medium
              tracking-[-0.04em]
              text-white
            "
          >
            NIRVANA
          </h2>
        </motion.div>

        {/* ====================================================
            DECORATIVE DOTS
        ==================================================== */}

        <motion.div
          style={{ opacity: orbitOpacity }}
          className="absolute left-[11%] top-[52%] h-[3px] w-[3px] rounded-full bg-white/40"
        />

        <motion.div
          style={{ opacity: orbitOpacity }}
          className="absolute left-[34%] top-[24%] h-[3px] w-[3px] rounded-full bg-white/30"
        />

        <motion.div
          style={{ opacity: orbitOpacity }}
          className="absolute right-[12%] top-[48%] h-[3px] w-[3px] rounded-full bg-white/40"
        />

        <motion.div
          style={{ opacity: orbitOpacity }}
          className="absolute right-[34%] top-[19%] h-[3px] w-[3px] rounded-full bg-white/30"
        />

        {/* ====================================================
            ABOUT US
        ==================================================== */}

        <div
          className="
            absolute
            bottom-[-8px]
            left-0
            z-40
            w-full
            overflow-hidden
            px-[3vw]
          "
        >
          <motion.h1
            style={{
              y: titleY,
              opacity: titleOpacity,
            }}
            className="
              whitespace-nowrap
              text-center
              text-[15vw]
              font-semibold
              leading-[0.82]
              tracking-[-0.075em]
              text-white
            "
          >
            About us
          </motion.h1>
        </div>

      </div>
    </section>
  );
}