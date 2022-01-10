import fadeTransition from "../../framer-motion/transition";
import { motion } from "framer-motion";

export const Signup = () => {
  return (
    <motion.main
      initial={fadeTransition.initial}
      animate={fadeTransition.animate}
      exit={fadeTransition.exit}
    >
      <h1>this is the Sign Up page</h1>
    </motion.main>
  );
};
