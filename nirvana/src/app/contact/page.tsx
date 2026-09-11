"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Contact form submitted:", formData);
    };

    return (
        <main className="min-h-screen w-full bg-black text-white">

            {/* =====================================================
                NAVBAR
            ===================================================== */}

            <nav className="absolute left-0 top-0 z-50 flex w-full items-center justify-between px-8 py-7 md:px-12 lg:px-16">
                <Link
                    href="/"
                    className="text-xl font-semibold tracking-[-0.05em]"
                >
                    NIRVANA
                </Link>

                <div className="hidden items-center gap-12 text-[12px] uppercase tracking-[0.16em] text-white/45 md:flex">
                    <Link
                        href="/events"
                        className="transition-colors duration-300 hover:text-white"
                    >
                        Events
                    </Link>

                    <Link
                        href="/about"
                        className="transition-colors duration-300 hover:text-white"
                    >
                        About
                    </Link>

                    <Link
                        href="/contact"
                        className="text-white"
                    >
                        Contact
                    </Link>
                </div>

                <div className="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.16em] text-white/45">
                    <span className="h-2 w-2 rounded-full bg-violet-400" />
                    Let's connect
                </div>
            </nav>

            {/* =====================================================
                FULL WIDTH CONTACT SECTION
            ===================================================== */}

            <section className="grid min-h-screen w-full lg:grid-cols-2">

                {/* =================================================
                    LEFT — DARK BLACK / PURPLE GRADIENT
                ================================================= */}

                <div
                    className="
                        relative
                        flex
                        min-h-screen
                        flex-col
                        justify-between
                        overflow-hidden
                        px-8
                        pb-12
                        pt-36
                        md:px-12
                        lg:px-16
                        lg:pb-16
                        lg:pt-40
                    "
                    style={{
                        background: `
                            radial-gradient(
                                circle at 72% 65%,
                                rgba(105, 48, 145, 0.38) 0%,
                                rgba(65, 27, 91, 0.20) 25%,
                                rgba(15, 8, 20, 0.82) 55%,
                                #030303 100%
                            )
                        `,
                    }}
                >
                    {/* Subtle atmospheric glow */}

                    <div className="pointer-events-none absolute -right-40 bottom-[-10%] h-[600px] w-[600px] rounded-full bg-purple-700/[0.07] blur-[150px]" />

                    <div className="pointer-events-none absolute left-[20%] top-[35%] h-[350px] w-[350px] rounded-full bg-violet-500/[0.035] blur-[130px]" />

                    {/* =================================================
                        TOP CONTENT
                    ================================================= */}

                    <div className="relative z-10">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-violet-300" />

                            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                                Nirvana / Contact
                            </p>
                        </div>

                        <p className="max-w-[380px] text-[14px] leading-6 text-white/40">
                            Have an idea, collaboration or something
                            exciting in mind?
                        </p>
                    </div>

                    {/* =================================================
                        MAIN HEADING
                    ================================================= */}

                    <div className="relative z-10 my-auto py-24">
                        <p className="mb-7 text-[11px] uppercase tracking-[0.22em] text-violet-300/60">
                            Let's create something
                        </p>

                        <h1
                            className="
                                text-[clamp(5rem,10vw,10rem)]
                                font-black
                                uppercase
                                leading-[0.76]
                                tracking-[-0.08em]
                                text-white
                            "
                        >
                            Let's
                            <br />
                            Talk.
                        </h1>
                    </div>

                    {/* =================================================
                        CONTACT INFORMATION
                    ================================================= */}

                    <div className="relative z-10">
                        <div className="mb-10 h-px w-full bg-white/[0.1]" />

                        <div className="grid grid-cols-2 gap-10">
                            <div>
                                <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-white/25">
                                    Email
                                </p>

                                <p className="text-[14px] text-white/60">
                                    nirvana@igdtuw.ac.in
                                </p>
                            </div>

                            <div>
                                <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-white/25">
                                    Location
                                </p>

                                <p className="text-[14px] text-white/60">
                                    New Delhi, India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =================================================
                    RIGHT — CONTACT FORM
                ================================================= */}

                <div className="flex min-h-screen items-center bg-[#030303] px-8 pb-16 pt-36 md:px-12 lg:px-20 xl:px-24">
                    <div className="w-full max-w-[620px]">

                        {/* =================================================
                            FORM INTRO
                        ================================================= */}

                        <div className="mb-14">
                            <p className="mb-5 text-[11px] uppercase tracking-[0.22em] text-violet-400">
                                Get in touch
                            </p>

                            <h2 className="text-[clamp(2.2rem,4vw,4rem)] font-medium leading-[0.92] tracking-[-0.055em]">
                                Tell us what's
                                <br />
                                on your mind.
                            </h2>

                            <p className="mt-6 max-w-[470px] text-[14px] leading-6 text-white/35">
                                Whether it's a collaboration, an idea,
                                an event or just a hello — we'd love
                                to hear from you.
                            </p>
                        </div>

                        {/* =================================================
                            FORM
                        ================================================= */}

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-8"
                        >

                            {/* NAME + EMAIL */}

                            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">

                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-3 block text-[10px] uppercase tracking-[0.18em] text-white/40"
                                    >
                                        Name
                                    </label>

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        required
                                        className="
                                            h-14
                                            w-full
                                            rounded-[5px]
                                            border
                                            border-white/[0.1]
                                            bg-white/[0.035]
                                            px-5
                                            text-[14px]
                                            text-white
                                            outline-none
                                            placeholder:text-white/20
                                            transition-all
                                            duration-300
                                            focus:border-violet-400/50
                                            focus:bg-white/[0.05]
                                        "
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-3 block text-[10px] uppercase tracking-[0.18em] text-white/40"
                                    >
                                        Email
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        required
                                        className="
                                            h-14
                                            w-full
                                            rounded-[5px]
                                            border
                                            border-white/[0.1]
                                            bg-white/[0.035]
                                            px-5
                                            text-[14px]
                                            text-white
                                            outline-none
                                            placeholder:text-white/20
                                            transition-all
                                            duration-300
                                            focus:border-violet-400/50
                                            focus:bg-white/[0.05]
                                        "
                                    />
                                </div>

                            </div>

                            {/* SUBJECT */}

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="mb-3 block text-[10px] uppercase tracking-[0.18em] text-white/40"
                                >
                                    Subject
                                </label>

                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="What would you like to talk about?"
                                    required
                                    className="
                                        h-14
                                        w-full
                                        rounded-[5px]
                                        border
                                        border-white/[0.1]
                                        bg-white/[0.035]
                                        px-5
                                        text-[14px]
                                        text-white
                                        outline-none
                                        placeholder:text-white/20
                                        transition-all
                                        duration-300
                                        focus:border-violet-400/50
                                        focus:bg-white/[0.05]
                                    "
                                />
                            </div>

                            {/* MESSAGE */}

                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-3 block text-[10px] uppercase tracking-[0.18em] text-white/40"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us a little more..."
                                    required
                                    rows={6}
                                    className="
                                        min-h-[170px]
                                        w-full
                                        resize-none
                                        rounded-[5px]
                                        border
                                        border-white/[0.1]
                                        bg-white/[0.035]
                                        px-5
                                        py-4
                                        text-[14px]
                                        leading-6
                                        text-white
                                        outline-none
                                        placeholder:text-white/20
                                        transition-all
                                        duration-300
                                        focus:border-violet-400/50
                                        focus:bg-white/[0.05]
                                    "
                                />
                            </div>

                            {/* SUBMIT */}

                            <button
                                type="submit"
                                className="
                                    group
                                    flex
                                    h-14
                                    w-full
                                    items-center
                                    justify-center
                                    gap-4
                                    rounded-[5px]
                                    bg-white
                                    text-[11px]
                                    font-medium
                                    uppercase
                                    tracking-[0.18em]
                                    text-black
                                    transition-all
                                    duration-300
                                    hover:bg-violet-300
                                "
                            >
                                <span>Send Message</span>

                                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </button>

                        </form>

                        {/* =================================================
                            FOOTER NOTE
                        ================================================= */}

                        <div className="mt-10 flex items-center justify-between">
                            <p className="text-[10px] text-white/20">
                                We usually respond within 24–48 hours.
                            </p>

                            <p className="text-[10px] uppercase tracking-[0.16em] text-white/15">
                                Nirvana / 2026
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}