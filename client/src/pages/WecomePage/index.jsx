import fadeTransition from "../../framer-motion/transition";
import * as WelcomePageStyle from "../../styles/WelcomePage.styled";
import curveSvg from "../../assets/curve.svg";
import { LinkButton } from "../../components/LinkButton";
import {
  whileHoverScale,
  whileTapScale,
} from "../../framer-motion/whileVariants";
import AnimatedSvg from "../../components/AnimatedSvg";
import iconsList from "../../utils/iconsList";

const WelcomePage = () => {
  return (
    <WelcomePageStyle.Container
      initial={fadeTransition.initial}
      animate={fadeTransition.animate}
      exit={fadeTransition.exit}
      style={{ backgroundImage: `url(${curveSvg})` }}
    >
      <WelcomePageStyle.Title>
        Take your gym progress to the next level.
      </WelcomePageStyle.Title>

      <WelcomePageStyle.IconsContainer>
        {iconsList.map(({ label, path }, index) => (
          <WelcomePageStyle.IconContainer
            key={index}
            whileHover={whileHoverScale}
            whileTap={whileTapScale}
          >
            <WelcomePageStyle.Icon>
              <AnimatedSvg d={path} delay={index} />
            </WelcomePageStyle.Icon>
            <WelcomePageStyle.IconLabel>{label}</WelcomePageStyle.IconLabel>
          </WelcomePageStyle.IconContainer>
        ))}
      </WelcomePageStyle.IconsContainer>

      <WelcomePageStyle.ButtonsContainer>
        <LinkButton text={"Login"} to={"/login"} />
        <LinkButton text={"Sign Up"} to={"/sign-up"} />
      </WelcomePageStyle.ButtonsContainer>
    </WelcomePageStyle.Container>
  );
};

export default WelcomePage;
