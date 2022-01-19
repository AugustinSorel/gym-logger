export const backdropVariants = {
  initial: {
    opacity: 0,
    // backdropFilter: "blur(0px)",
  },

  animate: {
    opacity: 1,
    // backdropFilter: "blur(4px)",
  },

  exit: {
    opacity: 0,
    // backdropFilter: "blur(0px)",
  },
};

export const dropInVariants = {
  initial: {
    y: "-100vh",
  },

  animate: {
    y: 0,
  },

  exit: {
    y: "100vh",
  },
};
