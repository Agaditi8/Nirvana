"use client";

import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">

      {/* =====================================================
          OUR STORY
      ===================================================== */}

      <div className="mx-auto max-w-[1500px] px-6 pb-32 pt-28 md:px-12 lg:px-16 lg:pb-44 lg:pt-40">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex items-center gap-5"
        >
          <span className="text-[10px] uppercase tracking-[0.35em] text-white/40">
            01
          </span>

          <div className="h-px w-14 bg-white/20" />

          <span className="text-[10px] uppercase tracking-[0.35em] text-white/50">
            Our Story
          </span>
        </motion.div>


        {/* Main heading */}
        <div className="max-w-[1250px]">
          <motion.h2
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              text-[10vw]
              font-medium
              leading-[0.86]
              tracking-[-0.07em]
              md:text-[8vw]
              lg:text-[7vw]
            "
          >
            It started with
            <br />

            <span className="text-white/30">
              an idea.
            </span>
          </motion.h2>
        </div>


        {/* Story content */}
        <div
          className="
            mt-20
            grid
            gap-12
            border-t
            border-white/10
            pt-10
            md:grid-cols-12
            lg:mt-28
          "
        >

          {/* Empty space */}
          <div className="hidden md:col-span-5 md:block" />


          {/* Text */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.9,
            }}
            className="md:col-span-7 lg:col-span-6"
          >
            <p
              className="
                text-xl
                font-light
                leading-[1.55]
                tracking-[-0.02em]
                text-white/80
                md:text-2xl
                lg:text-[28px]
              "
            >
              Nirvana began as a space for people who believed that
              creativity could be more than just an idea on paper.
            </p>

            <p
              className="
                mt-8
                max-w-[650px]
                text-sm
                leading-[1.8]
                text-white/40
                md:text-base
              "
            >
              What started as a collective of curious minds grew into a
              community of designers, artists, storytellers and creators —
              each bringing their own perspective to the table. Together,
              we experiment, learn, collaborate and turn imagination into
              experiences that leave a mark.
            </p>
          </motion.div>

        </div>
      </div>


      {/* =====================================================
          DIVIDER
      ===================================================== */}

      <div className="mx-6 h-px bg-white/10 md:mx-12 lg:mx-16" />


      {/* =====================================================
          OUR AIM
      ===================================================== */}

      <div className="mx-auto max-w-[1500px] px-6 py-32 md:px-12 lg:px-16 lg:py-44">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex items-center gap-5"
        >
          <span className="text-[10px] uppercase tracking-[0.35em] text-white/40">
            02
          </span>

          <div className="h-px w-14 bg-white/20" />

          <span className="text-[10px] uppercase tracking-[0.35em] text-white/50">
            Our Aim
          </span>
        </motion.div>


        {/* Aim heading */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            max-w-[1300px]
            text-[9vw]
            font-medium
            leading-[0.9]
            tracking-[-0.065em]
            md:text-[7vw]
            lg:text-[6vw]
          "
        >
          To make creativity
          <br />

          <span className="text-[#8170ff]">
            impossible to ignore.
          </span>
        </motion.h2>


        {/* =================================================
            AIM DETAILS
        ================================================= */}

        <div
          className="
            mt-24
            grid
            border-t
            border-white/10
            md:grid-cols-3
            lg:mt-32
          "
        >

          {/* 01 */}
          <AimCard
            number="01"
            title="Create"
            text="To transform ideas into visual experiences that are thoughtful, expressive and memorable."
          />

          {/* 02 */}
          <AimCard
            number="02"
            title="Collaborate"
            text="To bring together people with different perspectives and give them a space to build something together."
          />

          {/* 03 */}
          <AimCard
            number="03"
            title="Explore"
            text="To keep experimenting with new ideas, mediums and possibilities without being afraid to make something different."
          />

        </div>
      </div>

    </section>
  );
}


/* ============================================================
   AIM CARD
============================================================ */

function AimCard({ number, title, text }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        group
        relative
        border-b
        border-white/10
        py-10
        md:min-h-[330px]
        md:border-b-0
        md:border-r
        md:px-8
        md:last:border-r-0
        lg:px-10
      "
    >

      {/* number */}
      <span
        className="
          text-[10px]
          tracking-[0.25em]
          text-white/30
        "
      >
        {number}
      </span>


      {/* title */}
      <h3
        className="
          mt-16
          text-4xl
          font-medium
          tracking-[-0.05em]
          transition-colors
          duration-300
          group-hover:text-[#8170ff]
          md:mt-24
          lg:text-5xl
        "
      >
        {title}
      </h3>


      {/* text */}
      <p
        className="
          mt-6
          max-w-[330px]
          text-sm
          leading-[1.8]
          text-white/40
        "
      >
        {text}
      </p>


      {/* hover purple line */}
      <div
        className="
          absolute
          left-0
          top-[-1px]
          h-[1px]
          w-0
          bg-[#8170ff]
          transition-all
          duration-500
          group-hover:w-full
        "
      />

    </motion.div>
  );
}