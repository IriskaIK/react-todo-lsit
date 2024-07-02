import {create} from 'zustand';
import {devtools, persist} from "zustand/middleware";
import {mountStoreDevtool} from 'simple-zustand-devtools';
import {v4 as uuidv4} from 'uuid';
import * as dateFns from 'date-fns';


import {Task, TaskByCreationDate} from "../types/taskType";
import {List} from "../types/listType";


type State = {
    lists: List[];
    lastAddedTasks: Task[];
    currentList: List | null;
    getTasksByCreationDate: (listId: string) => TaskByCreationDate | null;
    setCurrentList: (listId: string) => void;
    unsetCurrentList: () => void;
    addList: (name: string, listId: string) => string;
    editList: (id: string, name: string) => void;
    deleteList: (id: string) => void;
    addTask: (listId: string, name: string, description: string, deadline: string) => void;
    // editTask: (listId: string, taskId: number, task: Partial<Task>) => void;
    deleteTask: (listId: string, taskId: string) => void;
};


const useTaskStore = create<State>()(
    persist(
        (set, get) => ({
            lists: [],
            lastAddedTasks: [],
            currentList: null,

            setCurrentList: (listId: string) => {
                const {lists} = get();
                const existingList = lists.find(list => list.id === listId);
                if (!existingList) {
                    console.log('list doesnt exist wtf?')
                    return;
                }
                set({currentList: existingList})
            },
            unsetCurrentList: () => {
                set({currentList: null})
            },
            getTasksByCreationDate: (listId: string) => {
                const {lists} = get();
                const list = lists.find(list => list.id === listId);
                if (!list) {
                    return null;
                }

                const now = new Date();
                const taskCreatedToday: Task[] = [];
                const taskCreatedMoreThanDayAgo: Task[] = [];
                const taskCreatedMoreThanWeekAgo: Task[] = [];

                list.tasks.forEach(task => {
                    const createdAt = new Date(task.createdAt);
                    const daysDifference = dateFns.differenceInDays(now, createdAt);

                    if (daysDifference === 0) {
                        taskCreatedToday.push(task);
                    } else if (daysDifference > 0 && daysDifference <= 7) {
                        taskCreatedMoreThanDayAgo.push(task);
                    } else if (daysDifference > 7) {
                        taskCreatedMoreThanWeekAgo.push(task);
                    }
                });

                return {
                    taskCreatedToday: taskCreatedToday,
                    taskCreatedMoreThanDayAgo: taskCreatedMoreThanDayAgo,
                    taskCreatedMoreThanWeekAgo: taskCreatedMoreThanWeekAgo,
                };
            },


            addList: (name: string, listId: string) => {
                const {lists} = get();
                const existingList = lists.find(list => list.id === listId);
                if (existingList) {
                    return listId;
                } else {
                    const currentTime = new Date()
                    const newList: List = {
                        id: listId,
                        name: name,
                        tasks: [],
                        createdAt: currentTime,
                        updatedAt: currentTime
                    };
                    set({lists: [...lists, newList]});
                    return listId;
                }
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
            addTask: (listId: string, name: string, description: string, deadline: string) => {
                const taskId: string = uuidv4()
                const currentTime = new Date()
                const newTask: Task = {
                    id: taskId, name: name, description: description,
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
            deleteTask: (listId, taskId) =>
                set((state) => ({
                    lists: state.lists.map((list) =>
                        list.id === listId
                            ? {...list, tasks: list.tasks.filter((task) => task.id !== taskId)}
                            : list
                    ),
                })),
        }),
        {
            name: 'task-list-storage',
        }
    )
)


mountStoreDevtool('Store', useTaskStore)

export default useTaskStore;
