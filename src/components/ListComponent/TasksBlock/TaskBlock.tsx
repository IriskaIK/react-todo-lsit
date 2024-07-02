import "./taskBlock.css"
import TaskItem from "./TaskItem";
import {Task} from "../../../types/taskType";

type TaskBlockProps = {
    title : string,
    tasks : Task[],
}

function TaskBlock(props: TaskBlockProps){
    return (
        <div className="task-block">
            {props.tasks.length !== 0 &&
                (<div className="block-title">
                    {props.title}
                </div>)
            }

            <div className="task-list">
                { props.tasks.map((task, index) => (

                    <div key={index}>
                        <TaskItem name={task.name} id={task.id} deadline={task.deadline} status={task.status}></TaskItem>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default TaskBlock;