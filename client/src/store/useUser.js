import create from "zustand";

const useUser = create((set) => ({
  user: true,
  setUser: (user) => set(() => ({ user: user })),
}));

export default useUser;
