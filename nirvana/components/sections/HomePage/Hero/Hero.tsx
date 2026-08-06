'use client';
import { Sparkles, Star, Figma, Framer } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { 
            staggerChildren: 0.1,
            delayChildren: 0.2
          }
        }
      }}
      className="
        w-full
        flex flex-col lg:flex-row
        h-auto
        sm:h-[650px]
        md:h-[750px]
        xl:h-[800px]
        scroll-mt-0
      "
    >
      {/* RIGHT CONTENT */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          order-1 lg:order-2
          w-full lg:w-1/2
          bg-[#111111]
          text-white
          flex flex-col
          h-full
          px-4 sm:px-8 md:px-5 lg:px-5 xl:px-10
          py-10 sm:py-8 md:py-5 lg:py-0 xl:py-0
        "
      >
        {/* TOP SPACING */}
        <div className="h-[200px] sm:h-[200px] md:h-[140px] xl:h-[180px]" />

        {/* CONTENT BLOCK */}
        <div className="flex flex-col flex-1 gap-5 justify-end">
          {/* SECTION 2 — TOP INFO */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 text-[12px] sm:text-[13px] tracking-widest uppercase text-gray-400"
          >
            <div className="flex items-center gap-3">
              <Sparkles size={14} className="text-white" />
              <span>Transforming Ideas into Iconic Brands</span>
            </div>

            <div className="flex items-center gap-4 text-white flex-wrap">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { scale: 0, rotate: 180 },
                      visible: { scale: 1, rotate: 0 }
                    }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <Star size={13} fill="white" />
                  </motion.div>
                ))}
              </div>

              <div className="h-4 w-px bg-white/20" />

              <div className="flex items-center gap-3">
                <motion.div
                  variants={{
                    hidden: { scale: 0 },
                    visible: { scale: 1 }
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-7 h-7 bg-white rounded-md flex items-center justify-center"
                >
                  <Figma size={13} className="text-black" />
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { scale: 0 },
                    visible: { scale: 1 }
                  }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="w-7 h-7 bg-white rounded-md flex items-center justify-center"
                >
                  <Framer size={13} className="text-black" />
                </motion.div>
                <span className="normal-case tracking-normal text-gray-400 text-[12px] sm:text-[13px]">
                  Designing stories that matter
                </span>
              </div>
            </div>
          </motion.div>

          {/* SECTION 3 — NARRATIVE */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="
                font-anton
                uppercase
                leading-[0.85]
                text-[100px]
                sm:text-[60px]
                md:text-[185px]
                lg:text-[120px]
                xl:text-[162px]
              "
            >
              Narrative
            </h1>
          </motion.div>

          {/* SECTION 4 */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            transition={{ duration: 0.8 }}
            className="
              flex items-end justify-between
              h-[140px]
              sm:h-[160px]
              md:h-[140px]
              xl:h-[220px]
              gap-4
            "
          >
            {/* Showreel */}
            <motion.div
              variants={{
                hidden: { scale: 0.9, rotateX: 20 },
                visible: { scale: 1, rotateX: 0 }
              }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.02 }}
              className="w-[260px] sm:w-[300px] md:w-[550px] lg:w-[320px] xl:w-[360px] h-full rounded-2xl overflow-hidden relative border border-white/20"
            >
              <img
                src="/images/showreel.jpg"
                alt="Showreel"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] sm:text-[12px] uppercase tracking-wide">
                <span>▶ Play Showreel</span>
                <span>02:58</span>
              </div>
            </motion.div>

            {/* Meets Design */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.7 }}
              className="h-full flex flex-col justify-between text-left"
            >
              <motion.h1
                variants={{
                  hidden: { scaleX: 0 },
                  visible: { scaleX: 1 }
                }}
                transition={{ duration: 0.6 }}
                className="
                  font-anton
                  uppercase
                  leading-[0.9]
                  text-[80px]
                  sm:text-[50px]
                  md:text-[75px]
                  xl:text-[120px]
                "
              >
                Meets
              </motion.h1>

              <motion.h1
                variants={{
                  hidden: { scaleX: 0 },
                  visible: { scaleX: 1 }
                }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="
                  font-anton
                  uppercase
                  leading-[0.9]
                  text-[80px]
                  sm:text-[45px]
                  md:text-[70px]
                  xl:text-[110px]
                "
              >
                Design
              </motion.h1>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* LEFT IMAGE */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 }
        }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.01 }}
        className="
          order-2 lg:order-1
          w-full lg:w-1/2
          sm:h-[900px]
          md:h-[600px]
          lg:h-full
          xl:h-full
          relative
        "
      >
        <img
          src="/Hero_Section_Nira.png"
          alt="Hero"
          className="relative inset-0 w-full h-full object-cover"
        />
      </motion.div>
    </motion.section>
  );
}
