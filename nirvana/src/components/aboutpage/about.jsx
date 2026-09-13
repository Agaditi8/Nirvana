
"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

import "./about.css";

const SMOOTH = [0.16, 1, 0.3, 1];

/* ============================================================
   REVEAL LINE
============================================================ */

function RevealLine({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            obs.disconnect();
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    obs.observe(el);

    const timeout = setTimeout(() => setShown(true), 2000);

    return () => {
      obs.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <span ref={ref} className={`reveal-line ${className}`}>
      <span
        className="reveal-line__inner"
        style={{
          display: "block",
          clipPath: shown
            ? "inset(0 0 0% 0)"
            : "inset(0 0 100% 0)",
          transform: shown ? "translateY(0)" : "translateY(8px)",
          opacity: shown ? 1 : 0,
          transition: `
            clip-path 1s cubic-bezier(0.16,1,0.3,1) ${delay}s,
            transform 1s cubic-bezier(0.16,1,0.3,1) ${delay}s,
            opacity 0.8s ease ${delay}s
          `,
        }}
      >
        {children}
      </span>
    </span>
  );
}

/* ============================================================
   CHARACTER REVEAL
============================================================ */

function CharReveal({ text, delay = 0 }) {
  const chars = useMemo(() => text.split(""), [text]);

  return (
    <span className="char-reveal" aria-label={text}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="char-reveal__char"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: delay + i * 0.025,
            ease: SMOOTH,
          }}
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ============================================================
   MAGNETIC
============================================================ */

function Magnetic({
  children,
  strength = 0.35,
  className = "",
}) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sx = useSpring(x, {
    stiffness: 200,
    damping: 18,
  });

  const sy = useSpring(y, {
    stiffness: 200,
    damping: 18,
  });

  const onMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    x.set(
      (e.clientX - (rect.left + rect.width / 2)) * strength
    );

    y.set(
      (e.clientY - (rect.top + rect.height / 2)) * strength
    );
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        x: sx,
        y: sy,
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}

/* ============================================================
   CUSTOM CURSOR
============================================================ */

function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  const [label, setLabel] = useState("");
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;

    if (!cursor || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    let raf;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.transform =
        `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const loop = () => {
      cursorX += (mouseX - cursorX) * 0.16;
      cursorY += (mouseY - cursorY) * 0.16;

      cursor.style.transform =
        `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;

      raf = requestAnimationFrame(loop);
    };

    const over = (e) => {
      const element = e.target.closest("[data-cursor]");

      if (element) {
        setLabel(element.dataset.cursor || "");
        setHovering(true);
      }
    };

    const out = (e) => {
      const element = e.target.closest("[data-cursor]");

      if (element) {
        setLabel("");
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);

    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);

      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`cursor ${
          hovering ? "cursor--hover" : ""
        }`}
      >
        <span className="cursor__label">{label}</span>
      </div>

      <div ref={dotRef} className="cursor__dot" />
    </>
  );
}

/* ============================================================
   HERO
============================================================ */

