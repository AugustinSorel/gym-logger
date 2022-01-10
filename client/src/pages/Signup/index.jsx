import fadeTransition from "../../framer-motion/transition";
import { motion } from "framer-motion";
import { Header } from "../../components/Header";

export const Signup = () => {
  return (
    <motion.main
      initial={fadeTransition.initial}
      animate={fadeTransition.animate}
      exit={fadeTransition.exit}
    >
      <Header text={"Sign Up"} />
      <h1>this is the Sign Up page</h1>
    </motion.main>
  );
};
