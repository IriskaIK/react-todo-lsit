import {create} from 'zustand';
import {devtools} from "zustand/middleware";
import {mountStoreDevtool} from 'simple-zustand-devtools';

import { v4 as uuidv4 } from 'uuid';


// Define types for list and task
type Task = {
    id: string;
    name: string;
    description : string;
    deadline : string;
    createdAt: string;
    updatedAt: string;
    status: boolean;
};

type List = {
    id: string;
    name: string;
    tasks: Task[];
};

type State = {
    lists: List[];
    lastAddedTasks: Task[];
    addList: (name: string, listId:string) => string;
    editList: (id: string, name: string) => void;
    deleteList: (id: string) => void;
    addTask: (listId: string, name: string, description: string, deadline : string) => void;
    // editTask: (listId: string, taskId: number, task: Partial<Task>) => void;
    // deleteTask: (listId: string, taskId: number) => void;
};

function getCurrentDate():string{
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${year}-${month}-${day} ${hours}:${minutes}`
}



// ts is fucking with me
// @ts-ignore
const useTaskStore = create<State>()(
    devtools(
        (set) => ({
            lists: [
                {id: '1', name: 'List 1', tasks: []},
                {id: '2', name: 'List 2', tasks: []},
                {id: '3', name: 'List 3', tasks: []},
            ],
            lastAddedTasks: [
                {
                    id: '1',
                    name: 'Task 1',
                    createdAt: "10 Jun 2024",
                    updatedAt: "10 Jun 2024",
                    status: false,
                    expireDate: '2024-03-27',
                    description : '',
                    deadline : ''
                },
                {
                    id: '2',
                    name: 'Task 2',
                    createdAt: "15 Jun 2024",
                    updatedAt: "15 Jun 2024",
                    status: true,
                    expireDate: '2024-03-30',
                    description : '',
                    deadline : ''
                },
                {
                    id: '3',
                    name: 'Task 3',
                    createdAt: "20 Jun 2024",
                    updatedAt: "20 Jun 2024",
                    status: false,
                    expireDate: '2024-04-05',
                    description : '',
                    deadline : ''
                },
                {
                    id: '4',
                    name: 'Task 4',
                    createdAt: "25 Jun 2024",
                    updatedAt: "25 Jun 2024",
                    status: true,
                    expireDate: '2024-04-10',
                    description : '',
                    deadline : ''
                },
            ],
            addList: (name:string, listId:string ) => {
                set((state) => ({
                    lists: [...state.lists, {id: listId, name, tasks: []}],
                }))
                return listId
            },
            editList: (id, name) =>
                set((state) => ({
                    lists: state.lists.map((list) =>
                        list.id === id ? {...list, name} : list
                    ),
                })),
            deleteList: (id) =>
                set((state) => ({
                    lists: state.lists.filter((list) => list.id !== id),
                })),
            addTask: (listId:string, name:string, description:string, deadline : string) =>{
                const taskId : string = uuidv4()
                const currentTime = getCurrentDate()
                const newTask:Task = {
                    id: taskId, name: name, description:description,
                    deadline: deadline, createdAt: currentTime,
                    updatedAt: currentTime, status: false
                }
                set((state) => ({
                    lists: state.lists.map((list) =>
                        list.id === listId
                            ? {...list, tasks: [...list.tasks, newTask]}
                            : list
                    ),
                }))
            },
            // editTask: (listId, taskId, updatedTask) =>
            //     set((state) => ({
            //         lists: state.lists.map((list) =>
            //             list.id === listId
            //                 ? {
            //                     ...list,
            //                     tasks: list.tasks.map((task) =>
            //                         task.id === taskId ? {...task, ...updatedTask} : task
            //                     ),
            //                 }
            //                 : list
            //         ),
            //     })),
            // deleteTask: (listId, taskId) =>
            //     set((state) => ({
            //         lists: state.lists.map((list) =>
            //             list.id === listId
            //                 ? {...list, tasks: list.tasks.filter((task) => task.id !== taskId)}
            //                 : list
            //         ),
            //     })),


        })));

mountStoreDevtool('Store', useTaskStore)

export default useTaskStore;
