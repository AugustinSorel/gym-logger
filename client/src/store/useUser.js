import create from "zustand";

const useUser = create((set) => ({
  user: false,
  setUser: (user) => set(() => ({ user: user })),
}));

export default useUser;
