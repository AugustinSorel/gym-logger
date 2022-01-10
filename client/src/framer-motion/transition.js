const transitionLeftToRight = {
  initial: { x: "100vw" },
  animate: { x: 0 },
  exit: { x: "100vw" },
};

const transitionRightToLeft = {
  initial: { x: "-100vw" },
  animate: { x: 0 },
  exit: { x: "-100vw" },
};

export const pageTransition = {
  transitionLeftToRight: transitionLeftToRight,
  transitionRightToLeft: transitionRightToLeft,
};

export const homeTransition = {
  initial: { x: "-100vw" },
  animate: { x: 0 },
  exit: { x: "-100vw" },
};
