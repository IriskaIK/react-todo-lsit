import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faEye, faTrash} from "@fortawesome/free-solid-svg-icons";

import "./styles/taskItem.css"

type TaskProps = {
    name : string,
    id : string
}


function TaskItem(props : TaskProps){
    return (
        <div className="task-item">
            <div className="task-name">
                {props.name}
            </div>

            <div className="task-actions">

                <FontAwesomeIcon className="task-action-check" icon={faCircleCheck} />
                <FontAwesomeIcon className="task-action-see" icon={faEye} />
                <FontAwesomeIcon className="task-action-trash" icon={faTrash} />
            </div>
        </div>
    )
}


export default TaskItem;