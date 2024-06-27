import './nameInput.css'
import React, {useState} from "react";
import useModalStore from "../../../store/modalStore";




function DescriptionInput() {


    const {newTask, setTaskDescription} = useModalStore()

    function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setTaskDescription(e.target.value)
    }


    return (
        <div className="modal-input-container">
            <div className="modal-name-input-holder">
                <input
                    type="text"
                    className="modal-name-input"
                    placeholder="Enter description"
                    value={newTask.description}
                    onChange={onInputChange}
                />
            </div>
        </div>


    )
}

export default DescriptionInput;