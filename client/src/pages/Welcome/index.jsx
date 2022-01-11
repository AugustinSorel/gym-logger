import { Header } from "../../components/Header";
import * as HomeStyle from "../../styles/Home.styled";
import transition from "../../framer-motion/transition";
import { LinkButton } from "../../components/LinkButton";

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
          <LinkButton text={"Login"} to={"/login"} />
          <LinkButton text={"Sign Up"} to={"/sign-up"} />
        </HomeStyle.LinksContainer>
      </HomeStyle.ContentContainer>
    </HomeStyle.Container>
  );
};
