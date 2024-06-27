import TaskItem from "./TaskItem";

import "./styles/tasksList.css"
import useStore from "../../../store/useTaskStore";


function ExpireTasksList(){


    const { lastAddedTasks } = useStore((state) => ({
        lastAddedTasks: state.lastAddedTasks
    }));

    const displayedTasks = lastAddedTasks.slice(0, 3);


    return(
        <div>
            <div className="lists-title">
                Soon to expire
            </div>
            <div className="tasks-items-container">
                { displayedTasks.map((task, index) => (

                    <div key={index}>
                        <TaskItem name={task.name} id={task.id}></TaskItem>
                    </div>
                ))}
                {lastAddedTasks.length === 0 && <div>Empty</div>}
            </div>
        </div>
    )
}



export default ExpireTasksList;