"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import teamGrid from "@/data/team/teamgrid";

export default function TeamGrid() {
    return (
        <section className="w-full bg-black">
            {/* =====================================================
                HEADER
            ===================================================== */}

            <div className="flex items-end justify-between px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
                <div>
                    <p className="mb-2 text-[9px] uppercase tracking-[0.2em] text-white/35">
                        Nirvana / Creative Archive
                    </p>

                    <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-black uppercase leading-[0.8] tracking-[-0.07em] text-white">
                        The People
                    </h2>
                </div>

                <p className="hidden max-w-[220px] text-right text-[10px] leading-4 text-white/35 sm:block">
                    A collection of people, moments and creative energy
                    behind Nirvana.
                </p>
            </div>

            {/* =====================================================
                3 × 3 INSTAGRAM-STYLE GRID
                3:4 RATIO
            ===================================================== */}

            <div
                className="
                    grid
                    w-full
                    grid-cols-3
                    grid-rows-3
                    overflow-hidden
                "
            >
                {/* =================================================
                    TOP LEFT — CAROUSEL
                ================================================= */}

                <CarouselTile
                    images={teamGrid.topLeft}
                    label="01"
                />

                {/* =================================================
                    TOP CENTER
                ================================================= */}

                <StaticTile
                    image={teamGrid.topCenter}
                    label="02"
                />

                {/* =================================================
                    TOP RIGHT — CAROUSEL
                ================================================= */}

                <CarouselTile
                    images={teamGrid.topRight}
                    label="03"
                />

                {/* =================================================
                    MIDDLE LEFT
                ================================================= */}

                <StaticTile
                    image={teamGrid.middleLeft}
                    label="04"
                />

                {/* =================================================
                    CENTER
                ================================================= */}

                <StaticTile
                    image={teamGrid.center}
                    label="05"
                    center
                />

                {/* =================================================
                    MIDDLE RIGHT
                ================================================= */}

                <StaticTile
                    image={teamGrid.middleRight}
                    label="06"
                />

                {/* =================================================
                    BOTTOM LEFT — CAROUSEL
                ================================================= */}

                <CarouselTile
                    images={teamGrid.bottomLeft}
                    label="07"
                />

                {/* =================================================
                    BOTTOM CENTER
                ================================================= */}

                <StaticTile
                    image={teamGrid.bottomCenter}
                    label="08"
                />

                {/* =================================================
                    BOTTOM RIGHT — CAROUSEL
                ================================================= */}

                <CarouselTile
                    images={teamGrid.bottomRight}
                    label="09"
                />
            </div>
        </section>
    );
}

/* ================================================================
   STATIC TILE
================================================================ */

function StaticTile({
    image,
    label,
    center = false,
}) {
    return (
        <div
            className="
                group
                relative
                aspect-[3/4]
                w-full
                overflow-hidden
                bg-[#0b0b0b]
            "
        >
            {image && (
                <motion.img
                    src={image}
                    alt=""
                    className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.04]
                    "
                />
            )}

            {/* Dark overlay */}

            <div
                className={`
                    absolute
                    inset-0
                    transition-opacity
                    duration-500
                    ${
                        center
                            ? "bg-black/15 group-hover:bg-black/5"
                            : "bg-black/10 group-hover:bg-black/0"
                    }
                `}
            />

            {/* Number */}

            <span
                className="
                    absolute
                    left-3
                    top-3
                    z-10
                    text-[8px]
                    tracking-[0.15em]
                    text-white/60
                    sm:left-5
                    sm:top-5
                    sm:text-[9px]
                "
            >
                {label}
            </span>
        </div>
    );
}

/* ================================================================
   CAROUSEL TILE
================================================================ */

