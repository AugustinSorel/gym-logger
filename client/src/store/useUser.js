import create from "zustand";
import loadCookie from "../utils/loadCookie";
import storeCookie from "../utils/storeCookie";
import verifyToken from "../utils/verifyToken";

const getUserToken = () => {
  const token = loadCookie("jwt");
  const verifiedToken = verifyToken(token);
  return verifiedToken;
};

const useUser = create((set) => ({
  userToken: getUserToken(),
  setUserToken: (userToken) => {
    set(() => ({ userToken: userToken }));
    storeCookie("jwt", userToken);
  },

  user: null,
  setUser: (user) => set(() => ({ user: user })),
}));

export default useUser;
