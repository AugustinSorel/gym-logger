import { BottomToolbar } from "../../components/BottomToolbar";
import { GraphSection } from "../../components/GraphSection";
import fadeTransition from "../../framer-motion/transition";
import * as HomeStyle from "../../styles/Home.styled";

export const Home = () => {
  return (
    <HomeStyle.Container
      initial={fadeTransition.initial}
      animate={fadeTransition.animate}
      exit={fadeTransition.exit}
    >
      <GraphSection />
      <BottomToolbar />
    </HomeStyle.Container>
  );
};
