const storeCookie = (key, value) => {
  const cookie = `${key}=${value};`;
  document.cookie = cookie;
};

export default storeCookie;
