import ListTitleField from "./ListTitle/ListTItleField";
import "./main.css"
import TaskBlock from "./TasksBlock/TaskBlock";
import { TaskData } from './types';

const tasks: TaskData[] = [
    { name: "Task 1", id: 1, expireDate: "2024-03-26", status : true},
    { name: "Task 2", id: 2, expireDate: "2024-03-27", status : true},
    // Add more tasks as needed
];

function ListMainContainer(){

    return (
        <div className="list-info">
            <ListTitleField title="List 1" updatedAt="10 Jun 2024" createdAt="10 Jun 2024"></ListTitleField>

            <TaskBlock title="Today" tasks={tasks}></TaskBlock>

            <hr className="splitter-task-list"/>

            <TaskBlock title="Week ago" tasks={tasks}></TaskBlock>

            <hr className="splitter-task-list"/>

            <TaskBlock title="Month ago" tasks={tasks}></TaskBlock>

            <hr className="splitter-task-list"/>
        </div>
    )
}


export default ListMainContainer;