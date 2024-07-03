import TaskItem from "./TaskItem";

import "./styles/tasksList.css"
import useListStore from "../../../store/listsStore";


function ExpireTasksList(){


    const { getTasksByExpireDate } = useListStore()

    const displayedTasks = getTasksByExpireDate().slice(0, 7);


    return(
        <div>
            <div className="lists-title">
                Soon to expire
            </div>
            <div className="tasks-items-container">
                { displayedTasks.map((task) => (

                    <div key={task.id}>
                        <TaskItem name={task.name} id={task.id} listId={task.listId}></TaskItem>
                    </div>
                ))}
                {displayedTasks.length === 0 && <div>Empty</div>}
            </div>
        </div>
    )
}



export default ExpireTasksList;