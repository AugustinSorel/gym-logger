import fadeTransition from "../../framer-motion/transition";
import * as WelcomePageStyle from "../../styles/WelcomePage.styled";
import blobSvg from "../../assets/blob.svg";

const WelcomePage = () => {
  return (
    <WelcomePageStyle.Container
      initial={fadeTransition.initial}
      animate={fadeTransition.animate}
      exit={fadeTransition.exit}
      style={{ backgroundImage: `url(${blobSvg})` }}
    >
      <WelcomePageStyle.BlurContainer>
        <WelcomePageStyle.ParagraphContainer></WelcomePageStyle.ParagraphContainer>
        <WelcomePageStyle.ContentContainer></WelcomePageStyle.ContentContainer>
        <WelcomePageStyle.LogosContainer></WelcomePageStyle.LogosContainer>
        <WelcomePageStyle.IconContainer></WelcomePageStyle.IconContainer>
      </WelcomePageStyle.BlurContainer>
    </WelcomePageStyle.Container>
  );
};

export default WelcomePage;
