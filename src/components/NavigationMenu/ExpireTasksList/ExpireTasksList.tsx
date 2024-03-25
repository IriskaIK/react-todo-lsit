import TaskItem from "./TaskItem";

import "./styles/tasksList.css"


function ExpireTasksList(){

    let tasks: { name: string, id: number }[] = [
        { name: "Task 1", id: 1 },
        { name: "Task 2", id: 2 },
        { name: "Task 3", id: 3 },
    ];

    const displayedTasks = tasks.slice(0, 3);


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
                {tasks.length === 0 && <div>Empty</div>}
            </div>
        </div>
    )
}



export default ExpireTasksList;