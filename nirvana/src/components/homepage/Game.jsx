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

/* ============================================================
   FIFTH SECTION
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
    if (
      board[index] ||
      winner ||
      !playerTurn
    ) {
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
     NIRVANA / COMPUTER MOVE
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
      .map((cell, index) =>
        cell === null ? index : null
      )
      .filter((index) => index !== null);

    if (!available.length) return;

    /*
      First try winning.
    */

    let selectedMove = null;

    for (const index of available) {
      const testBoard = [...board];

      testBoard[index] = "STAR";

      const result = checkWinner(testBoard);

      if (result?.winner === "STAR") {
        selectedMove = index;
        break;
      }
    }

    /*
      Otherwise block player.
    */

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

    /*
      Prefer center.
    */

    if (
      selectedMove === null &&
      available.includes(4)
    ) {
      selectedMove = 4;
    }

    /*
      Otherwise choose random.
    */

    if (selectedMove === null) {
      selectedMove =
        available[
        Math.floor(
          Math.random() * available.length
        )
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
     RESET BOARD
  ========================================================== */

  const resetBoard = () => {
    setBoard(Array(9).fill(null));

    setWinner(null);

    setWinningCells([]);

    setPlayerTurn(true);
  };

  /* ==========================================================
     RESET EVERYTHING
  ========================================================== */

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
        bg-black
        p-6
        text-white
      "
    >
      {/* ======================================================
          MAIN FRAME
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 80,
          scale: 0.97,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.1,
        }}
        transition={{
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          flex
          min-h-[calc(100vh-48px)]
          w-full
          flex-col
          overflow-hidden

         

          bg-[#050407]
        "
      >
        {/* ==================================================
            BACKGROUND
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0

            bg-[radial-gradient(circle_at_18%_25%,rgba(105,70,180,0.18),transparent_28%),radial-gradient(circle_at_82%_65%,rgba(40,50,130,0.16),transparent_34%),radial-gradient(circle_at_55%_90%,rgba(95,45,140,0.10),transparent_35%),linear-gradient(135deg,#050407_0%,#090711_48%,#05060b_100%)]
          "
        />

        {/* GALAXY DOTS */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.14]

            [background-image:radial-gradient(rgba(205,190,255,0.7)_0.6px,transparent_0.6px)]
            [background-size:25px_25px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.06]

            [background-image:radial-gradient(rgba(120,145,255,0.9)_0.5px,transparent_0.5px)]
            [background-position:11px_8px]
            [background-size:39px_39px]
          "
        />

        {/* PURPLE GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[45%]

            h-[500px]
            w-[500px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-violet-800/[0.08]

            blur-[140px]
          "
        />

        {/* ==================================================
            TOP BAR
        ================================================== */}

        <div
          className="
            relative
            z-20

            flex
            h-[11vh]
            min-h-[90px]
            shrink-0

            items-center
            justify-between

            

            px-6
          "
        >
          {/* LEFT */}

          <div className="flex items-center gap-5">
            <span
              className="
                text-[10px]
                tracking-[0.25em]
                text-violet-200/35
              "
            >
              05
            </span>

            <div
              className="
                h-7
                w-px
                bg-violet-200/[0.15]
              "
            />

            <p
              className="
                text-[11px]
                uppercase
                tracking-[0.28em]
                text-white/55
              "
            >
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
            <span
              className="
                text-[11px]
                uppercase
                tracking-[0.25em]
                text-white/25
              "
            >
              Tic
            </span>

            <span className="text-violet-300/50">
              /
            </span>

            <span
              className="
                text-[11px]
                uppercase
                tracking-[0.25em]
                text-white/25
              "
            >
              Tac
            </span>

            <span className="text-violet-300/50">
              /
            </span>

            <span
              className="
                text-[11px]
                uppercase
                tracking-[0.25em]
                text-white/25
              "
            >
              Nirvana
            </span>
          </div>



        </div>

        {/* ==================================================
            MAIN GAME AREA
        ================================================== */}

        <div
          className="
            relative
            z-10

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

              border-r
              border-violet-200/[0.10]

              p-8

              lg:flex
              lg:flex-col
              lg:justify-between
            "
          >
            {/* TOP */}

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
              <p
                className="
                  mb-4
                  text-[11px]
                  uppercase
                  tracking-[0.3em]
                  text-violet-100/30
                "
              >
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
                  ease: [0.16, 1, 0.3, 1],
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

            {/* BOTTOM */}

            <div>
              <p
                className="
                  max-w-[230px]
                  text-sm
                  leading-relaxed
                  text-white/35
                "
              >
                Three in a row.
                <br />
                That's all you need.
                <br />
                Probably.
              </p>

              <div
                className="
                  mt-8
                  flex
                  items-end
                  gap-3
                "
              >
                <span
                  className="
                    text-[clamp(4rem,6vw,7rem)]
                    leading-[0.65]
                  "
                  style={{
                    fontFamily:
                      '"Instrument Serif", serif',
                  }}
                >
                  {String(score.player).padStart(
                    2,
                    "0"
                  )}
                </span>

                <span
                  className="
                    pb-1
                    text-[8px]
                    uppercase
                    tracking-[0.25em]
                    text-white/25
                  "
                >
                  Wins
                </span>
              </div>
            </div>
          </div>

          {/* ==================================================
              CENTER GAME
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
                  mb-7
                  flex
                  items-center
                  gap-3
                "
              >
                <motion.div
                  animate={
                    !playerTurn && !winner
                      ? {
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 1, 0.3],
                      }
                      : {}
                  }
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                  className="
                    h-[5px]
                    w-[5px]

                    rounded-full

                    bg-violet-300

                    shadow-[0_0_10px_rgba(196,181,253,0.8)]
                  "
                />

                <p
                  className="
                    text-[20px]
                    uppercase
                    tracking-[0.32em]
                    text-white/45
                  "
                >
                  {getStatus()}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* ==================================================
                BOARD
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
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                grid
                aspect-square
                w-full
                max-w-[430px]

                grid-cols-3
                grid-rows-3

                border
                border-violet-200/[0.15]

                bg-black/10

                backdrop-blur-sm
              "
            >
              {board.map((cell, index) => (
                <GameCell
                  key={index}
                  value={cell}
                  index={index}
                  winner={winningCells.includes(
                    index
                  )}
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
            </motion.div>

            {/* INSTRUCTION */}

            <p
              className="
                mt-6
                text-[12px]
                uppercase
                tracking-[0.3em]
                text-white/20
              "
            >
              Select an empty square
            </p>
          </div>

          {/* ==================================================
              RIGHT — NIRVANA
          ================================================== */}

          <div
            className="
              relative
              hidden

              border-l
              border-violet-200/[0.10]

              p-8

              lg:flex
              lg:flex-col
              lg:justify-between
            "
          >
            {/* TOP */}

            <div className="text-right">
              <p
                className="
                  mb-5
                  text-[11px]
                  uppercase
                  tracking-[0.3em]
                  text-violet-100/30
                "
              >
                Nirvana
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
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
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
                <motion.img
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
            </div>

            {/* BOTTOM */}

            <div className="text-right">
              <p
                className="
                  ml-auto
                  max-w-[230px]
                  text-sm
                  leading-relaxed
                  text-white/35
                "
              >
                The house plays ✦.
                <br />
                Beat Nirvana if you can.
              </p>

              <div
                className="
                  mt-8
                  flex
                  items-end
                  justify-end
                  gap-3
                "
              >
                <span
                  className="
                    pb-1
                    text-[8px]
                    uppercase
                    tracking-[0.25em]
                    text-white/25
                  "
                >
                  Wins
                </span>

                <span
                  className="
                    text-[clamp(4rem,6vw,7rem)]
                    leading-[0.65]
                    text-violet-100
                  "
                  style={{
                    fontFamily:
                      '"Instrument Serif", serif',
                  }}
                >
                  {String(
                    score.nirvana
                  ).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================
            BOTTOM BAR
        ================================================== */}

        <div
          className="
            relative
            z-20

            grid
            min-h-[76px]
            shrink-0

            grid-cols-[1fr_auto_auto]

            border-t
            border-violet-200/[0.12]

            bg-black/10

            backdrop-blur-md
          "
        >
          {/* SCORE */}

          <div
            className="
              flex
              items-center
              gap-7
              px-6
            "
          >
            <div>
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.25em]
                  text-white/25
                "
              >
                You
              </p>

              <p
                className="
                  mt-1
                  text-lg
                  leading-none
                "
                style={{
                  fontFamily:
                    '"Instrument Serif", serif',
                }}
              >
                {String(score.player).padStart(
                  2,
                  "0"
                )}
              </p>
            </div>

            <span className="text-white/15">
              /
            </span>

            <div>
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.25em]
                  text-white/25
                "
              >
                Nirvana
              </p>

              <p
                className="
                  mt-1
                  text-lg
                  leading-none
                  text-violet-200
                "
                style={{
                  fontFamily:
                    '"Instrument Serif", serif',
                }}
              >
                {String(
                  score.nirvana
                ).padStart(2, "0")}
              </p>
            </div>
          </div>

          {/* RESET SCORE */}

          <button
            onClick={resetEverything}
            className="
              group

              flex
              items-center
              gap-3

              border-l
              border-violet-200/[0.12]

              px-7

              text-[9px]
              uppercase
              tracking-[0.22em]

              text-white/35

              transition-all
              duration-500

              hover:bg-white
              hover:text-black
            "
          >
            <RotateCcw
              size={14}
              strokeWidth={1.2}
            />

            Reset score
          </button>

          {/* NEW ROUND */}

          <button
            onClick={resetBoard}
            className="
              group

              relative
              flex
              items-center
              gap-5
              overflow-hidden

              border-l
              border-violet-200/[0.12]

              bg-[#0d0915]

              px-8

              transition-all
              duration-500

              hover:bg-violet-100
              hover:text-black
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -right-10
                top-1/2

                h-24
                w-24

                -translate-y-1/2

                rounded-full

                bg-violet-700/20

                blur-[35px]

                transition-opacity
                duration-500

                group-hover:opacity-0
              "
            />

            <span
              className="
                relative
                z-10

                text-[9px]
                uppercase
                tracking-[0.25em]
              "
            >
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
              "rgba(139, 92, 246, 0.08)",
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

        border-violet-200/[0.13]

        transition-colors
        duration-500

        ${index % 3 !== 2 ? "border-r" : ""}

        ${index < 6 ? "border-b" : ""}

        ${winner
          ? "bg-violet-300/[0.08]"
          : "bg-transparent"
        }

        ${disabled
          ? "cursor-default"
          : "cursor-pointer"
        }
      `}
    >
      {/* HOVER CORNERS */}

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
              border-violet-200/0

              transition-all
              duration-300

              group-hover:border-violet-200/30
            "
          />

          <div
            className="
              bottom-3
              right-3
              absolute

              h-2
              w-2

              border-b
              border-r
              border-violet-200/0

              transition-all
              duration-300

              group-hover:border-violet-200/30
            "
          />
        </>
      )}

      {/* WIN GLOW */}

      <AnimatePresence>
        {winner && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: [0.15, 0.4, 0.15],
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

              h-[80%]
              w-[80%]

              rounded-full

              bg-violet-600/20

              blur-[30px]
            "
          />
        )}
      </AnimatePresence>

      {/* ==================================================
          SYMBOL
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
            <motion.img
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
            <motion.img
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
          text-white/[0.12]
        "
      >
        0{index + 1}
      </span>
    </motion.button>
  );
}