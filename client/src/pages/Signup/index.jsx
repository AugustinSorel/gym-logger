import { pageTransition } from "../../framer-motion/transition";
import { motion } from "framer-motion";

export const Signup = () => {
  return (
    <motion.main
      initial={pageTransition.transitionLeftToRight.initial}
      animate={pageTransition.transitionLeftToRight.animate}
      exit={pageTransition.transitionLeftToRight.exit}
    >
      <h1>this is the Sign Up page</h1>
    </motion.main>
  );
};
