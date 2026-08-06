"use client";

import RightHeroCard from "./RightHeroCard";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-black p-6">
      <div className="flex h-[calc(100vh-48px)] w-full gap-4">

        {/* LEFT */}
        <div
          className="
            relative
            h-full
            flex-[2]
            overflow-hidden
           
            bg-cover
            bg-center
          "
          style={{
            backgroundImage: "url('/images/hero/hero-left.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/10" />

          <h1
            className="
              absolute
              bottom-6
              left-7
              z-10
              text-[clamp(5rem,12vw,7rem)]
              leading-[0.75]
              tracking-[-0.05em]
              text-white
            "
            style={{
              fontFamily: '"Instrument Serif", serif',
            }}
          >
            NIRVANA
          </h1>
        </div>

        {/* RIGHT */}
        <div className="h-full flex-1">
          <RightHeroCard />
        </div>

      </div>
    </section>
  );
}