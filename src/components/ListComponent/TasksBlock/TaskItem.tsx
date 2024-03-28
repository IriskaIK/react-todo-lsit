import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faEye, faTrash} from "@fortawesome/free-solid-svg-icons";

import "./taskItem.css"
import {TaskData} from "../types";


function TaskItem(props : TaskData){
    return (
        <div className="task-list-item">
            <div className="task-list-name">
                <FontAwesomeIcon className="task-list-action-check" icon={faCircleCheck} />
                {props.name}
            </div>

            <div className="task-list-actions">
                <div>
                    Expire at: {props.expireDate}
                </div>
                <FontAwesomeIcon className="task-list-action-see" icon={faEye} />
                <FontAwesomeIcon className="task-list-action-trash" icon={faTrash} />
            </div>
        </div>
    )
}


export default TaskItem;