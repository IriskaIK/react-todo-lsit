import ListTitleField from "./ListTitle/ListTItleField";
import "./main.css"
import TaskBlock from "./TasksBlock/TaskBlock";
import useListStore from "../../store/listsStore";
import {useEffect, useState} from "react";
import {TaskByCreationDate} from "../../types/taskType";

function ListMainContainer(){

    const {currentList, getTasksByCreationDate} = useListStore()
    const [tasksByDate, setTasksByDate] = useState<TaskByCreationDate>()

    useEffect(() => {
        if(currentList?.id){
            const tasks = getTasksByCreationDate(currentList?.id)
            if(tasks){
                setTasksByDate(tasks)
            }

        }
    }, [getTasksByCreationDate, currentList]);

    return (
        <div className="list-info">
            {(currentList && tasksByDate) ?
                <>
                    <ListTitleField title={currentList.name} updatedAt={currentList.updatedAt} createdAt={currentList.createdAt}></ListTitleField>
                    {tasksByDate.taskCreatedToday.length > 0 ?
                        <>
                            <TaskBlock title="Today" tasks={tasksByDate.taskCreatedToday}></TaskBlock>

                            <hr className="splitter-task-list"/>
                        </>
                        : <></>
                    }
                    {tasksByDate.taskCreatedMoreThanDayAgo.length > 0 ?
                        <>
                            <TaskBlock title="Week ago" tasks={tasksByDate.taskCreatedMoreThanDayAgo}></TaskBlock>

                            <hr className="splitter-task-list"/>
                        </>
                        : <></>
                    }
                    {tasksByDate.taskCreatedMoreThanWeekAgo.length > 0 ?
                        <>
                            <TaskBlock title="Month ago" tasks={tasksByDate.taskCreatedMoreThanWeekAgo}></TaskBlock>

                            <hr className="splitter-task-list"/>
                        </>
                        :<></>
                    }
                </>
                :
                <>
                    {/*  some funny gif, when any list isn`t chosen  */}
                </>
            }
        </div>
    )
}


export default ListMainContainer;