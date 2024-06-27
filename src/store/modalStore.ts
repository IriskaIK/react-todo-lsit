import {create} from 'zustand';
import {devtools} from "zustand/middleware";
import {mountStoreDevtool} from 'simple-zustand-devtools';

// Define types for list and task


type ModalStatuses = "closed" | "name" | "description" | "deadline" | "listSelection" | "listCreation"

type State = {

    isModalOpen: boolean;
    currentModalStatus: "closed" | "name" | "description" | "deadline" | "listSelection" | "listCreation",
    toggleIsModalOpen: () => void;
    changeModalStatus : (nextStatus: ModalStatuses) => void;
};

const useModalStore = create<State>()(
    devtools(
        (set) => ({

            isModalOpen: false,
            currentModalStatus: "closed",
            toggleIsModalOpen: () =>
                set((state) => ({
                    isModalOpen: !state.isModalOpen
                })),

            changeModalStatus: (nextStatus: ModalStatuses) =>
                set(() => ({
                    currentModalStatus: nextStatus
                })),
        })));

mountStoreDevtool('modalStore', useModalStore)

export default useModalStore;
