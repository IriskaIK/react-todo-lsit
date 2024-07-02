import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faEye, faTrash} from "@fortawesome/free-solid-svg-icons";
import {format} from "date-fns"
import "./taskItem.css"
import React from "react";
import useTaskStore from "../../../store/taskStore";

type Task = {
    id: string;
    name: string;
    deadline : string;
    status: boolean;
};

function TaskItem(props : Task){
    const {deleteTask, currentList, setCurrentList} = useTaskStore()

    function handleOnDeleteClick(e: React.MouseEvent<HTMLElement>){
        e.stopPropagation()
        if(currentList?.id){
            deleteTask(currentList.id, props.id)
            setCurrentList(currentList.id)
        }

    }

    return (
        <div className="task-list-item">
            <div className="task-list-name">
                <FontAwesomeIcon className="task-list-action-check" icon={faCircleCheck} />
                {props.name}
            </div>

            <div className="task-list-actions">
                <div>
                    Expire at: {format(props.deadline, "dd/MM/yyyy")}
                </div>
                <FontAwesomeIcon className="task-list-action-see" icon={faEye} />
                <div onClick={handleOnDeleteClick}>
                    <FontAwesomeIcon className="task-list-action-trash" icon={faTrash}  />
                </div>
            </div>
        </div>
    )
}


export default TaskItem;