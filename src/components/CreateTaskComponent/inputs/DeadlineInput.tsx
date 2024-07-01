import React from "react";
import useModalStore from "../../../store/modalStore";


function DeadlineInput() {

    const {newTask, setTaskDeadline} = useModalStore()

    function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setTaskDeadline(e.target.value)
    }

    return (
        <div className="modal-input-container">
            <div className="modal-deadline-input-holder">
                <input
                    type="datetime-local"
                    onChange={onInputChange}
                    value={newTask.deadline}
                    min={new Date().toISOString().slice(0, -8)}
                    className="modal-deadline-input" placeholder="Description of the task (optional)"/>
            </div>
        </div>

    )
}


export default DeadlineInput;