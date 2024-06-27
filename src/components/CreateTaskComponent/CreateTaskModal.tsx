import NameInput from "./inputs/NameInput";
import DescriptionInput from "./inputs/DescriptionInput";



import './main.css'
import useModalStore from "../../store/modalStore";
import ModalInputComponent from "./ModalInputComponent";
import React, {useState} from "react";



function CreateTaskModal(){
    const {currentModalStatus,} = useModalStore()




    const renderInput = () =>{
        switch (currentModalStatus){
            case "closed":
                return <></>
            case "name":
                return <NameInput></NameInput>
            case "description":
                return <DescriptionInput></DescriptionInput>
        }
    }



    return (
        <div className="create-task-modal">
            {/*{renderInput()}*/}

            <ModalInputComponent modalTitle="Task title">
                {renderInput()}
            </ModalInputComponent>



        </div>
    )
}

export default CreateTaskModal;