export type Task = {
    id: string;
    name: string;
    description : string;
    deadline : string;
    createdAt: Date;
    updatedAt: Date;
    status: boolean;
    listId : string;
};

export type TaskByCreationDate = {
    taskCreatedToday: Task[];
    taskCreatedMoreThanDayAgo: Task[];
    taskCreatedMoreThanWeekAgo: Task[];
};