import { Main } from "../../components/Main";
import { Footer } from "../../components/Footer";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <motion.main
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "-100vw" }}
      style={{ flex: 1, display: "flex", flexDirection: "column" }}
    >
      <Main />
      <Footer />
    </motion.main>
  );
};
