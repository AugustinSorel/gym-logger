import { motion } from "framer-motion";

export const Signup = () => {
  return (
    <motion.main
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "100vw" }}
    >
      <h1>this is the Sign Up page</h1>
    </motion.main>
  );
};
