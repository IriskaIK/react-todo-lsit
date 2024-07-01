export type Task = {
    id: string;
    name: string;
    description : string;
    deadline : string;
    createdAt: Date;
    updatedAt: Date;
    status: boolean;
};
export type TaskByCreationDate = {
    taskCreatedToday: Task[];
    taskCreatedMoreThanDayAgo: Task[];
    taskCreatedMoreThanWeekAgo: Task[];
};