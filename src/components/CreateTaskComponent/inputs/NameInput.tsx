import './inputs.css'
import React from "react";
import useModalStore from "../../../store/modalStore";



function NameInput() {
    const {newTask, setTaskName} = useModalStore()
    function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setTaskName(e.target.value)
    }
    return (
        <div className="modal-input-container">
            <div className="modal-name-input-holder">
                <input
                    type="text"
                    className="modal-name-input"
                    placeholder="Enter task name"
                    value={newTask.name}
                    onChange={onInputChange}
                />
            </div>
        </div>


    )
}

export default NameInput;