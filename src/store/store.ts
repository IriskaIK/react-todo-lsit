import create from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';

// Define types for list and task
type Task = {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    status: boolean;
    expireDate: string;
};

type List = {
    id: number;
    name: string;
    tasks: Task[];
};

type State = {
    lists: List[];
    lastAddedTasks : Task[];
    addList: (name: string) => void;
    editList: (id: number, name: string) => void;
    deleteList: (id: number) => void;
    addTask: (listId: number, task: Task) => void;
    editTask: (listId: number, taskId: number, task: Partial<Task>) => void;
    deleteTask: (listId: number, taskId: number) => void;
};

// Create Zustand store
const useStore = create<State>((set) => ({
    lists: [
        {id: 1, name : 'List 1', tasks:[]},
        {id: 2, name : 'List 2', tasks:[]},
        {id: 3, name : 'List 3', tasks:[]},
    ],
    lastAddedTasks: [
        {id: 1, name : 'Task 1', createdAt: "10 Jun 2024", updatedAt : "10 Jun 2024", status : false, expireDate: '2024-03-27'},
        {id: 2, name: 'Task 2', createdAt: "15 Jun 2024", updatedAt: "15 Jun 2024", status: true, expireDate: '2024-03-30'},
        {id: 3, name: 'Task 3', createdAt: "20 Jun 2024", updatedAt: "20 Jun 2024", status: false, expireDate: '2024-04-05'},
        {id: 4, name: 'Task 4', createdAt: "25 Jun 2024", updatedAt: "25 Jun 2024", status: true, expireDate: '2024-04-10'},
    ],
    addList: (name) =>
        set((state) => ({
            lists: [...state.lists, { id: state.lists.length + 1, name, tasks: [] }],
        })),
    editList: (id, name) =>
        set((state) => ({
            lists: state.lists.map((list) =>
                list.id === id ? { ...list, name } : list
            ),
        })),
    deleteList: (id) =>
        set((state) => ({
            lists: state.lists.filter((list) => list.id !== id),
        })),
    addTask: (listId, task) =>
        set((state) => ({
            lists: state.lists.map((list) =>
                list.id === listId
                    ? { ...list, tasks: [...list.tasks, { ...task, id: list.tasks.length + 1 }] }
                    : list
            ),
        })),
    editTask: (listId, taskId, updatedTask) =>
        set((state) => ({
            lists: state.lists.map((list) =>
                list.id === listId
                    ? {
                        ...list,
                        tasks: list.tasks.map((task) =>
                            task.id === taskId ? { ...task, ...updatedTask } : task
                        ),
                    }
                    : list
            ),
        })),
    deleteTask: (listId, taskId) =>
        set((state) => ({
            lists: state.lists.map((list) =>
                list.id === listId
                    ? { ...list, tasks: list.tasks.filter((task) => task.id !== taskId) }
                    : list
            ),
        })),



}));

mountStoreDevtool('Store', useStore)

export default useStore;
