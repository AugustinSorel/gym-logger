import { AnimatePresence } from "framer-motion";
import * as LoaderStyle from "../../styles/Loader.styled";

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const loadingCircleVariants = {
  end: {
    y: ["0%", "100%", "0%"],
  },
};

const loadingCircleTransition = {
  duration: 0.4,
  repeat: Infinity,
  ease: "easeInOut",
};

export const Loader = () => {
  return (
    <AnimatePresence initial={true}>
      <LoaderStyle.Container
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
        <LoaderStyle.Circle
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <LoaderStyle.Circle
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <LoaderStyle.Circle
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
      </LoaderStyle.Container>
    </AnimatePresence>
  );
};
