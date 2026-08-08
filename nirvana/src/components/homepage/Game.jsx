"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RotateCcw } from "lucide-react";

/* ============================================================
   WINNING COMBINATIONS
============================================================ */

const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

const ease = [0.16, 1, 0.3, 1];

/* ============================================================
   GAME
============================================================ */

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);

  const [score, setScore] = useState({
    player: 0,
    nirvana: 0,
  });

  /* ==========================================================
     CHECK WINNER
  ========================================================== */

  const checkWinner = (currentBoard) => {
    for (const line of WINNING_LINES) {
      const [a, b, c] = line;

      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return {
          winner: currentBoard[a],
          line,
        };
      }
    }

    if (currentBoard.every(Boolean)) {
      return {
        winner: "draw",
        line: [],
      };
    }

    return null;
  };

  /* ==========================================================
     PLAYER MOVE
  ========================================================== */

  const handleCellClick = (index) => {
    if (board[index] || winner || !playerTurn) {
      return;
    }

    const newBoard = [...board];

    newBoard[index] = "N";

    setBoard(newBoard);

    const result = checkWinner(newBoard);

    if (result) {
      finishGame(result);
      return;
    }

    setPlayerTurn(false);
  };

  /* ==========================================================
     COMPUTER MOVE
  ========================================================== */

  useEffect(() => {
    if (playerTurn || winner) return;

    const timer = setTimeout(() => {
      makeComputerMove();
    }, 650);

    return () => clearTimeout(timer);
  }, [playerTurn, winner, board]);

  const makeComputerMove = () => {
    const available = board
      .map((cell, index) => (cell === null ? index : null))
      .filter((index) => index !== null);

    if (!available.length) return;

    let selectedMove = null;

    /* Try winning */

    for (const index of available) {
      const testBoard = [...board];

      testBoard[index] = "STAR";

      const result = checkWinner(testBoard);

      if (result?.winner === "STAR") {
        selectedMove = index;
        break;
      }
    }

    /* Block player */

    if (selectedMove === null) {
      for (const index of available) {
        const testBoard = [...board];

        testBoard[index] = "N";

        const result = checkWinner(testBoard);

        if (result?.winner === "N") {
          selectedMove = index;
          break;
        }
      }
    }

    /* Prefer center */

    if (
      selectedMove === null &&
      available.includes(4)
    ) {
      selectedMove = 4;
    }

    /* Otherwise random */

    if (selectedMove === null) {
      selectedMove =
        available[
          Math.floor(Math.random() * available.length)
        ];
    }

    const newBoard = [...board];

    newBoard[selectedMove] = "STAR";

    setBoard(newBoard);

    const result = checkWinner(newBoard);

    if (result) {
      finishGame(result);
      return;
    }

    setPlayerTurn(true);
  };

  /* ==========================================================
     FINISH GAME
  ========================================================== */

  const finishGame = (result) => {
    setWinner(result.winner);
    setWinningCells(result.line);

    if (result.winner === "N") {
      setScore((previous) => ({
        ...previous,
        player: previous.player + 1,
      }));
    }

    if (result.winner === "STAR") {
      setScore((previous) => ({
        ...previous,
        nirvana: previous.nirvana + 1,
      }));
    }
  };

  /* ==========================================================
     RESET
  ========================================================== */

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setWinningCells([]);
    setPlayerTurn(true);
  };

  const resetEverything = () => {
    resetBoard();

    setScore({
      player: 0,
      nirvana: 0,
    });
  };

  /* ==========================================================
     STATUS
  ========================================================== */

  const getStatus = () => {
    if (winner === "N") {
      return "YOU WON";
    }

    if (winner === "STAR") {
      return "NIRVANA WON";
    }

    if (winner === "draw") {
      return "IT'S A DRAW";
    }

    if (playerTurn) {
      return "YOUR MOVE";
    }

    return "NIRVANA IS THINKING";
  };

  /* ==========================================================
     RENDER
  ========================================================== */

  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[var(--color-black)]
        px-6
        py-10
        text-primary
        md:px-10
      "
    >
      {/* ======================================================
          SUBTLE ATMOSPHERE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[650px]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(67,47,88,0.14),transparent_68%)]
          blur-[100px]
        "
      />

      {/* ======================================================
          CONTENT
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 70,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.08,
        }}
        transition={{
          duration: 1.1,
          ease,
        }}
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-80px)]
          w-full
          max-w-[1600px]
          flex-col
        "
      >
        {/* ==================================================
            TOP
        ================================================== */}

        <div
          className="
            relative
            flex
            min-h-[110px]
            shrink-0
            items-center
            justify-between
            px-2
          "
        >
          {/* LEFT */}

          <div className="flex items-center gap-5">
            <p className="text-micro text-muted">
              Nirvana Playground
            </p>
          </div>

          {/* CENTER */}

          <div
            className="
              absolute
              left-1/2
              hidden
              -translate-x-1/2
              items-center
              gap-3
              lg:flex
            "
          >
            <span className="text-micro text-subtle">
              Tic
            </span>

            <span className="text-[var(--color-violet-muted)]">
              /
            </span>

            <span className="text-micro text-subtle">
              Tac
            </span>

            <span className="text-[var(--color-violet-muted)]">
              /
            </span>

            <span className="text-micro text-subtle">
              Nirvana
            </span>
          </div>
        </div>

        {/* ==================================================
            GAME AREA
        ================================================== */}

        <div
          className="
            grid
            min-h-0
            flex-1
            grid-cols-1
            lg:grid-cols-[1fr_520px_1fr]
          "
        >
          {/* ==================================================
              LEFT
          ================================================== */}

          <div
            className="
              relative
              hidden
              p-8
              lg:flex
              lg:flex-col
              lg:justify-between
            "
          >
            {/* PLAYER SYMBOL */}

            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
            >
              <p className="text-micro mb-4 text-subtle">
                Your symbol
              </p>

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  rotate: -10,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.9,
                  ease,
                }}
                className="
                  flex
                  h-[130px]
                  w-[130px]
                  items-center
                  justify-center
                "
              >
                <img
                  src="/images/icons/Game-Pon2.png"
                  alt="Your game symbol"
                  draggable="false"
                  className="
                    h-full
                    w-full
                    select-none
                    object-contain
                  "
                />
              </motion.div>
            </motion.div>

            {/* PLAYER SCORE */}

            <motion.div
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
              <p className="max-w-[230px] text-body-sm text-subtle leading-relaxed">
                Three in a row.
                <br />
                That's all you need.
                <br />
                Probably.
              </p>

              <div className="mt-8 flex items-end gap-3">
                <span className="text-display-md leading-[0.7] text-primary">
                  {String(score.player).padStart(2, "0")}
                </span>

                <span className="text-micro pb-1 text-subtle">
                  Wins
                </span>
              </div>
            </motion.div>
          </div>

          {/* ==================================================
              CENTER
          ================================================== */}

          <div
            className="
              relative
              flex
              flex-col
              items-center
              justify-center
              px-6
              py-8
            "
          >
            {/* STATUS */}

            <AnimatePresence mode="wait">
              <motion.div
                key={getStatus()}
                initial={{
                  opacity: 0,
                  y: 15,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: -15,
                  filter: "blur(8px)",
                }}
                transition={{
                  duration: 0.35,
                }}
                className="
                  mb-8
                  flex
                  items-center
                  gap-4
                "
              >
                <motion.div
                  animate={
                    !playerTurn && !winner
                      ? {
                          scale: [1, 1.35, 1],
                          opacity: [0.35, 1, 0.35],
                        }
                      : {}
                  }
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                  className="
                    h-[6px]
                    w-[6px]
                    rounded-full
                    bg-[var(--color-violet-muted)]
                  "
                />

                <p className="text-body-lg uppercase tracking-[0.2em] text-muted">
                  {getStatus()}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* ==================================================
                GAME BOARD
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                rotate: -3,
                filter: "blur(20px)",
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.2,
                ease,
              }}
              className="
                relative
                aspect-square
                w-full
                max-w-[430px]
                overflow-hidden
                border
                border-[var(--color-border)]
                bg-[var(--color-surface)]
              "
            >
              {/* BOARD BACKGROUND */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_25%_20%,rgba(67,47,88,0.18),transparent_38%),radial-gradient(circle_at_80%_75%,rgba(45,38,75,0.16),transparent_42%),linear-gradient(135deg,#08080a_0%,#0d0b11_50%,#070708_100%)]
                "
              />

              {/* BOARD DOTS */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-[0.12]
                  [background-image:radial-gradient(rgba(221,214,254,0.8)_0.65px,transparent_0.65px)]
                  [background-size:22px_22px]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-[0.06]
                  [background-image:radial-gradient(rgba(129,140,248,0.9)_0.5px,transparent_0.5px)]
                  [background-position:9px_13px]
                  [background-size:37px_37px]
                "
              />

              {/* ACTUAL GRID */}

              <div
                className="
                  relative
                  z-10
                  grid
                  h-full
                  w-full
                  grid-cols-3
                  grid-rows-3
                "
              >
                {board.map((cell, index) => (
                  <GameCell
                    key={index}
                    value={cell}
                    index={index}
                    winner={winningCells.includes(index)}
                    disabled={
                      !playerTurn ||
                      winner ||
                      cell !== null
                    }
                    onClick={() =>
                      handleCellClick(index)
                    }
                  />
                ))}
              </div>
            </motion.div>

            {/* INSTRUCTION */}

            <p className="text-micro mt-7 text-subtle">
              Select an empty square
            </p>
          </div>

          {/* ==================================================
              RIGHT
          ================================================== */}

          <div
            className="
              relative
              hidden
              p-8
              lg:flex
              lg:flex-col
              lg:justify-between
            "
          >
            {/* NIRVANA SYMBOL */}

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
              className="text-right"
            >
              <p className="text-micro mb-5 text-subtle">
                Nirvana
              </p>

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  rotate: 10,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1,
                  ease,
                }}
                className="
                  ml-auto
                  flex
                  h-[130px]
                  w-[130px]
                  items-center
                  justify-center
                "
              >
                <img
                  src="/images/icons/Game-Pon.png"
                  alt="Nirvana game piece"
                  draggable="false"
                  className="
                    h-full
                    w-full
                    select-none
                    object-contain
                  "
                />
              </motion.div>
            </motion.div>

            {/* NIRVANA SCORE */}

            <motion.div
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
              className="text-right"
            >
              <p className="ml-auto max-w-[230px] text-body-sm text-subtle leading-relaxed">
                The house plays ✦.
                <br />
                Beat Nirvana if you can.
              </p>

              <div className="mt-8 flex items-end justify-end gap-3">
                <span className="text-micro pb-1 text-subtle">
                  Wins
                </span>

                <span className="text-display-md leading-[0.7] text-[var(--color-violet-muted)]">
                  {String(score.nirvana).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ==================================================
            BOTTOM CONTROLS
        ================================================== */}

        <div
          className="
            flex
            min-h-[90px]
            shrink-0
            flex-col
            items-center
            justify-between
            gap-5
            px-2
            pt-5
            md:flex-row
          "
        >
          {/* SMALL SCORE */}

          <div
            className="
              flex
              items-center
              gap-7
            "
          >
            <div>
              <p className="text-micro text-subtle">
                You
              </p>

              <p className="text-body-lg mt-1 leading-none text-primary">
                {String(score.player).padStart(2, "0")}
              </p>
            </div>

            <span className="text-[var(--color-border-strong)]">
              /
            </span>

            <div>
              <p className="text-micro text-subtle">
                Nirvana
              </p>

              <p className="text-body-lg mt-1 leading-none text-[var(--color-violet-muted)]">
                {String(score.nirvana).padStart(2, "0")}
              </p>
            </div>
          </div>

          {/* BUTTONS */}

          <div className="flex items-center gap-3">
            <button
              onClick={resetEverything}
              className="
                group
                flex
                items-center
                gap-3
                px-5
                py-4
                text-micro
                text-subtle
                transition-colors
                duration-500
                hover:text-primary
              "
            >
              <RotateCcw
                size={14}
                strokeWidth={1.2}
                className="
                  transition-transform
                  duration-500
                  group-hover:-rotate-180
                "
              />

              Reset score
            </button>

            <button
              onClick={resetBoard}
              className="
                group
                relative
                flex
                items-center
                gap-5
                overflow-hidden
                border
                border-[var(--color-border)]
                bg-[var(--color-violet-soft)]
                px-7
                py-4
                text-primary
                transition-all
                duration-500
                hover:bg-[var(--color-violet-muted)]
                hover:text-white
              "
            >
              <span className="relative z-10 text-micro">
                New round
              </span>

              <span
                className="
                  relative
                  z-10
                  text-lg
                  transition-transform
                  duration-500
                  group-hover:rotate-90
                "
              >
                +
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ============================================================
   GAME CELL
