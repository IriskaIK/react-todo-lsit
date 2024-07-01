import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faEye, faTrash} from "@fortawesome/free-solid-svg-icons";
import {format} from "date-fns"
import "./taskItem.css"

type Task = {
    id: string;
    name: string;
    deadline : string;
    status: boolean;
};

function TaskItem(props : Task){
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
                <FontAwesomeIcon className="task-list-action-trash" icon={faTrash} />
            </div>
        </div>
    )
}


export default TaskItem;