function Hero() {
  const ref = useRef(null);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yContent = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 140]
  );

  const yImage = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 240]
  );

  const yDecor = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -80]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.85],
    [1, 0]
  );

  const scaleImg = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.08]
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const move = (e) => {
      setMouse({
        x:
          (e.clientX / window.innerWidth - 0.5) * 22,
        y:
          (e.clientY / window.innerHeight - 0.5) * 22,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [isMobile]);

  return (
    <section
      className="hero"
      id="home"
      ref={ref}
    >
      <motion.div
        className="hero__diagonal"
        style={{ y: yDecor }}
        aria-hidden
      />

      <div
        className="hero__grid-lines"
        aria-hidden
      >
        <div className="grid-line" />
        <div className="grid-line" />
        <div className="grid-line" />
        <div className="grid-line" />
      </div>

      <aside className="hero__rail">
        {[
          "/01 ABOUT",
          "/02 PHILOSOPHY",
          "/03 WORK",
          "/04 CONTACT",
        ].map((text, i) => (
          <motion.span
            key={text}
            className={`hero__rail-item ${
              i === 0 ? "is-active" : ""
            }`}
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.6 + i * 0.08,
            }}
          >
            {text}
          </motion.span>
        ))}
      </aside>

      <motion.div
        className="hero__content"
        style={{
          y: yContent,
          opacity,
        }}
      >
        <motion.div
          className="hero__meta"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <span>IGDTUW</span>
          <span className="hero__meta-divider">
            /
          </span>
          <span>DESIGN SOCIETY</span>
          <span className="hero__meta-divider">
            /
          </span>
          <span>2026</span>
        </motion.div>

        <motion.p
          className="hero__kicker"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
        >
          A CREATIVE COLLECTIVE
        </motion.p>

        <div className="hero__title-wrap">
          <h1 className="hero__title">
            <CharReveal
              text="NIRVANA"
              delay={0.5}
            />
          </h1>

          <h2 className="hero__title-outline">
            <CharReveal
              text="DESIGN SOCIETY"
              delay={0.85}
            />
          </h2>
        </div>

        <motion.p
          className="hero__description"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1.2,
          }}
        >
          A space where ideas find form, curiosity
          becomes craft, and creativity becomes a way
          of thinking.
        </motion.p>

        <motion.div
          className="hero__tags"
          initial="hidden"
          animate="show"
          variants={{
            show: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 1.35,
              },
            },
          }}
        >
          {[
            "DESIGN",
            "CREATE",
            "EXPERIMENT",
            "COLLABORATE",
          ].map((tag) => (
            <motion.span
              key={tag}
              className="hero__pill"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.6,
                ease: SMOOTH,
              }}
              whileHover={{
                y: -3,
                borderColor: "var(--purple)",
              }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__image-wrap"
        initial={{
          opacity: 0,
          scale: 0.92,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          delay: 0.6,
          ease: SMOOTH,
        }}
        style={{
          y: yImage,
          scale: scaleImg,
        }}
      >
        <motion.div
          className="hero__image-inner"
          style={{
            transform: isMobile
              ? "none"
              : `translate(${mouse.x * 0.5}px, ${
                  mouse.y * 0.5
                }px)`,
          }}
        >
          <div className="hero__image-glow" />

          <img
            src="/images/nirvana-girl.png"
            alt="Nirvana visual"
            className="hero__image"
          />

          <div className="hero__image-caption">
            <span className="hero__caption-main">
              Ideas into form.
            </span>

            <span className="hero__caption-sub">
              A VISUAL CULTURE OF MAKING
            </span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__bottom-deco"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.6,
          duration: 1,
        }}
      >
        <span className="deco-line" />

        <span className="deco-text">
          SCROLL TO EXPLORE
        </span>

        <motion.span
          className="deco-arrow"
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}

/* ============================================================
   MARQUEE
============================================================ */

function Marquee() {
  const items = [
    "CURIOSITY",
    "EXPERIMENTATION",
    "CRAFT",
    "EXPRESSION",
    "COMMUNITY",
    "DESIGN",
    "CREATE",
    "COLLABORATE",
  ];

  const loop = [...items, ...items];

  return (
    <section className="marquee">
      <motion.div
        className="marquee__track"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {loop.map((text, index) => (
          <span
            key={index}
            className="marquee__item"
          >
            <span className="marquee__dot" />
            {text}
          </span>
        ))}
      </motion.div>
    </section>
  );
}

/* ============================================================
   PHILOSOPHY
============================================================ */

