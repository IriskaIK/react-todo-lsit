import {create} from 'zustand';
import {devtools} from "zustand/middleware";
import {mountStoreDevtool} from 'simple-zustand-devtools';

// Define types for list and task


type ModalStatuses = "closed" | "name" | "description" | "deadline" | "list selection"
const modalStatusOrder: ModalStatuses[] = ["closed", "name", "description", "deadline", "list selection"];


interface Option {
    readonly label: string;
    readonly value: string;
}

type newTaskData = {
    name: string,
    description: string,
    deadline: string,
    listId: number | undefined,
    listName: Option | null,
}


type State = {

    isModalOpen: boolean;
    newTask: newTaskData;
    currentModalStatus: ModalStatuses,
    toggleIsModalOpen: () => void;
    changeModalStatus: (nextStatus: ModalStatuses) => void;
    changeModalStatusForward: () => void;
    changeModalStatusBackward: () => void;
    setTaskName: (value: string) => void;
    setTaskDescription: (value: string) => void;
    setTaskDeadline: (value: string) => void;
    setTaskListName : (value: Option | null) => void;
    resetNewTask: () => void;
};
// ts is fucking with me
// @ts-ignore
const useModalStore = create<State>()(
    devtools(
        (set) => ({
            isModalOpen: false,
            newTask: {
                name: '',
                description: '',
                deadline: '',
                listId: undefined,
                listName: null
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
            setTaskDeadline: (value: string) =>
                set((state) => ({
                    newTask: {
                        name: state.newTask.name,
                        description: state.newTask.description,
                        deadline: value,
                        listId: state.newTask.listId,
                        listName: state.newTask.listName
                    }
                })),
            setTaskListName: (value: Option | null) =>
                set((state) => ({
                    newTask: {
                        name: state.newTask.name,
                        description: state.newTask.description,
                        deadline: state.newTask.deadline,
                        listId: state.newTask.listId,
                        listName: value
                    }
                })),
            resetNewTask: () => set(() => ({
                newTask : {
                    name: '',
                    description: '',
                    deadline: '',
                    listId: undefined,
                    listName: null
                }
            }))
        })));

mountStoreDevtool('modalStore', useModalStore)

export default useModalStore;
