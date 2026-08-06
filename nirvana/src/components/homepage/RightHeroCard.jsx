"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function RightHeroCard() {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="
        group
        relative
        h-full
        w-full
        overflow-hidden
        
        border
        border-white/[0.08]
        bg-[#050507]
        text-white
      "
    >
      {/* ==================================================
          DARK SPACE BACKGROUND
      ================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_25%_15%,rgba(63,50,120,0.25),transparent_32%),radial-gradient(circle_at_85%_65%,rgba(22,43,86,0.3),transparent_38%),radial-gradient(circle_at_50%_100%,rgba(54,30,78,0.2),transparent_40%),linear-gradient(145deg,#07070a_0%,#0b0912_45%,#05070d_100%)]
        "
      />


      {/* SECOND SMALLER DOT LAYER */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-20
          [background-image:radial-gradient(rgba(150,150,255,0.7)_0.5px,transparent_0.5px)]
          [background-position:8px_11px]
          [background-size:31px_31px]
        "
      />

      {/* ==================================================
          TOP BAR
      ================================================== */}

      <div
        className="
          absolute
          left-5
          right-5
          top-5
          z-30
          flex
          items-center
          justify-between
        "
      >
        <div className="flex items-center gap-2">

          {/* LIVE DOT */}

          <motion.span
            animate={{
              opacity: [1, 0.35, 1],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              h-[6px]
              w-[6px]
              
              bg-[#aaa0ff]
            "
          />

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.28em]
              text-white/60
            "
          >
            Happening Now
          </span>

        </div>


      </div>


      {/* ==================================================
          EVENT POSTER
      ================================================== */}  

<div
  className="
    absolute
    left-1/2
    top-[12%]
    z-20
    h-[42%]
    w-[68%]
    -translate-x-1/2
    overflow-hidden
    
    border
    border-white/10
    bg-black
    shadow-[0_25px_60px_rgba(0,0,0,0.6)]
  "
>
  <img
    src="/images/events/mentorship/MainPRImage.png"
    alt="Current Nirvana Event"
    className="
      h-full
      w-full
      object-cover
      object-center
    "
  />
</div>


      {/* ==================================================
          POSTER GLOW BEHIND
      ================================================== */}

      <div
        className="
          absolute
          left-[18%]
          right-[18%]
          top-[24%]
          z-10
          h-[30%]
          
          bg-[#32285c]/25
          blur-[70px]
        "
      />


      {/* ==================================================
          BOTTOM EVENT INFORMATION
      ================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-20
          p-5
        "
      >

        {/* LINE */}

        <div className="mb-4 h-px w-full bg-white/10" />


        {/* EVENT NUMBER + DATE */}

        <div
          className="
            mb-3
            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-white/35
            "
          >
            Current Event / 01
          </span>

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-white/35
            "
          >
            12 — 18 AUG
          </span>
        </div>


        {/* EVENT NAME */}

        <h2
          className="
            text-[clamp(2.3rem,3.8vw,4.2rem)]
            leading-[0.83]
            tracking-[-0.045em]
          "
          style={{
            fontFamily: '"Instrument Serif", serif',
          }}
        >
          UI/UX
          <br />
          <span className="text-white/45">
            MentorShip
          </span>
        </h2>


        {/* DESCRIPTION */}

        <p
          className="
            mt-3
            max-w-[320px]
            text-[11px]
            leading-[1.55]
            text-white/40
          "
        >
          Explore, experiment and create something unexpected
          with Nirvana.
        </p>


        {/* ==================================================
            JOIN EVENT
        ================================================== */}

        <motion.a
          href="https://chat.whatsapp.com/ImoVWQe1jslG5O72ubUnq2"
          variants={{
            rest: {
              backgroundColor: "rgba(255,255,255,0.06)",
            },

            hover: {
              backgroundColor: "rgba(255,255,255,0.11)",
            },
          }}
          className="
            mt-5
            flex
            w-full
            items-center
            justify-between
            
            border
            border-white/10
            px-4
            py-3
            backdrop-blur-md
          "
        >

          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.22em]
                text-white/35
              "
            >
              Registrations open
            </p>

            <p
              className="
                mt-1
                text-[16px]
                text-white
              "
              style={{
                fontFamily: '"Instrument Serif", serif',
              }}
            >
              Join the event
            </p>
          </div>


          {/* ARROW */}

          <motion.div
            variants={{
              rest: {
                x: 0,
                y: 0,
                rotate: 0,
              },

              hover: {
                x: 3,
                y: -3,
                rotate: 45,
              },
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              
            "
          >
            <ArrowUpRight
              size={18}
              strokeWidth={1.2}
            />
          </motion.div>

        </motion.a>

      </div>
    </motion.div>
  );
}