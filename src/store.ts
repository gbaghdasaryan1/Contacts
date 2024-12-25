import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export enum ModalTypeEnum {
    Edit,
    Delete,
    Create,
}

type ModalStoreType = {
    isOpen: boolean;
    onClose: VoidFunction;
    onOpen: (type: ModalTypeEnum, params?: unknown) => void;
    modalType: ModalTypeEnum | null;
    params: unknown | null;
}

export const useModalStore = create<ModalStoreType>()(immer((set) => ({
  isOpen: false,
  onOpen:  (type: ModalTypeEnum, params: unknown) => set({ isOpen: true , modalType: type, params}),
  onClose:  () => set({ isOpen: false }),
  modalType: null,
  params: {}
})))