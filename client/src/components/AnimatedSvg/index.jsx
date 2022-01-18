import { AnimatePresence, motion } from "framer-motion";

const variants = {
  initial: { pathLength: 0, opacity: 0 },
  animate: (i) => {
    const delay = i * 0.5;
    return {
      opacity: 1,
      pathLength: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const AnimatedSvg = ({ d, delay }) => {
  return (
    <AnimatePresence initial>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#b3b3b3"
        width="40"
        height="40"
        viewBox="-1 0 26 24"
      >
        <motion.path
          variants={variants}
          initial="initial"
          animate="animate"
          d={d}
          fill="transparent"
          strokeWidth="2"
          stroke="#b3b3b3"
          strokeLinecap="round"
          custom={delay}
        />
      </svg>
    </AnimatePresence>
  );
};

export default AnimatedSvg;
