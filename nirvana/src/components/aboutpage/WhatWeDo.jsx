"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "VISUAL DESIGN",
    description:
      "We turn ideas into visual experiences through posters, campaigns, illustrations, social media and digital design.",
  },
  {
    number: "02",
    title: "BRANDING",
    description:
      "From identity systems to typography and visual language, we create identities that feel distinct and memorable.",
  },
  {
    number: "03",
    title: "UI / UX",
    description:
      "We explore interfaces, interactions and digital experiences with a focus on clarity, usability and visual expression.",
  },
  {
    number: "04",
    title: "CREATIVE DIRECTION",
    description:
      "We bring concepts together through art direction, storytelling and a consistent visual language.",
  },
  {
    number: "05",
    title: "EXPERIMENTATION",
    description:
      "3D, motion, photography, generative visuals and everything in between. We make room for experimentation.",
  },
];

const ease = [0.16, 1, 0.3, 1];

export default function WhatWeDo() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /*
   * DESKTOP ONLY
   *
   * The right side moves upward while
   * the left side stays completely static.
   */
  const servicesY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-72%"]
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        bg-[var(--color-black)]
      "
    >

      {/* =====================================================
          DESKTOP
          Sticky parallax experience
      ===================================================== */}

      <div
        className="
          hidden
          lg:block
          relative
          h-[500vh]
          w-full
        "
      >

        <div
          className="
            sticky
            top-0
            h-screen
            w-full
            overflow-hidden
          "
        >

          {/* =================================================
              BACKGROUND NOISE
          ================================================= */}

          <div className="noise z-0 opacity-[0.06]" />


          {/* =================================================
              DARK VIOLET ATMOSPHERE
          ================================================= */}

          <div
            className="
              violet-glow-soft
              pointer-events-none
              absolute
              left-[18%]
              top-1/2
              z-0
              h-[500px]
              w-[500px]
              -translate-y-1/2
              rounded-full
              opacity-80
            "
          />


          {/* =================================================
              LEFT SIDE — STATIC
          ================================================= */}

          <div
            className="
              absolute
              left-0
              top-0
              z-10
              flex
              h-full
              w-1/2
              items-center
              px-12
              lg:px-20
            "
          >

            <div className="max-w-[650px]">

              {/* Label */}

              <motion.span
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
                  ease,
                }}
                className="
                  text-micro
                  text-subtle
                "
              >
                04 — What We Do
              </motion.span>


              {/* Heading */}

              <h2
                className="
                  text-display-lg
                  mt-8
                  text-primary
                "
              >
                WHAT WE
                <br />

                <span className="text-subtle">
                  CAN CREATE
                </span>
              </h2>


              {/* Description */}

              <p
                className="
                  text-body-lg
                  mt-10
                  max-w-[420px]
                  text-muted
                "
              >
                From visual identities to digital experiences,
                we explore different ways to turn ideas into
                something people can see, feel and remember.
              </p>

            </div>

          </div>


          {/* =================================================
              VERTICAL DIVIDER
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-12
              left-1/2
              top-12
              z-10
              w-px
              bg-[var(--color-border)]
            "
          />


          {/* =================================================
              RIGHT SIDE — PARALLAX VIEWPORT
          ================================================= */}

          <div
            className="
              absolute
              right-0
              top-0
              z-10
              h-full
              w-1/2
              overflow-hidden
            "
          >

            {/* TOP FADE */}

            <div
              className="
                pointer-events-none
                absolute
                left-0
                right-0
                top-0
                z-20
                h-32
                bg-gradient-to-b
                from-[var(--color-black)]
                to-transparent
              "
            />


            {/* MOVING SERVICES */}

            <motion.div
              style={{
                y: servicesY,
              }}
              className="
                absolute
                left-0
                top-0
                w-full
              "
            >
              {services.map((service) => (
                <ServiceItem
                  key={service.number}
                  service={service}
                />
              ))}
            </motion.div>


            {/* BOTTOM FADE */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                left-0
                right-0
                z-20
                h-40
                bg-gradient-to-t
                from-[var(--color-black)]
                to-transparent
              "
            />

          </div>

        </div>

      </div>


      {/* =====================================================
          MOBILE + TABLET
          Normal scrolling layout
      ===================================================== */}

      <div
        className="
          block
          w-full
          lg:hidden
        "
      >

        {/* =================================================
            BACKGROUND
        ================================================= */}

        <div className="pointer-events-none absolute inset-0">

          <div className="noise z-0 opacity-[0.05]" />

          <div
            className="
              violet-glow-soft
              absolute
              left-[-20%]
              top-[5%]
              h-[350px]
              w-[350px]
              rounded-full
              opacity-50
            "
          />

        </div>


        {/* =================================================
            CONTENT
        ================================================= */}

        <div
          className="
            relative
            z-10
            px-5
            py-24

            sm:px-8
            sm:py-28
          "
        >

          {/* =================================================
              INTRO
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease,
            }}
          >

            {/* Label */}

            <span className="text-micro text-subtle">
              04 — What We Do
            </span>


            {/* Heading */}

            <h2
              className="
                mt-6
                text-[clamp(3.1rem,12vw,5rem)]
                leading-[0.8]
                tracking-[-0.055em]
                text-primary

                sm:mt-8
                sm:text-display-lg
              "
            >
              WHAT WE
              <br />

              <span className="text-subtle">
                CAN CREATE
              </span>
            </h2>


            {/* Description */}

            <p
              className="
                text-body
                mt-7
                max-w-[440px]
                leading-6
                text-muted

                sm:mt-10
                sm:text-body-lg
                sm:leading-7
              "
            >
              From visual identities to digital experiences,
              we explore different ways to turn ideas into
              something people can see, feel and remember.
            </p>

          </motion.div>


          {/* =================================================
              MOBILE SERVICE LIST
          ================================================= */}

          <div className="mt-14 sm:mt-20">

            {services.map((service, index) => (
              <MobileServiceItem
                key={service.number}
                service={service}
                index={index}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   DESKTOP SERVICE ITEM
========================================================= */

function ServiceItem({ service }) {
  return (
    <motion.div
      className="
        group
        flex
        min-h-[230px]
        w-full
        flex-col
        justify-center
        border-b
        border-[var(--color-border)]
        px-10
        lg:px-14
      "
    >

      {/* NUMBER */}

      <span
        className="
          text-caption
          mb-4
          text-subtle
        "
      >
        {service.number}
      </span>


      {/* TITLE */}

      <h3
        className="
          text-h2
          text-primary
          transition-transform
          duration-500
          group-hover:translate-x-3
        "
      >
        {service.title}
      </h3>


      {/* DESCRIPTION */}

      <div
        className="
          mt-6
          flex
          items-end
          justify-between
          gap-6
        "
      >

        <p
          className="
            text-body
            max-w-[400px]
            text-muted
            transition-colors
            duration-500
            group-hover:text-primary
          "
        >
          {service.description}
        </p>


        {/* Arrow */}

        <motion.span
          className="
            hidden
            text-3xl
            text-[var(--color-violet-muted)]
            md:block
          "
          whileHover={{
            x: 8,
            y: -8,
          }}
        >
          ↗
        </motion.span>

      </div>

    </motion.div>
  );
}


/* =========================================================
   MOBILE SERVICE ITEM
========================================================= */

function MobileServiceItem({
  service,
  index,
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 45,
        filter: "blur(6px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.75,
        delay: index * 0.05,
        ease,
      }}
      className="
        group
        relative
        border-t
        border-[var(--color-border)]
        py-7

        sm:py-9
      "
    >

      {/* =================================================
          TOP ROW
      ================================================= */}

      <div
        className="
          mb-4
          flex
          items-center
          justify-between
        "
      >

        <span className="text-caption text-subtle">
          {service.number}
        </span>

        <motion.span
          initial={{
            opacity: 0,
            x: 5,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2 + index * 0.05,
            duration: 0.5,
          }}
          className="
            text-lg
            text-[var(--color-violet-muted)]
          "
        >
          ↗
        </motion.span>

      </div>


      {/* =================================================
          TITLE
      ================================================= */}

      <h3
        className="
          text-[clamp(2rem,8vw,3rem)]
          leading-[0.85]
          tracking-[-0.045em]
          text-primary
          transition-transform
          duration-500
          group-hover:translate-x-1

          sm:text-h2
        "
      >
        {service.title}
      </h3>


      {/* =================================================
          DESCRIPTION
      ================================================= */}

      <p
        className="
          text-body-sm
          mt-4
          max-w-[500px]
          leading-5
          text-muted

          sm:mt-5
          sm:text-body
          sm:leading-6
        "
      >
        {service.description}
      </p>


      {/* =================================================
          ACCENT
      ================================================= */}

      <motion.div
        initial={{
          width: 18,
        }}
        whileInView={{
          width: 32,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
          delay: 0.15 + index * 0.05,
          ease,
        }}
        className="
          mt-6
          h-px
          bg-[var(--color-violet-muted)]
          opacity-60
        "
      />

    </motion.article>
  );
}