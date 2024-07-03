import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faEye, faTrash, faXmarkCircle} from "@fortawesome/free-solid-svg-icons";
import {format} from "date-fns"
import "./taskItem.css"
import React from "react";
import useListStore from "../../../store/listsStore";

type Task = {
    id: string;
    name: string;
    deadline : string;
    status: boolean;
};

function TaskItem(props : Task){
    const {deleteTask, currentList, setCurrentList, toggleTaskStatus} = useListStore()

    function handleOnDeleteClick(e: React.MouseEvent<HTMLElement>){
        e.stopPropagation()
        if(currentList?.id){
            deleteTask(currentList.id, props.id)
            setCurrentList(currentList.id)
        }

    }

    function handleOnStatusChangeClick(e: React.MouseEvent<HTMLElement>){
        e.stopPropagation()
        if(currentList?.id){
            toggleTaskStatus(currentList.id, props.id)
            setCurrentList(currentList.id)
        }

    }

    return (
        <div className={"task-list-item" + ((props.status) ? ' complete-task-item' : '')}>
            <div className="task-list-name">
                { props.status
                    ?
                    <div onClick={handleOnStatusChangeClick}>
                        <FontAwesomeIcon className="task-list-action-cancel" icon={faXmarkCircle}/>
                    </div>
                    :
                    <div onClick={handleOnStatusChangeClick}>
                        <FontAwesomeIcon className="task-list-action-check" icon={faCircleCheck}/>
                    </div>
                }
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