function CarouselTile({
    images,
    label,
}) {
    const [activeIndex, setActiveIndex] = useState(0);

    if (!images || images.length === 0) {
        return (
            <div
                className="
                    relative
                    aspect-[3/4]
                    w-full
                    overflow-hidden
                    bg-[#0b0b0b]
                "
            />
        );
    }

    const next = () => {
        setActiveIndex((prev) =>
            prev === images.length - 1
                ? 0
                : prev + 1
        );
    };

    const previous = () => {
        setActiveIndex((prev) =>
            prev === 0
                ? images.length - 1
                : prev - 1
        );
    };

    return (
        <div
            className="
                group
                relative
                aspect-[3/4]
                w-full
                overflow-hidden
                bg-[#0b0b0b]
            "
        >
            {/* =====================================================
                IMAGE
            ===================================================== */}

            <AnimatePresence mode="wait">
                <motion.img
                    key={images[activeIndex]}
                    src={images[activeIndex]}
                    alt=""
                    initial={{
                        opacity: 0,
                        x: 30,
                        scale: 1.03,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        scale: 1,
                    }}
                    exit={{
                        opacity: 0,
                        x: -30,
                        scale: 1.02,
                    }}
                    transition={{
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    drag="x"
                    dragConstraints={{
                        left: 0,
                        right: 0,
                    }}
                    dragElastic={0.15}
                    onDragEnd={(event, info) => {
                        if (info.offset.x < -40) {
                            next();
                        }

                        if (info.offset.x > 40) {
                            previous();
                        }
                    }}
                    className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        cursor-grab
                        object-cover
                        active:cursor-grabbing
                    "
                />
            </AnimatePresence>

            {/* =====================================================
                OVERLAY
            ===================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-black/10
                    transition-colors
                    duration-500
                    group-hover:bg-black/0
                "
            />

            {/* =====================================================
                NUMBER
            ===================================================== */}

            <span
                className="
                    absolute
                    left-3
                    top-3
                    z-20
                    text-[8px]
                    tracking-[0.15em]
                    text-white/70
                    sm:left-5
                    sm:top-5
                    sm:text-[9px]
                "
            >
                {label}
            </span>

            {/* =====================================================
                CAROUSEL CONTROLS
            ===================================================== */}

            <div
                className="
                    absolute
                    bottom-3
                    left-3
                    right-3
                    z-20
                    flex
                    items-center
                    justify-between
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                    sm:bottom-5
                    sm:left-5
                    sm:right-5
                "
            >
                {/* Previous */}

                <button
                    type="button"
                    onClick={previous}
                    aria-label="Previous image"
                    className="
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/40
                        bg-black/30
                        text-white
                        backdrop-blur-sm
                        transition
                        hover:bg-white
                        hover:text-black
                    "
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>

                {/* Indicators */}

                <div className="flex items-center gap-1.5">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() =>
                                setActiveIndex(index)
                            }
                            aria-label={`Go to image ${
                                index + 1
                            }`}
                            className={`
                                h-1
                                rounded-full
                                transition-all
                                duration-300
                                ${
                                    index === activeIndex
                                        ? "w-5 bg-white"
                                        : "w-1 bg-white/50"
                                }
                            `}
                        />
                    ))}
                </div>

                {/* Next */}

                <button
                    type="button"
                    onClick={next}
                    aria-label="Next image"
                    className="
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/40
                        bg-black/30
                        text-white
                        backdrop-blur-sm
                        transition
                        hover:bg-white
                        hover:text-black
                    "
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>

            {/* =====================================================
                MOBILE INDICATORS
            ===================================================== */}

            <div
                className="
                    absolute
                    bottom-3
                    left-1/2
                    z-20
                    flex
                    -translate-x-1/2
                    items-center
                    gap-1.5
                    sm:hidden
                "
            >
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() =>
                            setActiveIndex(index)
                        }
                        aria-label={`Go to image ${
                            index + 1
                        }`}
                        className={`
                            h-1
                            rounded-full
                            transition-all
                            duration-300
                            ${
                                index === activeIndex
                                    ? "w-5 bg-white"
                                    : "w-1 bg-white/50"
                            }
                        `}
                    />
                ))}
            </div>
        </div>
    );
}