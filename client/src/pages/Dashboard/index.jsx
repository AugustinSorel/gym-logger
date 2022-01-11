import { BottomToolbar } from "../../components/BottomToolbar";
import { GraphSection } from "../../components/GraphSection";
import { Header } from "../../components/Header";
import fadeTransition from "../../framer-motion/transition";
import * as HomeStyle from "../../styles/Dashboard.styled";

export const Dashboard = () => {
  return (
    <HomeStyle.Container
      initial={fadeTransition.initial}
      animate={fadeTransition.animate}
      exit={fadeTransition.exit}
    >
      <Header text="Gym Logger" />
      <GraphSection />
      <BottomToolbar />
    </HomeStyle.Container>
  );
};
