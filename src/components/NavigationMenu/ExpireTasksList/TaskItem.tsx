import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faEye, faTrash} from "@fortawesome/free-solid-svg-icons";

import "./styles/taskItem.css"
import useListStore from "../../../store/listsStore";

type TaskProps = {
    name : string,
    id : string,
    listId : string
}


function TaskItem(props : TaskProps){

    const { toggleTaskStatus, deleteTask, currentList, setCurrentList } = useListStore()


    function onCheckClick(){
        if(currentList?.id){
            toggleTaskStatus(props.listId, props.id)
            setCurrentList(currentList.id)
        }
    }
    function onDeleteClick(){
        if(currentList?.id){
            deleteTask(props.listId, props.id)
            setCurrentList(currentList.id)
        }
    }

    return (
        <div className="task-item">
            <div className="task-name">
                {props.name}
            </div>

            <div className="task-actions">

                <FontAwesomeIcon onClick={onCheckClick} className="task-action-check" icon={faCircleCheck} />
                <FontAwesomeIcon className="task-action-see" icon={faEye} />
                <FontAwesomeIcon onClick={onDeleteClick} className="task-action-trash" icon={faTrash} />
            </div>
        </div>
    )
}


export default TaskItem;