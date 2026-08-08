"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { coreTeam } from "@/data/team/core";

const ease = [0.16, 1, 0.3, 1];

export default function CoreTeam() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[var(--color-black)]
        px-5
        py-32
        text-primary
        md:px-10
        md:py-40
        lg:px-14
        lg:py-48
      "
    >
      {/* =====================================================
          SUBTLE BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.07]
          [background-image:radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)]
          [background-size:32px_32px]
        "
      />

      {/* Muted violet atmosphere */}

      <div
        className="
          pointer-events-none
          absolute
          left-[35%]
          top-[20%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[radial-gradient(circle,rgba(61,45,82,0.14),transparent_68%)]
          blur-[130px]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* ==================================================
            HEADING
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="
            mb-24
            max-w-[1000px]
            md:mb-20
          "
        >
          <p
            className="
              text-micro
              mb-7
              text-[var(--color-violet-muted)]
            "
          >
            THE PEOPLE
          </p>

          <h2
            className="
              text-display-lg
              leading-[0.76]
              text-primary
            "
          >
            CORE
            <br />

            <span className="text-muted">
              TEAM.
            </span>
          </h2>

          <p
            className="
              text-body-lg
              mt-9
              max-w-[500px]
              leading-7
              text-muted
            "
          >
            The people shaping the vision, culture and
            creative direction of Nirvana.
          </p>
        </motion.div>


        {/* ==================================================
            CARD TRACK
        ================================================== */}

        <div className="relative w-full overflow-visible">

          <div
            className="
              flex
              gap-4
              overflow-x-auto
              pb-8
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
              md:gap-5
              lg:gap-6
            "
          >
            {coreTeam.map((member, index) => (
              <CoreCard
                key={member.id}
                member={member}
                index={index}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}


/* ============================================================
   CORE CARD
============================================================ */

function CoreCard({ member, index }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease,
      }}
      whileHover={{
        y: -12,
        transition: {
          duration: 0.45,
          ease,
        },
      }}
      className="
        group
        relative
        w-[280px]
        shrink-0
        cursor-pointer
        overflow-hidden
        bg-[#d9d8da]
        text-black
        md:w-[310px]
        lg:w-[330px]
      "
    >

      {/* ==================================================
          IMAGE
      ================================================== */}

      <div
        className="
          relative
          aspect-[0.82]
          w-full
          overflow-hidden
          bg-[#111]
        "
      >
        <img
          src={member.image}
          alt={member.name}
          draggable="false"
          className="
            h-full
            w-full
            object-cover
            grayscale
            opacity-90
            transition-all
            duration-700
            ease-out
            group-hover:scale-105
            group-hover:grayscale-0
            group-hover:opacity-100
          "
        />

        {/* Subtle dark gradient */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/30
            via-transparent
            to-transparent
            opacity-70
          "
        />
      </div>


      {/* ==================================================
          INFORMATION
      ================================================== */}

      <div
        className="
          relative
          px-5
          py-5
          md:px-6
          md:py-6
        "
      >

        {/* Name + LinkedIn */}

        <div
          className="
            flex
            items-start
            justify-between
            gap-4
          "
        >

          <h3
            className="
              max-w-[220px]
              text-lg
              font-medium
              uppercase
              leading-[0.95]
              tracking-[-0.025em]
              md:text-xl
            "
          >
            {member.name}
          </h3>


        </div>


        {/* ==================================================
            META
        ================================================== */}

        <div
          className="
            mt-8
            flex
            items-end
            justify-between
          "
        >

          {/* Branch */}

          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.14em]
                text-black/45
              "
            >
              BRANCH
            </p>

            <p
              className="
                mt-1
                text-xs
                uppercase
                tracking-[0.08em]
                text-black/75
              "
            >
              {member.branch}
            </p>
          </div>


          {/* Year */}

          <div className="text-right">

            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.14em]
                text-black/45
              "
            >
              YEAR
            </p>

            <p
              className="
                mt-1
                text-xs
                uppercase
                tracking-[0.08em]
                text-black/75
              "
            >
              {member.year}
            </p>

          </div>

        </div>


        {/* ==================================================
            BOTTOM ARROW
        ================================================== */}

        <div
          className="
            mt-6
            flex
            justify-end
            border-t
            border-black/10
            pt-4
          "
        >
          <motion.div
            initial={{
              x: 0,
              y: 0,
            }}
            whileHover={{
              x: 4,
              y: -4,
            }}
            className="text-black/40"
          >
            <ArrowUpRight
              size={18}
              strokeWidth={1.4}
            />
          </motion.div>
        </div>

      </div>

    </motion.article>
  );
}