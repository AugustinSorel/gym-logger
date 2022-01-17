import { Footer } from "../../components/Footer";
import { Main } from "../../components/Main";
import fadeTransition from "../../framer-motion/transition";
import * as DashboardStyle from "../../styles/Dashboard.styled";

export const Dashboard = () => {
  return (
    <DashboardStyle.Container
      initial={fadeTransition.initial}
      animate={fadeTransition.animate}
      exit={fadeTransition.exit}
    >
      <Main />
      <Footer />
    </DashboardStyle.Container>
  );
};
