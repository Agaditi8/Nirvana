"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MousePointer2 } from "lucide-react";

/* ============================================================
   JOIN COMMUNITY
============================================================ */

export default function JoinCommunity() {
  return (
    <section
      className="
        relative
        h-auto
        min-h-screen
        w-full
        overflow-hidden
        bg-[#050505]
        text-white
        lg:h-screen
        lg:min-h-[720px]
      "
    >
      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.13]
          [background-image:radial-gradient(rgba(255,255,255,0.16)_0.7px,transparent_0.7px)]
          [background-size:28px_28px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[15%]
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-violet-800/[0.10]
          blur-[150px]
        "
      />

      {/* ======================================================
          TOP BAR
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          z-30
          flex
          h-[64px]
          items-center
          justify-between
          border-b
          border-white/10
          px-6
          md:px-10
          lg:px-12
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
              tracking-[0.3em]
              text-white/45
            "
          >
            Nirvana / Recruitment
          </p>
        </div>

        <p
          className="
            hidden
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-white/25
            sm:block
          "
        >
          Applications Open
        </p>
      </motion.div>

      {/* ======================================================
          MAIN GRID
      ====================================================== */}

      <div
        className="
          relative
          z-10
          grid
          lg:h-[calc(100%-64px)]
          lg:grid-cols-[41%_59%]
        "
      >
        {/* ==================================================
            LEFT SIDE
        ================================================== */}

        <div
          className="
            relative
            flex
            min-h-[650px]
            flex-col
            justify-between
            border-b
            border-white/10
            px-7
            py-10
            md:px-10
            lg:min-h-0
            lg:border-b-0
            lg:border-r
            lg:px-12
            lg:py-12
          "
        >
          {/* TOP COPY */}

          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                mb-7
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-violet-300
                "
              >
                01
              </span>

              <div
                className="
                  h-px
                  w-12
                  bg-gradient-to-r
                  from-violet-300/70
                  to-transparent
                "
              />

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-white/30
                "
              >
                Join Us
              </span>
            </motion.div>

            {/* HEADING */}

            <div className="overflow-hidden">
              <motion.h2
                initial={{
                  y: 100,
                  rotate: 2,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  rotate: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  max-w-[600px]
                  text-[clamp(4.8rem,7.4vw,8rem)]
                  leading-[0.76]
                  tracking-[-0.055em]
                "
                style={{
                  fontFamily: '"Instrument Serif", serif',
                }}
              >
                Become our 
                <br />

                <span className="text-violet-200/55">
                  Techie
                </span>
              </motion.h2>
            </div>

            {/* DESCRIPTION */}

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="
                mt-8
                max-w-[390px]
                text-sm
                font-light
                leading-7
                text-white/40
              "
            >
              Interact with the website on your right to see your web designing potential. There&apos;s
              probably a place for you here.

              You can Edit text , shuffle images , shuffle sections. Go explore!
            </motion.p>
          </div>

          {/* ==================================================
              CTA AREA
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
            className="mt-12"
          >
            <p
              className="
                mb-4
                text-[9px]
                uppercase
                tracking-[0.28em]
                text-white/25
              "
            >
              Ready when you are
            </p>

            <div className="flex flex-col gap-2 sm:flex-row">
              {/* PRIMARY */}

              <a
                href="#"
                className="
                  group
                  flex
                  h-[68px]
                  flex-1
                  items-center
                  justify-between
                  bg-violet-200
                  px-6
                  text-black
                  transition-colors
                  duration-500
                  hover:bg-white
                "
              >
                <span
                  className="
                    text-sm
                    uppercase
                    tracking-[0.14em]
                  "
                >
                  Fill the form
                </span>

                <ArrowUpRight
                  size={20}
                  strokeWidth={1.4}
                  className="
                    transition-transform
                    duration-500
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>

              {/* SECONDARY */}

              <a
                href="#"
                className="
                  group
                  flex
                  h-[68px]
                  flex-1
                  items-center
                  justify-between
                  border
                  border-white/10
                  px-6
                  transition-all
                  duration-500
                  hover:border-white/30
                  hover:bg-white/[0.06]
                "
              >
                <span
                  className="
                    text-sm
                    uppercase
                    tracking-[0.14em]
                    text-white/65
                  "
                >
                  Meet the team
                </span>

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.3}
                  className="
                    text-white/50
                    transition-transform
                    duration-500
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>
            </div>

            <div
              className="
                mt-5
                flex
                items-center
                justify-between
              "
            >
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-white/20
                "
              >
                Design / Content / Events / PR
              </p>

              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-white/20
                "
              >
                IGDTUW
              </p>
            </div>
          </motion.div>
        </div>

        {/* ==================================================
            RIGHT SIDE — DESIGN PLAYGROUND
        ================================================== */}

        <WebsitePreview />
      </div>
    </section>
  );
}

/* ============================================================
   WEBSITE PREVIEW
============================================================ */

function WebsitePreview() {
  const [view, setView] = useState("desktop");

  const initialSections = [
    {
      id: "hero-1",
      type: "hero",
      title: "Ideas deserve room to play.",
      description:
        "A student-led collective exploring visual culture, communication and experimental design.",
      image: "https://picsum.photos/seed/nirvana-builder-hero/900/1100",
    },
    {
      id: "gallery-1",
      type: "gallery",
      title: "Selected work",
      images: [
        "https://picsum.photos/seed/nirvana-b1/600/800",
        "https://picsum.photos/seed/nirvana-b2/600/800",
        "https://picsum.photos/seed/nirvana-b3/600/800",
      ],
    },
    {
      id: "cta-1",
      type: "cta",
      title: "Made by curious people.",
      button: "Join Nirvana",
    },
  ];

  const [sections, setSections] = useState(initialSections);

  const addSection = (type) => {
    const id = `${type}-${Date.now()}`;

    const templates = {
      hero: {
        id,
        type: "hero",
        title: "Make something memorable.",
        description:
          "Experiment, explore and turn your ideas into something real.",
        image: `https://picsum.photos/seed/${id}/900/1100`,
      },

      text: {
        id,
        type: "text",
        eyebrow: "Our story",
        title: "Design is how we make sense of things.",
        description:
          "Nirvana is a space for designers, artists and curious people to explore ideas together.",
      },

      image: {
        id,
        type: "image",
        image: `https://picsum.photos/seed/${id}/1200/700`,
        caption: "A little moment from Nirvana.",
      },

      gallery: {
        id,
        type: "gallery",
        title: "Selected work",
        images: [
          `https://picsum.photos/seed/${id}-1/600/800`,
          `https://picsum.photos/seed/${id}-2/600/800`,
          `https://picsum.photos/seed/${id}-3/600/800`,
        ],
      },

      stats: {
        id,
        type: "stats",
        title: "A community built around making.",
      },

      cta: {
        id,
        type: "cta",
        title: "Want to make things with us?",
        button: "Join Nirvana",
      },
    };

    setSections((prev) => [...prev, templates[type]]);
  };

  const deleteSection = (id) => {
    setSections((prev) =>
      prev.filter((section) => section.id !== id)
    );
  };

  const moveSection = (fromIndex, toIndex) => {
    if (
      toIndex < 0 ||
      toIndex >= sections.length ||
      fromIndex === toIndex
    )
      return;

    setSections((prev) => {
      const copy = [...prev];
      const [moved] = copy.splice(fromIndex, 1);

      copy.splice(toIndex, 0, moved);

      return copy;
    });
  };

  const updateSection = (id, key, value) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === id
          ? {
              ...section,
              [key]: value,
            }
          : section
      )
    );
  };

  return (
    <div
      className="
        relative
        flex
        min-h-[700px]
        items-center
        justify-center
        overflow-hidden
        p-5
        md:p-8
        lg:min-h-0
        lg:p-10
      "
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[80%]
          w-[80%]
          -translate-x-1/2
          -translate-y-1/2
          bg-violet-800/[0.08]
          blur-[120px]
        "
      />

      {/* ======================================================
          BUILDER WINDOW
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 60,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          flex
          h-[min(690px,80vh)]
          w-full
          max-w-[1050px]
          flex-col
          overflow-hidden
          rounded-[14px]
          border
          border-white/[0.12]
          bg-[#111]
          shadow-[0_40px_120px_rgba(0,0,0,0.7)]
        "
      >
        {/* ==================================================
            TOP BROWSER BAR
        ================================================== */}

        <div
          className="
            flex
            h-[48px]
            shrink-0
            items-center
            border-b
            border-white/[0.08]
            bg-[#161616]
            px-4
          "
        >
          {/* DOTS */}

          <div className="flex gap-[6px]">
            <div className="h-[7px] w-[7px] rounded-full bg-white/20" />
            <div className="h-[7px] w-[7px] rounded-full bg-white/15" />
            <div className="h-[7px] w-[7px] rounded-full bg-white/10" />
          </div>

          {/* URL */}

          <div
            className="
              mx-auto
              flex
              h-[27px]
              w-[38%]
              items-center
              justify-center
              rounded-md
              border
              border-white/[0.06]
              bg-white/[0.035]
            "
          >
            <div className="mr-2 h-1 w-1 rounded-full bg-green-400" />

            <span
              className="
                text-[8px]
                tracking-[0.08em]
                text-white/30
              "
            >
              your-nirvana.design
            </span>
          </div>

          {/* VIEW */}

          <div className="flex items-center gap-1">
            <button
              onClick={() => setView("desktop")}
              className={`
                rounded
                px-2
                py-1
                text-[7px]
                uppercase
                tracking-[0.1em]
                transition

                ${
                  view === "desktop"
                    ? "bg-white text-black"
                    : "text-white/30 hover:text-white"
                }
              `}
            >
              Desktop
            </button>

            <button
              onClick={() => setView("mobile")}
              className={`
                rounded
                px-2
                py-1
                text-[7px]
                uppercase
                tracking-[0.1em]
                transition

                ${
                  view === "mobile"
                    ? "bg-white text-black"
                    : "text-white/30 hover:text-white"
                }
              `}
            >
              Mobile
            </button>
          </div>
        </div>

        {/* ==================================================
            BUILDER BODY
        ================================================== */}

        <div className="flex min-h-0 flex-1">
          {/* ==================================================
              LEFT COMPONENT PANEL
          ================================================== */}

          <div
            className="
              hidden
              w-[155px]
              shrink-0
              flex-col
              border-r
              border-white/[0.08]
              bg-[#131313]
              md:flex
            "
          >
            {/* PANEL TITLE */}

            <div
              className="
                border-b
                border-white/[0.08]
                px-4
                py-4
              "
            >
              <p
                className="
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-white/70
                "
              >
                Add section
              </p>

              <p
                className="
                  mt-1
                  text-[7px]
                  leading-4
                  text-white/25
                "
              >
                Build your own
                <br />
                Nirvana page.
              </p>
            </div>

            {/* COMPONENTS */}

            <div className="flex flex-col gap-[6px] p-2">
              <BuilderButton
                label="Hero"
                icon="H"
                onClick={() => addSection("hero")}
              />

              <BuilderButton
                label="Text"
                icon="T"
                onClick={() => addSection("text")}
              />

              <BuilderButton
                label="Image"
                icon="I"
                onClick={() => addSection("image")}
              />

              <BuilderButton
                label="Gallery"
                icon="G"
                onClick={() => addSection("gallery")}
              />

              <BuilderButton
                label="Stats"
                icon="S"
                onClick={() => addSection("stats")}
              />

              <BuilderButton
                label="CTA"
                icon="+"
                onClick={() => addSection("cta")}
              />
            </div>

            {/* TIP */}

            <div className="mt-auto border-t border-white/[0.08] p-4">
              <p
                className="
                  text-[7px]
                  leading-[1.6]
                  text-white/25
                "
              >
                Add blocks, move them around and edit the copy.
              </p>
            </div>
          </div>

          {/* ==================================================
              CENTER PREVIEW AREA
          ================================================== */}

          <div
            className="
              relative
              flex
              min-w-0
              flex-1
              items-start
              justify-center
              overflow-auto
              bg-[#202020]
              p-5
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {/* WEBSITE */}

            <motion.div
              layout
              animate={{
                width:
                  view === "mobile"
                    ? 330
                    : "100%",
              }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                min-h-full
                max-w-[760px]
                overflow-hidden
                bg-[#f1efe9]
                text-[#111]
                shadow-[0_25px_80px_rgba(0,0,0,0.4)]
              "
            >
              {/* ==============================================
                  WEBSITE NAV
              =============================================== */}

              <div
                className="
                  sticky
                  top-0
                  z-40
                  flex
                  h-[48px]
                  items-center
                  justify-between
                  border-b
                  border-black/10
                  bg-[#f1efe9]/90
                  px-5
                  backdrop-blur-xl
                "
              >
                <div className="flex items-center gap-2">
                  <div
                    className="
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      rounded-full
                      bg-black
                      text-[7px]
                      text-white
                    "
                  >
                    N
                  </div>

                  <p
                    className="
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.15em]
                    "
                  >
                    Nirvana
                  </p>
                </div>

                <div
                  className={`
                    items-center
                    gap-4

                    ${
                      view === "mobile"
                        ? "hidden"
                        : "flex"
                    }
                  `}
                >
                  {["Work", "About", "Archive"].map((item) => (
                    <span
                      key={item}
                      className="
                        text-[7px]
                        uppercase
                        tracking-[0.12em]
                        text-black/35
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <button
                  className="
                    rounded-full
                    bg-black
                    px-3
                    py-[6px]
                    text-[7px]
                    uppercase
                    tracking-[0.1em]
                    text-white
                  "
                >
                  Join
                </button>
              </div>

              {/* ==============================================
                  USER SECTIONS
              =============================================== */}

              {sections.map((section, index) => (
                <EditableSection
                  key={section.id}
                  section={section}
                  index={index}
                  total={sections.length}
                  view={view}
                  moveSection={moveSection}
                  deleteSection={deleteSection}
                  updateSection={updateSection}
                />
              ))}

              {/* ==============================================
                  ADD SECTION BOTTOM
              =============================================== */}

              <button
                onClick={() => addSection("text")}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  border-t
                  border-dashed
                  border-black/20
                  py-6
                  text-[7px]
                  uppercase
                  tracking-[0.15em]
                  text-black/30
                  transition
                  hover:bg-violet-100
                  hover:text-black
                "
              >
                <span className="text-sm">+</span>
                Add another section
              </button>

              {/* FOOTER */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  bg-black
                  px-5
                  py-5
                  text-white
                "
              >
                <div>
                  <p
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.15em]
                    "
                  >
                    Nirvana
                  </p>

                  <p className="mt-1 text-[6px] text-white/30">
                    Your version.
                  </p>
                </div>

                <span
                  className="
                    text-[6px]
                    uppercase
                    tracking-[0.15em]
                    text-white/30
                  "
                >
                  IGDTUW / 2026
                </span>
              </div>
            </motion.div>
          </div>

          {/* ==================================================
              RIGHT PANEL
          ================================================== */}

          <div
            className="
              hidden
              w-[125px]
              shrink-0
              flex-col
              border-l
              border-white/[0.08]
              bg-[#131313]
              lg:flex
            "
          >
            <div className="border-b border-white/[0.08] p-4">
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.16em]
                  text-white/60
                "
              >
                Page
              </p>
            </div>

            <div className="p-3">
              <p
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.12em]
                  text-white/20
                "
              >
                Sections
              </p>

              <div className="mt-3 flex flex-col gap-1">
                {sections.map((section, index) => (
                  <div
                    key={section.id}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded
                      px-2
                      py-[7px]
                      text-[7px]
                      text-white/35
                      hover:bg-white/[0.05]
                    "
                  >
                    <span className="text-white/15">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="capitalize">
                      {section.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setSections(initialSections)}
              className="
                mt-auto
                border-t
                border-white/[0.08]
                px-4
                py-4
                text-left
                text-[7px]
                uppercase
                tracking-[0.14em]
                text-white/30
                transition
                hover:bg-white/[0.04]
                hover:text-white
              "
            >
              Reset website
            </button>
          </div>
        </div>

        {/* ==================================================
            STATUS BAR
        ================================================== */}

        <div
          className="
            flex
            h-[28px]
            shrink-0
            items-center
            justify-between
            border-t
            border-white/[0.08]
            bg-[#151515]
            px-4
          "
        >
          <div className="flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-green-400" />

            <p
              className="
                text-[6px]
                uppercase
                tracking-[0.15em]
                text-white/25
              "
            >
              Live editing
            </p>
          </div>

          <p
            className="
              text-[6px]
              uppercase
              tracking-[0.15em]
              text-white/20
            "
          >
            {sections.length} sections
          </p>
        </div>
      </motion.div>
    </div>
  );
}


/* ============================================================
   BUILDER BUTTON
============================================================ */

function BuilderButton({ label, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        group
        flex
        items-center
        gap-3
        rounded-md
        border
        border-transparent
        px-3
        py-[9px]
        text-left
        transition
        hover:border-white/[0.08]
        hover:bg-white/[0.05]
      "
    >
      <div
        className="
          flex
          h-6
          w-6
          items-center
          justify-center
          rounded
          border
          border-white/10
          bg-white/[0.03]
          text-[8px]
          text-white/40
          transition
          group-hover:bg-violet-200
          group-hover:text-black
        "
      >
        {icon}
      </div>

      <span
        className="
          text-[7px]
          uppercase
          tracking-[0.12em]
          text-white/35
          group-hover:text-white/70
        "
      >
        {label}
      </span>
    </button>
  );
}


/* ============================================================
   EDITABLE SECTION
============================================================ */

function EditableSection({
  section,
  index,
  total,
  view,
  moveSection,
  deleteSection,
  updateSection,
}) {
  return (
    <motion.div
      layout
      transition={{
        layout: {
          duration: 0.35,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      className="
        group/section
        relative
        border-b
        border-black/10
      "
    >
      {/* ======================================================
          SECTION CONTROLS
      ====================================================== */}

      <div
        className="
          absolute
          right-2
          top-2
          z-30
          flex
          translate-y-[-5px]
          items-center
          overflow-hidden
          rounded-md
          border
          border-black/10
          bg-white
          opacity-0
          shadow-lg
          transition-all
          duration-200
          group-hover/section:translate-y-0
          group-hover/section:opacity-100
        "
      >
        <button
          disabled={index === 0}
          onClick={() => moveSection(index, index - 1)}
          className="
            px-2
            py-[6px]
            text-[8px]
            text-black/40
            hover:bg-black
            hover:text-white
            disabled:opacity-20
          "
        >
          ↑
        </button>

        <button
          disabled={index === total - 1}
          onClick={() => moveSection(index, index + 1)}
          className="
            border-l
            border-black/10
            px-2
            py-[6px]
            text-[8px]
            text-black/40
            hover:bg-black
            hover:text-white
            disabled:opacity-20
          "
        >
          ↓
        </button>

        <button
          onClick={() => deleteSection(section.id)}
          className="
            border-l
            border-black/10
            px-2
            py-[6px]
            text-[8px]
            text-black/40
            hover:bg-red-500
            hover:text-white
          "
        >
          ×
        </button>
      </div>

      {/* ======================================================
          HERO
      ====================================================== */}

      {section.type === "hero" && (
        <div
          className={`
            grid
            min-h-[300px]

            ${
              view === "mobile"
                ? "grid-cols-1"
                : "grid-cols-[1.05fr_.95fr]"
            }
          `}
        >
          <div
            className="
              flex
              flex-col
              justify-between
              p-7
            "
          >
            <div>
              <p
                className="
                  mb-5
                  text-[7px]
                  uppercase
                  tracking-[0.2em]
                  text-violet-700
                "
              >
                Nirvana / IGDTUW
              </p>

              <EditableText
                value={section.title}
                onChange={(value) =>
                  updateSection(
                    section.id,
                    "title",
                    value
                  )
                }
                className="
                  text-[clamp(2.4rem,4vw,4rem)]
                  leading-[0.82]
                  tracking-[-0.05em]
                "
              />
            </div>

            <EditableText
              value={section.description}
              onChange={(value) =>
                updateSection(
                  section.id,
                  "description",
                  value
                )
              }
              className="
                mt-8
                max-w-[260px]
                text-[8px]
                leading-[1.6]
                text-black/45
              "
            />
          </div>

          <EditableImage
            src={section.image}
            onChange={(value) =>
              updateSection(
                section.id,
                "image",
                value
              )
            }
          />
        </div>
      )}

      {/* ======================================================
          TEXT SECTION
      ====================================================== */}

      {section.type === "text" && (
        <div className="grid gap-8 p-8 md:grid-cols-[.5fr_1.5fr]">
          <EditableText
            value={section.eyebrow}
            onChange={(value) =>
              updateSection(section.id, "eyebrow", value)
            }
            className="
              text-[7px]
              uppercase
              tracking-[0.2em]
              text-black/35
            "
          />

          <div>
            <EditableText
              value={section.title}
              onChange={(value) =>
                updateSection(section.id, "title", value)
              }
              className="
                max-w-[450px]
                text-[28px]
                leading-[0.95]
                tracking-[-0.035em]
              "
            />

            <EditableText
              value={section.description}
              onChange={(value) =>
                updateSection(
                  section.id,
                  "description",
                  value
                )
              }
              className="
                mt-5
                max-w-[350px]
                text-[8px]
                leading-[1.7]
                text-black/45
              "
            />
          </div>
        </div>
      )}

      {/* ======================================================
          SINGLE IMAGE
      ====================================================== */}

      {section.type === "image" && (
        <div className="p-5">
          <EditableImage
            src={section.image}
            height="h-[300px]"
            onChange={(value) =>
              updateSection(section.id, "image", value)
            }
          />

          <EditableText
            value={section.caption}
            onChange={(value) =>
              updateSection(
                section.id,
                "caption",
                value
              )
            }
            className="
              mt-3
              text-[7px]
              uppercase
              tracking-[0.13em]
              text-black/35
            "
          />
        </div>
      )}

      {/* ======================================================
          GALLERY
      ====================================================== */}

      {section.type === "gallery" && (
        <div className="p-6">
          <EditableText
            value={section.title}
            onChange={(value) =>
              updateSection(section.id, "title", value)
            }
            className="
              mb-5
              text-[24px]
              tracking-[-0.04em]
            "
          />

          <div
            className={`
              grid
              gap-2

              ${
                view === "mobile"
                  ? "grid-cols-1"
                  : "grid-cols-3"
              }
            `}
          >
            {section.images.map((image, imageIndex) => (
              <EditableImage
                key={`${section.id}-${imageIndex}`}
                src={image}
                height="h-[220px]"
                onChange={(value) => {
                  const newImages = [...section.images];

                  newImages[imageIndex] = value;

                  updateSection(
                    section.id,
                    "images",
                    newImages
                  );
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* ======================================================
          STATS
      ====================================================== */}

      {section.type === "stats" && (
        <div className="bg-violet-200 p-7">
          <EditableText
            value={section.title}
            onChange={(value) =>
              updateSection(section.id, "title", value)
            }
            className="
              mb-7
              max-w-[350px]
              text-[28px]
              leading-[0.95]
            "
          />

          <div className="grid grid-cols-3 border-t border-black/15">
            {[
              ["40+", "Designers"],
              ["25+", "Projects"],
              ["∞", "Ideas"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="
                  border-r
                  border-black/15
                  py-5
                  last:border-r-0
                "
              >
                <p
                  className="
                    text-[30px]
                    leading-none
                  "
                >
                  {number}
                </p>

                <p
                  className="
                    mt-2
                    text-[6px]
                    uppercase
                    tracking-[0.15em]
                    text-black/45
                  "
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ======================================================
          CTA
      ====================================================== */}

      {section.type === "cta" && (
        <div
          className="
            flex
            items-end
            justify-between
            gap-8
            bg-[#171717]
            p-8
            text-white
          "
        >
          <EditableText
            value={section.title}
            onChange={(value) =>
              updateSection(section.id, "title", value)
            }
            className="
              max-w-[380px]
              text-[32px]
              leading-[0.9]
            "
          />

          <button
            className="
              shrink-0
              rounded-full
              bg-violet-200
              px-5
              py-3
              text-[7px]
              uppercase
              tracking-[0.14em]
              text-black
            "
          >
            {section.button}
          </button>
        </div>
      )}
    </motion.div>
  );
}


/* ============================================================
   EDITABLE TEXT
============================================================ */

function EditableText({
  value,
  onChange,
  className = "",
}) {
  return (
    <div
      contentEditable
      suppressContentEditableWarning
      onBlur={(event) =>
        onChange(event.currentTarget.innerText)
      }
      className={`
        cursor-text
        rounded-sm
        outline-none
        transition
        hover:bg-violet-200/30
        focus:bg-violet-200/50
        focus:ring-1
        focus:ring-violet-500/30
        ${className}
      `}
      style={{
        fontFamily: '"Instrument Serif", serif',
      }}
    >
      {value}
    </div>
  );
}


/* ============================================================
   EDITABLE IMAGE
============================================================ */

function EditableImage({
  src,
  onChange,
  height = "h-full min-h-[260px]",
}) {
  const shuffle = () => {
    onChange(
      `https://picsum.photos/seed/${Date.now()}-${Math.random()}/900/1100`
    );
  };

  return (
    <div
      className={`
        group/image
        relative
        overflow-hidden
        bg-black/10
        ${height}
      `}
    >
      <motion.img
        key={src}
        initial={{
          opacity: 0.6,
          scale: 1.03,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        src={src}
        alt=""
        draggable={false}
        className="
          h-full
          w-full
          object-cover
        "
      />

      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-black/0
          opacity-0
          transition
          group-hover/image:bg-black/25
          group-hover/image:opacity-100
        "
      >
        <button
          onClick={shuffle}
          className="
            rounded-full
            bg-white
            px-4
            py-2
            text-[7px]
            uppercase
            tracking-[0.12em]
            text-black
            shadow-lg
            transition-transform
            hover:scale-105
          "
        >
          Shuffle image
        </button>
      </div>
    </div>
  );
}