============================================================ */

function GameCell({
  value,
  index,
  winner,
  disabled,
  onClick,
}) {
  return (
    <motion.button
      whileHover={
        !disabled
          ? {
              backgroundColor:
                "rgba(70, 52, 88, 0.16)",
            }
          : {}
      }
      whileTap={
        !disabled
          ? {
              scale: 0.94,
            }
          : {}
      }
      onClick={onClick}
      disabled={disabled}
      className={`
        group
        relative
        flex
        items-center
        justify-center
        overflow-hidden
        border-[var(--color-border)]
        transition-colors
        duration-500

        ${index % 3 !== 2 ? "border-r" : ""}
        ${index < 6 ? "border-b" : ""}

        ${
          winner
            ? "bg-[var(--color-violet-soft)]"
            : "bg-transparent"
        }

        ${
          disabled
            ? "cursor-default"
            : "cursor-pointer"
        }
      `}
    >
      {/* ==================================================
          HOVER DETAILS
      ================================================== */}

      {!value && (
        <>
          <div
            className="
              absolute
              left-3
              top-3
              h-2
              w-2
              border-l
              border-t
              border-[var(--color-violet-muted)]
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-50
            "
          />

          <div
            className="
              absolute
              bottom-3
              right-3
              h-2
              w-2
              border-b
              border-r
              border-[var(--color-violet-muted)]
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-50
            "
          />
        </>
      )}

      {/* ==================================================
          WIN STATE
      ================================================== */}

      <AnimatePresence>
        {winner && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: 1,
            }}
            transition={{
              opacity: {
                duration: 2,
                repeat: Infinity,
              },

              scale: {
                type: "spring",
                stiffness: 150,
                damping: 15,
              },
            }}
            className="
              pointer-events-none
              absolute
              h-[65%]
              w-[65%]
              rounded-full
              bg-[var(--color-violet-soft)]
              blur-[25px]
            "
          />
        )}
      </AnimatePresence>

      {/* ==================================================
          PLAYER
      ================================================== */}

      <AnimatePresence mode="wait">
        {value === "N" && (
          <motion.div
            key="player-piece"
            initial={{
              opacity: 0,
              scale: 0,
              rotate: -25,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              filter: "blur(0px)",
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 14,
            }}
            className="
              relative
              z-10
              flex
              h-[70%]
              w-[70%]
              items-center
              justify-center
            "
          >
            <img
              src="/images/icons/Game-Pon2.png"
              alt="Player"
              draggable="false"
              className="
                h-full
                w-full
                select-none
                object-contain
              "
            />
          </motion.div>
        )}

        {/* ==================================================
            NIRVANA
        ================================================== */}

        {value === "STAR" && (
          <motion.div
            key="nirvana-piece"
            initial={{
              opacity: 0,
              scale: 0,
              rotate: -25,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              filter: "blur(0px)",
            }}
            transition={{
              type: "spring",
              stiffness: 170,
              damping: 14,
            }}
            className="
              relative
              z-10
              flex
              h-[70%]
              w-[70%]
              items-center
              justify-center
            "
          >
            <img
              src="/images/icons/Game-Pon.png"
              alt="Nirvana"
              draggable="false"
              className="
                h-full
                w-full
                select-none
                object-contain
              "
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* CELL NUMBER */}

      <span
        className="
          pointer-events-none
          absolute
          bottom-2
          left-2
          text-[7px]
          tracking-[0.2em]
          text-subtle
          opacity-50
        "
      >
        0{index + 1}
      </span>
    </motion.button>
  );
}