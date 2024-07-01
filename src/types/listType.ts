import {Task} from "./taskType";

export type List = {
    id: string;
    name: string;
    tasks: Task[];
    createdAt : Date;
    updatedAt : Date;
};