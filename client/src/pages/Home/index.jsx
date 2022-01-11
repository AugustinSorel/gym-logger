import { BottomToolbar } from "../../components/BottomToolbar";
import { Main } from "../../components/Main";
import fadeTransition from "../../framer-motion/transition";
import * as HomeStyle from "../../styles/Dashboard.styled";

export const Home = () => {
  return (
    <HomeStyle.Container
      initial={fadeTransition.initial}
      animate={fadeTransition.animate}
      exit={fadeTransition.exit}
    >
      <Main />
      <BottomToolbar />
    </HomeStyle.Container>
  );
};