function Philosophy() {
  const items = [
    {
      n: "01",
      t: "CURIOSITY",
      d: "Question the obvious. Explore the unfamiliar. Every good idea begins with curiosity.",
    },
    {
      n: "02",
      t: "EXPERIMENTATION",
      d: "Try things that might fail. The most interesting work starts with experimenting.",
    },
    {
      n: "03",
      t: "CRAFT",
      d: "Details matter. From a single pixel to an entire system, we care about how things are made.",
    },
    {
      n: "04",
      t: "EXPRESSION",
      d: "There is no single way to create. Ideas take their own visual language.",
    },
    {
      n: "05",
      t: "COMMUNITY",
      d: "The best ideas rarely happen alone. We learn, create and grow together.",
    },
  ];

  return (
    <section
      className="philo"
      id="about"
    >
      <div className="container">
        <div className="philo__layout">
          <div className="philo__left">
            <motion.span
              className="section-label"
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              02 — OUR PHILOSOPHY
            </motion.span>

            <h2 className="philo__title">
              <RevealLine>
                WE BELIEVE
              </RevealLine>

              <RevealLine delay={0.1}>
                <span className="text-outline">
                  IN MAKING.
                </span>
              </RevealLine>
            </h2>

            <motion.p
              className="philo__lead"
              initial={{
                opacity: 0,
                y: 30,
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
                delay: 0.4,
              }}
            >
              Design is more than making things look good.
              It is about curiosity, experimentation,
              expression and the courage to make something
              new.
            </motion.p>

            <Magnetic strength={0.3}>
              <motion.span
                className="pill pill--accent"
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  ease: SMOOTH,
                }}
              >
                THE NIRVANA WAY
              </motion.span>
            </Magnetic>
          </div>

          <div className="philo__right">
            {items.map((item, index) => (
              <motion.div
                key={item.n}
                className="philo__row"
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-40px",
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.06,
                  ease: SMOOTH,
                }}
                whileHover={{
                  x: 8,
                }}
              >
                <span className="philo__row-num">
                  {item.n}
                </span>

                <div className="philo__row-body">
                  <h3 className="philo__row-title">
                    {item.t}
                  </h3>

                  <p className="philo__row-desc">
                    {item.d}
                  </p>
                </div>

                <motion.span
                  className="philo__row-arrow"
                  whileHover={{
                    x: 4,
                    y: -4,
                    color: "var(--purple)",
                  }}
                >
                  ↗
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FEATURE GRID
============================================================ */

const FEATURES = [
  {
    id: "01",
    title: "UI / UX",
    subtitle: "INTERFACES",
    copy: "Interfaces that feel intuitive and considered.",
    size: "large",
    tone: "purple",
    tag: "DIGITAL",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "02",
    title: "BRANDING",
    subtitle: "IDENTITIES",
    copy: "Identities that are remembered.",
    size: "small",
    tone: "blue",
    tag: "IDENTITY",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "03",
    title: "GRAPHIC DESIGN",
    subtitle: "VISUAL LANGUAGE",
    copy: "Visuals that communicate with intent.",
    size: "small",
    tone: "pink",
    tag: "PRINT",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "04",
    title: "MOTION",
    subtitle: "MOVING TYPE",
    copy: "Design that moves and breathes.",
    size: "small",
    tone: "purple",
    tag: "FILM",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "05",
    title: "CREATIVE TECH",
    subtitle: "DESIGN × CODE",
    copy: "Where design meets code.",
    size: "medium",
    tone: "blue",
    tag: "CODE",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "06",
    title: "COMMUNITY",
    subtitle: "COLLECTIVE",
    copy: "Growing together as one creative voice.",
    size: "small",
    tone: "pink",
    tag: "PEOPLE",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85",
  },
];

function FeatureCard({ f, i }) {
  const cardRef = useRef(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rX = useSpring(
    useTransform(my, [-0.5, 0.5], [6, -6]),
    {
      stiffness: 150,
      damping: 20,
    }
  );

  const rY = useSpring(
    useTransform(mx, [-0.5, 0.5], [-6, 6]),
    {
      stiffness: 150,
      damping: 20,
    }
  );

  const glowX = useSpring(mx, {
    stiffness: 100,
    damping: 20,
  });

  const glowY = useSpring(my, {
    stiffness: 100,
    damping: 20,
  });

  const glowBg = useMotionTemplate`
    radial-gradient(
      400px circle at
      calc(50% + ${glowX} * 80px)
      calc(50% + ${glowY} * 80px),
      rgba(139,92,246,0.18),
      transparent 60%
    )
  `;

  const onMove = (e) => {
    if (!cardRef.current) return;

    const rect =
      cardRef.current.getBoundingClientRect();

    mx.set(
      (e.clientX - rect.left) / rect.width - 0.5
    );

    my.set(
      (e.clientY - rect.top) / rect.height - 0.5
    );
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.a
      ref={cardRef}
      href="#work"
      className={`feature feature--${f.size} feature--tone-${f.tone}`}
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
        margin: "-60px",
      }}
      transition={{
        duration: 0.9,
        delay: (i % 3) * 0.08,
        ease: SMOOTH,
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX: rX,
        rotateY: rY,
        transformPerspective: 1000,
      }}
      data-cursor="VIEW"
    >
      <div className="feature__visual">
        <div className="feature__glow" />

        <motion.img
          src={f.image}
          alt={f.title}
          className="feature__img"
          loading="lazy"
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 1.2,
            ease: SMOOTH,
          }}
        />

        <motion.span
          className="feature__num"
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
            delay: 0.2 + (i % 3) * 0.1,
          }}
        >
          {f.id}
        </motion.span>

        <span className="feature__tag">
          {f.tag}
        </span>

        <motion.div
          className="feature__hover-glow"
          style={{
            background: glowBg,
          }}
        />
      </div>

      <div className="feature__body">
        <span className="feature__subtitle">
          {f.subtitle}
        </span>

        <h3 className="feature__title">
          {f.title}
        </h3>

        <p className="feature__copy">
          {f.copy}
        </p>

        <motion.span
          className="feature__arrow"
          whileHover={{
            x: 4,
            y: -4,
          }}
          transition={{
            duration: 0.4,
            ease: SMOOTH,
          }}
        >
          ↗
        </motion.span>
      </div>
    </motion.a>
  );
}

