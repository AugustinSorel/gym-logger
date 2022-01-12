import { Footer } from "../../components/Footer";
import { Main } from "../../components/Main";
import fadeTransition from "../../framer-motion/transition";
import * as HomeStyle from "../../styles/Home.styled";

export const Home = () => {
  return (
    <HomeStyle.Container
      initial={fadeTransition.initial}
      animate={fadeTransition.animate}
      exit={fadeTransition.exit}
    >
      <Main />
      <Footer />
    </HomeStyle.Container>
  );
};
