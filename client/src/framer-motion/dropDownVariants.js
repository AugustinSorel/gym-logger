export const listContainerVariants = {
  hoverStart: {
    y: 0,
    opacity: 1,
    display: "flex",
    backdropFilter: "blur(4px)",
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },

  hoverEnd: {
    y: "100%",
    opacity: 0,
    backdropFilter: "blur(0px)",
    transitionEnd: {
      display: "none",
    },
    transition: { staggerChildren: 0.05, staggerDirection: -1, delay: 0.3 },
  },
};

export const listItemsVariants = {
  hoverStart: {
    opacity: 1,
    x: 0,
  },
  hoverEnd: {
    opacity: 0,
    x: -20,
  },
};
export const svgHoverVariants = {
  hoverStart: {
    rotate: 180,
    stroke: "#fff",
  },

  hoverEnd: {
    rotate: 0,
    stroke: "#b3b3b3",
  },
};