function FeatureGrid() {
  return (
    <section className="features">
      <div className="container">
        <div className="features__head">
          <motion.span
            className="section-label"
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            03 — WHAT WE DO
          </motion.span>

          <h2 className="features__title">
            <RevealLine>
              WHAT WE
            </RevealLine>

            <RevealLine delay={0.1}>
              <span className="text-outline">
                CAN CREATE
              </span>
            </RevealLine>
          </h2>

          <motion.p
            className="features__intro"
            initial={{
              opacity: 0,
              y: 30,
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
              delay: 0.3,
            }}
          >
            From visual identities to digital experiences
            — different ways to turn ideas into something
            people can see, feel and remember.
          </motion.p>
        </div>

        <div className="features__grid">
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              f={feature}
              i={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SELECTED WORK
============================================================ */

const PROJECTS = [
  {
    id: "01",
    title: "VISUAL LANGUAGE",
    category: "BRANDING",
    year: "2026",
    size: "wide",
    tone: "blue",
    image: "/images/work-1.png",
  },
  {
    id: "02",
    title: "SIGNAL SYSTEM",
    category: "UI / UX",
    year: "2026",
    size: "tall",
    tone: "purple",
    image: "/images/work-2.png",
  },
  {
    id: "03",
    title: "DRIFT",
    category: "MOTION",
    year: "2025",
    size: "square",
    tone: "pink",
    image: "/images/work-3.png",
  },
  {
    id: "04",
    title: "ORBIT",
    category: "CREATIVE TECH",
    year: "2025",
    size: "wide",
    tone: "blue",
    image: "/images/work-4.png",
  },
  {
    id: "05",
    title: "MOSS",
    category: "GRAPHIC",
    year: "2025",
    size: "tall",
    tone: "purple",
    image: "/images/work-5.png",
  },
  {
    id: "06",
    title: "WAVE",
    category: "IDENTITY",
    year: "2024",
    size: "square",
    tone: "pink",
    image: "/images/work-6.png",
  },
  {
    id: "07",
    title: "CHROMA",
    category: "UI / UX",
    year: "2024",
    size: "wide",
    tone: "blue",
    image: "/images/work-7.png",
  },
  {
    id: "08",
    title: "ECHO",
    category: "CREATIVE TECH",
    year: "2024",
    size: "tall",
    tone: "purple",
    image: "/images/work-8.png",
  },
];

function WorkTile({ project, index }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [40, -40]
  );

  return (
    <motion.a
      ref={ref}
      href="#"
      className={`tile tile--${project.size} tile--tone-${project.tone}`}
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
        margin: "-60px",
      }}
      transition={{
        duration: 0.9,
        delay: (index % 3) * 0.08,
        ease: SMOOTH,
      }}
      data-cursor="VIEW"
    >
      <div className="tile__visual">
        <div className="tile__glow" />

        <motion.img
          src={project.image}
          alt={project.title}
          className="tile__image"
          loading="lazy"
          style={{ y }}
        />

        <div className="tile__overlay" />

        <div className="tile__reveal">
          <span className="tile__reveal-id">
            {project.id}
          </span>

          <span className="tile__reveal-title">
            {project.title}
          </span>

          <span className="tile__reveal-meta">
            {project.category} — {project.year}
          </span>
        </div>
      </div>
    </motion.a>
  );
}

