"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import MenuOverlay from "./MenuOverlay";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ====================================================
          HAMBURGER / CLOSE BUTTON
      ==================================================== */}

      <header className="fixed right-0 top-0 z-[100] p-8">
        <motion.button
          /* Hover only OPENS the menu */
          onMouseEnter={() => {
            if (!open) {
              setOpen(true);
            }
          }}

          /* Click only CLOSES it once open */
          onClick={() => {
            if (open) {
              setOpen(false);
            }
          }}
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.92,
          }}
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            text-white
          "
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <AnimatePresence
            mode="wait"
            initial={false}
          >
            {open ? (
              /* ============================================
                  CLOSE ICON
              ============================================ */

              <motion.div
                key="close"
                initial={{
                  opacity: 0,
                  rotate: -90,
                  scale: 0.6,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: 90,
                  scale: 0.6,
                }}
                transition={{
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <X
                  size={30}
                  strokeWidth={1.7}
                />
              </motion.div>
            ) : (
              /* ============================================
                  HAMBURGER ICON
              ============================================ */

              <motion.div
                key="menu"
                initial={{
                  opacity: 0,
                  rotate: 90,
                  scale: 0.6,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: -90,
                  scale: 0.6,
                }}
                transition={{
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Menu
                  size={30}
                  strokeWidth={1.7}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </header>

      {/* ====================================================
          MENU OVERLAY
      ==================================================== */}

      <AnimatePresence>
        {open && (
          <MenuOverlay key="menu-overlay" />
        )}
      </AnimatePresence>
    </>
  );
}