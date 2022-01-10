import { Main } from "../../components/Main";
import { Footer } from "../../components/Footer";
import { homeTransition } from "../../framer-motion/transition";
import * as HomeStyle from "../../styles/Home.styled";

export const Home = () => {
  return (
    <HomeStyle.Container
      initial={homeTransition.initial}
      animate={homeTransition.animate}
      exit={homeTransition.exit}
    >
      <Main />
      <Footer />
    </HomeStyle.Container>
  );
};
