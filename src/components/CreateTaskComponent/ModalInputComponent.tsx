import './main.css'
import React from "react";
import useModalStore from "../../store/modalStore";
import ModalInputControlBtns from "./ModalInputControlBtns";
import useListStore from "../../store/listsStore";


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

    const {
        addList,
        addTask,
        setCurrentList,
        currentList
    } = useListStore()


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

    function onCreateClick(){
        if(newTask.listName && newTask.listId){
            const listId = addList(newTask.listName, newTask.listId)
            addTask(listId, newTask.name, newTask.description, newTask.deadline)

            if(currentList?.id === listId) setCurrentList(currentList.id)

            resetNewTask()
            changeModalStatus("closed")
            toggleIsModalOpen()

        }


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
                    onNextStepClick={(currentModalStatus==='list selection')?onCreateClick:onNextStepClick}
                    currentModalStatus={currentModalStatus}
                    newTask={newTask}></ModalInputControlBtns>
            </div>
        </div>
    )
}

export default ModalInputComponent;