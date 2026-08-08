"use client";

import RightHeroCard from "./RightHeroCard";

export default function Hero() {
  return (
    <section className="w-full bg-[var(--color-black)]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <div
        className="
          relative
          flex
          min-h-[100svh]
          w-full
          flex-col
          md:h-screen
          md:flex-row
        "
      >

        {/* =================================================
            LEFT — IMAGE
        ================================================= */}

        <div
          className="
            group
            relative
            h-[44svh]
            min-h-[300px]
            w-full
            shrink-0
            overflow-hidden
            bg-[var(--color-surface)]
            bg-cover
            bg-center

            md:h-full
            md:min-h-0
            md:w-auto
            md:flex-[2]
          "
          style={{
            backgroundImage:
              "url('/images/hero/hero-left.png')",
          }}
        >

          {/* Dark treatment */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-black/15
              transition-opacity
              duration-700
              group-hover:bg-black/5
            "
          />

          {/* Dark violet atmosphere */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-[radial-gradient(circle_at_70%_40%,rgba(56,32,68,0.16),transparent_55%)]
              opacity-80
            "
          />

          {/* =================================================
              TITLE
          ================================================= */}

          <h1
            className="
              text-[clamp(3.5rem,16vw,6rem)]
              absolute
              bottom-4
              left-4
              z-10
              leading-[0.78]
              tracking-[-0.06em]
              text-primary

              sm:bottom-5
              sm:left-6
              sm:text-[clamp(4rem,14vw,7rem)]

              md:bottom-6
              md:left-10
              md:text-display-xl

              lg:left-12
            "
          >
            NIRVANA
          </h1>

        </div>


        {/* =================================================
            RIGHT — HERO CARD
        ================================================= */}

        <div
          className="
            relative
            h-[56svh]
            min-h-[430px]
            w-full
            shrink-0

            border-t
            border-[var(--color-border)]

            md:h-full
            md:min-h-0
            md:w-auto
            md:flex-1
            md:border-l
            md:border-t-0
          "
        >
          <RightHeroCard />
        </div>

      </div>
    </section>
  );
}