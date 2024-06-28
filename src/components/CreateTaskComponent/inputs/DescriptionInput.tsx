import './inputs.css'
import React from "react";
import useModalStore from "../../../store/modalStore";




function DescriptionInput() {


    const {newTask, setTaskDescription} = useModalStore()

    function onInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setTaskDescription(e.target.value)
    }


    return (
        <div className="modal-input-container">
            <div className="modal-desc-input-holder">
                <textarea
                    className="modal-desc-input"
                    placeholder="Enter description"
                    value={newTask.description}
                    onChange={onInputChange}
                />
            </div>
        </div>


    )
}

export default DescriptionInput;