"use client";

import { motion } from "framer-motion";
import { contentTeam } from "@/data/team/content";

const ease = [0.16, 1, 0.3, 1];

export default function Content() {
    return (
        <section
            className="
        relative
        w-full
        overflow-hidden
        bg-[var(--color-black)]
        px-5
        py-28
        text-primary
        md:px-10
        md:py-36
        lg:px-14
        lg:py-40
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
          opacity-[0.08]
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
          top-[15%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[radial-gradient(circle,rgba(61,45,82,0.12),transparent_68%)]
          blur-[120px]
        "
            />

            {/* =====================================================
          CONTENT
      ===================================================== */}

            <div className="relative z-10 mx-auto max-w-[1450px]">

                {/* ==================================================
            TEAM HEADING
        ================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 50,
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
                    className="mb-20 md:mb-28"
                >
                    <p
                        className="
              text-micro
              mb-7
              text-[var(--color-violet-muted)]
            "
                    >
                        02 — TEAM
                    </p>

                    <h2
                        className="
              text-display-lg
              max-w-[1000px]
              leading-[0.78]
              text-primary
            "
                    >
                        CONTENT
                        <br />

                        <span className="text-muted">
                            TEAM.
                        </span>
                    </h2>

                    <p
                        className="
              text-body-lg
              mt-8
              max-w-[520px]
              leading-7
              text-muted
            "
                    >
                        The storytellers behind Nirvana's words,
                        ideas, narratives and visual communication.
                    </p>
                </motion.div>

                {/* ==================================================
            TEAM LEAD
        ================================================== */}

                <div className="mb-24 md:mb-20">

                    <SectionLabel label="TEAM LEAD" />

                    <div className="mt-7 max-w-[430px]">
                        <MemberCard
                            member={contentTeam.lead}
                            index={0}
                            featured
                        />
                    </div>

                </div>

                {/* ==================================================
            TEAM CORES
        ================================================== */}

                <div className="mb-24 md:mb-20">

                    <SectionLabel label="TEAM CORES" />

                    <div
                        className="
              mt-7
              grid
              grid-cols-2
              gap-3
              md:grid-cols-4
              md:gap-4
            "
                    >
                        {contentTeam.cores.map((member, index) => (
                            <MemberCard
                                key={member.name}
                                member={member}
                                index={index + 1}
                            />
                        ))}
                    </div>

                </div>

                {/* ==================================================
            COORDINATORS
        ================================================== */}

                <div>

                    <SectionLabel label="TEAM COORDINATORS" />

                    <div
                        className="
              mt-7
              grid
              grid-cols-2
              gap-3
              md:grid-cols-4
              md:gap-4
            "
                    >
                        {contentTeam.coordinators.map((member, index) => (
                            <MemberCard
                                key={member.name}
                                member={member}
                                index={index + 5}
                            />
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}


/* ============================================================
   SECTION LABEL
============================================================ */

function SectionLabel({ label }) {
    return (
        <div
            className="
        flex
        items-center
        gap-4
      "
        >
            <span className="text-micro text-subtle">
                {label}
            </span>

            <div
                className="
          h-px
          w-16
          bg-[var(--color-border-strong)]
        "
            />
        </div>
    );
}


/* ============================================================
   MEMBER CARD
============================================================ */

function MemberCard({
    member,
    index,
    featured = false,
}) {
    return (
        <motion.article
            initial={{
                opacity: 0,
                y: 45,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.12,
            }}
            transition={{
                duration: 0.75,
                delay: (index % 4) * 0.06,
                ease,
            }}
            whileHover={{
                y: -8,
                transition: {
                    duration: 0.4,
                    ease,
                },
            }}
            className={`
        group
        relative
        w-full
        overflow-hidden
        bg-[#09090b]
        ${featured ? "aspect-[0.82]" : "aspect-square"}
      `}
        >
            {/* ==================================================
          IMAGE
      ================================================== */}

            <div className="absolute inset-0">

                <img
                    src={member.image}
                    alt={member.name}
                    draggable="false"
                    className="
            h-full
            w-full
            object-cover
            grayscale
            opacity-70
            transition-all
            duration-700
            ease-out
            group-hover:scale-105
            group-hover:grayscale-0
            group-hover:opacity-100
          "
                />

                {/* Dark gradient */}

                <div
                    className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-black/10
            to-transparent
          "
                />

            </div>

            {/* ==================================================
          INFORMATION PANEL
      ================================================== */}

            <div
                className="
          absolute
          bottom-0
          left-0
          right-0
          z-10
          bg-[#d8d7d9]
          px-4
          py-4
          text-black
          transition-transform
          duration-500
          ease-out
          group-hover:-translate-y-1
          md:px-5
          md:py-5
        "
            >
                <div
                    className="
            flex
            items-start
            justify-between
            gap-3
          "
                >
                    <div className="min-w-0">

                        <h3
                            className="
                truncate
                text-sm
                font-medium
                uppercase
                tracking-[-0.02em]
                md:text-base
              "
                        >
                            {member.name}
                        </h3>

                        <p
                            className="
                mt-2
                truncate
                text-[9px]
                uppercase
                tracking-[0.12em]
                text-black/50
                md:text-[10px]
              "
                        >
                            {member.role}
                        </p>

                    </div>

                    <span
                        className="
              shrink-0
              text-[9px]
              uppercase
              tracking-[0.12em]
              text-black/45
            "
                    >
                        {String(index).padStart(2, "0")}
                    </span>

                </div>
            </div>

            {/* ==================================================
          MUTED VIOLET HOVER
      ================================================== */}

            <div
                className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_30%,rgba(73,52,91,0.16),transparent_60%)]
          opacity-0
          transition-opacity
          duration-700
          group-hover:opacity-100
        "
            />

        </motion.article>
    );
}