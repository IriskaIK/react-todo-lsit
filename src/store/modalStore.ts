import {create} from 'zustand';
import {devtools} from "zustand/middleware";
import {mountStoreDevtool} from 'simple-zustand-devtools';

// Define types for list and task


type ModalStatuses = "closed" | "name" | "description" | "deadline" | "listSelection" | "listCreation"
const modalStatusOrder: ModalStatuses[] = ["closed", "name", "description", "deadline", "listSelection"];

type newTaskData = {
    name: string,
    description: string,
    deadline: string,
    listId: number | undefined,
    listName: string,
}

type State = {

    isModalOpen: boolean;
    newTask: newTaskData;
    currentModalStatus: "closed" | "name" | "description" | "deadline" | "listSelection" | "listCreation",
    toggleIsModalOpen: () => void;
    changeModalStatus: (nextStatus: ModalStatuses) => void;
    changeModalStatusForward: () => void;
    changeModalStatusBackward: () => void;
    setTaskName: (value: string) => void;
    setTaskDescription: (value: string) => void;
};

const useModalStore = create<State>()(
    devtools(
        (set) => ({

            isModalOpen: false,
            newTask: {
                name: '',
                description: '',
                deadline: '',
                listId: undefined,
                listName: ''
            },
            currentModalStatus: "closed",
            toggleIsModalOpen: () =>
                set((state) => ({
                    isModalOpen: !state.isModalOpen
                })),

            changeModalStatus: (nextStatus: ModalStatuses) =>
                set(() => ({
                    currentModalStatus: nextStatus
                })),

            changeModalStatusForward: () => {
                set((state) => {
                    const currentIndex = modalStatusOrder.indexOf(state.currentModalStatus);
                    const nextIndex = currentIndex + 1
                    return {currentModalStatus: modalStatusOrder[nextIndex]};
                });
            },

            changeModalStatusBackward: () => {
                set((state) => {
                    const currentIndex = modalStatusOrder.indexOf(state.currentModalStatus);
                    const prevIndex = currentIndex - 1
                    return {currentModalStatus: modalStatusOrder[prevIndex]};
                });
            },
            setTaskName: (value: string) =>
                set((state) => ({
                    newTask: {
                        name: value,
                        description: state.newTask.description,
                        deadline: state.newTask.deadline,
                        listId: state.newTask.listId,
                        listName: state.newTask.listName
                    }
                })),
            setTaskDescription: (value: string) =>
                set((state) => ({
                    newTask: {
                        name: state.newTask.name,
                        description: value,
                        deadline: state.newTask.deadline,
                        listId: state.newTask.listId,
                        listName: state.newTask.listName
                    }
                })),


        })));

mountStoreDevtool('modalStore', useModalStore)

export default useModalStore;
