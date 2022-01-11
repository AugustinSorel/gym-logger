import { Header } from "../../components/Header";
import * as HomeStyle from "../../styles/Home.styled";
import transition from "../../framer-motion/transition";
import {
  whileFocusButton,
  whileHoverButton,
  whileTapButton,
} from "../../framer-motion/whileVariants";

export const Welcome = () => {
  return (
    <HomeStyle.Container
      initial={transition.initial}
      animate={transition.animate}
      exit={transition.exit}
    >
      <Header text="Welcome" />
      <HomeStyle.ContentContainer>
        <HomeStyle.TitlesContainer>
          <HomeStyle.Title>Track your progress at the gym</HomeStyle.Title>
        </HomeStyle.TitlesContainer>
        <HomeStyle.LinksContainer>
          <HomeStyle.LinkStyled
            to={"/login"}
            whileHover={whileHoverButton}
            whileTap={whileTapButton}
            whileFocus={whileFocusButton}
          >
            Login
          </HomeStyle.LinkStyled>
          <HomeStyle.LinkStyled
            to={"/sign-up"}
            whileHover={whileHoverButton}
            whileTap={whileTapButton}
            whileFocus={whileFocusButton}
          >
            Sign Up
          </HomeStyle.LinkStyled>
        </HomeStyle.LinksContainer>
      </HomeStyle.ContentContainer>
    </HomeStyle.Container>
  );
};
