import './main.css'
import React from "react";
import useModalStore from "../../store/modalStore";
import ModalInputControlBtns from "./ModalInputControlBtns";


type modalProps = {
    modalTitle: string,
    children: React.ReactNode;
}

function ModalInputComponent(props: modalProps) {

    const {
        changeModalStatus,
        toggleIsModalOpen,
        currentModalStatus,
        changeModalStatusForward,
        changeModalStatusBackward,
        resetNewTask,
        newTask
    } = useModalStore()

    function onCancelClick() {
        toggleIsModalOpen()
        resetNewTask()
        changeModalStatus("closed")
    }

    function onPrevStepClick() {
        changeModalStatusBackward()
    }

    function onNextStepClick() {
        changeModalStatusForward()
    }




    return (
        <div className="modal-container">
            <div className="modal-title-container">
                <div className="modal-title">
                    {props.modalTitle}
                </div>
            </div>
            {props.children}
            <div className="btns-holder">
                <ModalInputControlBtns
                    onCancelClick={onCancelClick}
                    onPrevStepClick={onPrevStepClick}
                    onNextStepClick={onNextStepClick}
                    currentModalStatus={currentModalStatus}
                    newTask={newTask}></ModalInputControlBtns>
            </div>
        </div>
    )
}

export default ModalInputComponent;