"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

/* ============================================================
   IMAGE CONFIG

   Replace these URLs with your own images later.

   x / y positions are intentionally partially outside viewport.
============================================================ */

const floatingImages = [
  {
    id: 1,
    src: "/images/icons/Footer-2.png",
    side: "left",
    className:
      "left-[-3vw] bottom-[7%] w-[clamp(170px,19vw,330px)] aspect-[3/4]",
    rotate: 9,
    delay: 0.22,
  },
  {
    id: 2,
    src: "/images/icons/Footer-1.png",
    side: "right",
    className:
      "right-[-4vw] bottom-[5%] w-[clamp(180px,20vw,350px)] aspect-[3/4]",
    rotate: -8,
    delay: 0.28,
  },
];

/* ============================================================
   FOOTER
============================================================ */

export default function Footer() {
  const footerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"],
  });

  /* ----------------------------------------------------------
     PARALLAX
  ---------------------------------------------------------- */

  const titleY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [80, 0, -50]
  );

  const leftParallax = useTransform(
    scrollYProgress,
    [0, 1],
    [50, -70]
  );

  const rightParallax = useTransform(
    scrollYProgress,
    [0, 1],
    [-30, 70]
  );

  return (
    <footer
      ref={footerRef}
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
          BACKGROUND GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.18]
          [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)]
          [background-size:32px_32px]
        "
      />

      {/* ======================================================
          PURPLE GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-800/[0.10]
          blur-[180px]
        "
      />

      {/* ======================================================
          TOP BAR
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
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
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          z-30
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
        <div className="flex items-center gap-3">
          <span
            className="
              h-[6px]
              w-[6px]
              rounded-full
              bg-violet-300
              shadow-[0_0_12px_rgba(196,181,253,0.8)]
            "
          />

          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.28em]
              text-white/45
            "
          >
            Nirvana / IGDTUW
          </p>
        </div>

        <p
          className="
            hidden
            text-[10px]
            uppercase
            tracking-[0.28em]
            text-white/30
            md:block
          "
        >
          Design • Create • Experiment
        </p>
      </motion.div>

      {/* ======================================================
          FLOATING IMAGES
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-30
        "
      >
        {floatingImages.map((image) => (
          <FloatingImage
            key={image.id}
            image={image}
            leftParallax={leftParallax}
            rightParallax={rightParallax}
          />
        ))}
      </div>

      {/* ======================================================
          CENTER CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-20
          flex
          min-h-[calc(100vh-62px)]
          flex-col
          items-center
          justify-center
          px-6
          text-center
        "
      >
        {/* EYEBROW */}

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
            delay: 0.15,
          }}
          className="
            mb-8
            flex
            items-center
            gap-4
          "
        >
          <div
            className="
              h-px
              w-10
              bg-gradient-to-r
              from-transparent
              to-violet-300/70
            "
          />

          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-white/45
            "
          >
            Until the next idea
          </p>

          <div
            className="
              h-px
              w-10
              bg-gradient-to-l
              from-transparent
              to-violet-300/70
            "
          />
        </motion.div>

        {/* ==================================================
            HUGE TITLE
        ================================================== */}

        <motion.div
          style={{
            y: titleY,
          }}
          className="relative"
        >
          <motion.h2
            initial={{
              opacity: 0,
              y: 120,
              filter: "blur(14px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              select-none
              text-[clamp(6rem,17vw,18rem)]
              leading-[0.68]
              tracking-[-0.075em]
              text-white
            "
            style={{
              fontFamily: '"Instrument Serif", serif',
            }}
          >
            NIRVANA
          </motion.h2>

          {/* PURPLE GLOW UNDER TEXT */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-[-20%]
              left-1/2
              -z-10
              h-[100px]
              w-[70%]
              -translate-x-1/2
              bg-violet-600/10
              blur-[80px]
            "
          />
        </motion.div>

        {/* SUBTEXT */}

        <motion.p
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
            delay: 0.3,
          }}
          className="
            mt-12
            max-w-md
            text-sm
            font-light
            leading-7
            text-white/45
          "
        >
          A space for ideas that refuse to stay still.
          <br />
          Made by designers, dreamers and everything in between.
        </motion.p>

        {/* CTA */}

        <motion.a
          href="#"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          whileHover={{
            scale: 1.06,
          }}
          whileTap={{
            scale: 0.96,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="
            group
            mt-10
            flex
            h-14
            items-center
            gap-4
            rounded-full
            border
            border-violet-200/20
            bg-violet-200
            px-7
            text-black
            transition-colors
            duration-500
            hover:bg-white
          "
        >
          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.22em]
            "
          >
            Join Nirvana
          </span>

          <ArrowUpRight
            size={17}
            strokeWidth={1.4}
            className="
              transition-transform
              duration-500
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </motion.a>
      </div>

      {/* ======================================================
          BOTTOM BAR
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
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
          delay: 0.4,
        }}
        className="
          relative
          z-30
          grid
          border-t
          border-white/10
          md:grid-cols-[1fr_auto_1fr]
        "
      >
        {/* LEFT */}

        <div
          className="
            flex
            items-center
            px-6
            py-5
            md:px-10
            lg:px-14
          "
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-white/30
            "
          >
            © 2026 Nirvana
          </p>
        </div>

        {/* SOCIALS */}

        <div
          className="
            flex
            border-y
            border-white/10
            md:border-x
            md:border-y-0
          "
        >
          {["Instagram", "LinkedIn", "Behance"].map((item) => (
            <a
              key={item}
              href="#"
              className="
                group
                flex
                items-center
                gap-2
                border-r
                border-white/10
                px-6
                py-5
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-white/45
                transition-all
                duration-300
                last:border-r-0
                hover:bg-white
                hover:text-black
              "
            >
              {item}

              <ArrowUpRight
                size={11}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-[2px]
                  group-hover:-translate-y-[2px]
                "
              />
            </a>
          ))}
        </div>

        {/* RIGHT */}

        <div
          className="
            flex
            items-center
            justify-end
            px-6
            py-5
            md:px-10
            lg:px-14
          "
        >
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              group
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-white/30
              transition-colors
              hover:text-white
            "
          >
            Back to top ↑
          </button>
        </div>
      </motion.div>
    </footer>
  );
}

/* ============================================================
   FLOATING IMAGE
============================================================ */

function FloatingImage({
  image,
  leftParallax,
  rightParallax,
}) {
  const fromLeft = image.side === "left";

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: fromLeft ? -180 : 180,
        rotate: fromLeft
          ? image.rotate - 10
          : image.rotate + 10,
        scale: 0.82,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        rotate: image.rotate,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.05,
      }}
      transition={{
        duration: 1.1,
        delay: image.delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        y: fromLeft ? leftParallax : rightParallax,
      }}
      className={`
        absolute
        ${image.className}
      `}
    >
      <div
        className="
          relative
          h-full
          w-full
          overflow-hidden
          
          shadow-[0_30px_100px_rgba(0,0,0,0.7)]
        "
      >
        <motion.img
          src={image.src}
          alt="Nirvana"
          draggable={false}
          whileHover={{
            scale: 1.07,
          }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />

        {/* slight dark treatment */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
           
          "
        />
      </div>
    </motion.div>
  );
}