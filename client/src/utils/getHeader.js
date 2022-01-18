import Cookies from "js-cookie";

const getHeader = () => {
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("jwt")}`,
    },
  };
};

export default getHeader;