function SelectedWork() {
  return (
    <section
      className="work"
      id="work"
    >
      <div className="container">
        <div className="work__head">
          <motion.span
            className="section-label"
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            04 — SELECTED WORK
          </motion.span>

          <h2 className="work__title">
            <RevealLine>
              WORK FROM
            </RevealLine>

            <RevealLine delay={0.1}>
              <span className="text-outline">
                NIRVANA.
              </span>
            </RevealLine>
          </h2>

          <motion.p
            className="work__intro"
            initial={{
              opacity: 0,
              y: 30,
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
              delay: 0.3,
            }}
          >
            A collection of ideas, experiments and visual
            worlds created by the people of Nirvana.
          </motion.p>
        </div>

        <div className="work__mosaic">
          {PROJECTS.map((project, index) => (
            <WorkTile
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}



function CTA() {
  return (
    <section
      className="cta"
      id="contact"
    >
      <div className="container">
        <motion.span
          className="section-label"
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          05 — CONTACT
        </motion.span>

        <h2 className="cta__title">
          <RevealLine>
            HAVE AN IDEA?
          </RevealLine>

          <RevealLine delay={0.1}>
            <span className="text-outline">
              LET&apos;S MAKE IT.
            </span>
          </RevealLine>
        </h2>

        <Magnetic
          strength={0.4}
          className="cta__button-wrap"
        >
          <motion.a
            href="#site-footer"
            className="cta__button"
            data-cursor="OPEN"
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              duration: 0.4,
              ease: SMOOTH,
            }}
          >
            <span className="cta__button-text">
              LET&apos;S CREATE
            </span>

            <motion.span
              className="cta__button-arrow"
              whileHover={{
                x: 8,
              }}
              transition={{
                duration: 0.4,
                ease: SMOOTH,
              }}
            >
              →
            </motion.span>
          </motion.a>
        </Magnetic>
      </div>
    </section>
  );
}

/* ============================================================
   ABOUT PAGE
============================================================ */

export default function About() {
  return (
    <div className="app">
      <CustomCursor />

      <main>
        <Hero />
        <Marquee />
        <Philosophy />
        <FeatureGrid />
        <SelectedWork />
        <CTA />
      </main>
    </div>
  );
}

