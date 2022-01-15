import Cookies from "js-cookie";

const storeCookie = (key, value) => {
  Cookies.set(key, value, { expires: 30 });
};

export default storeCookie;
