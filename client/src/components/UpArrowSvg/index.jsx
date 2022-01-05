import { svgHoverVariants } from "../../framer-motion/dropDownVariants";
import { SvgContainer } from "../../styles/UpArrowSvg.styled";

export const UpArrowSvg = ({ isHover }) => {
  return (
    <SvgContainer
      variants={svgHoverVariants}
      animate={isHover ? "hoverStart" : "hoverEnd"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z" />
    </SvgContainer>
  );
};
