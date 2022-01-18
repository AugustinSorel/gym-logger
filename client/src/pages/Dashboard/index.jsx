import { Footer } from "../../components/Footer";
import { Main } from "../../components/Main";
import PrivateRoute from "../../components/PrivateRoute";
import fadeTransition from "../../framer-motion/transition";
import * as DashboardStyle from "../../styles/Dashboard.styled";

export const Dashboard = () => {
  return (
    <PrivateRoute>
      <DashboardStyle.Container
        initial={fadeTransition.initial}
        animate={fadeTransition.animate}
        exit={fadeTransition.exit}
      >
        <Main />
        <Footer />
      </DashboardStyle.Container>
    </PrivateRoute>
  );
};
