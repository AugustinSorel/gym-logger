import create from "zustand";

const useModal = create((set) => ({
  isAddValuesModalOpen: false,
  openAddValuesModal: () => set(() => ({ isAddValuesModalOpen: true })),
  closeAddValuesModal: () => set(() => ({ isAddValuesModalOpen: false })),

  isAccountModalOpen: false,
  openAccountModal: () => set(() => ({ isAccountModalOpen: true })),
  closeAccountModal: () => set(() => ({ isAccountModalOpen: false })),
}));

export default useModal;
