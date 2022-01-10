import { BottomToolbar } from "../../components/BottomToolbar";
import { GraphSection } from "../../components/GraphSection";
import { homeTransition } from "../../framer-motion/transition";
import * as HomeStyle from "../../styles/Home.styled";

export const Home = () => {
  return (
    <HomeStyle.Container
      initial={homeTransition.initial}
      animate={homeTransition.animate}
      exit={homeTransition.exit}
    >
      <GraphSection />
      <BottomToolbar />
    </HomeStyle.Container>
  );
};
