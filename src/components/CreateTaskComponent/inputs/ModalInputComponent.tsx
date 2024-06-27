import './nameInput.css'
import React, {useState} from "react";
import useModalStore from "../../../store/modalStore";
import ModalInputControlBtns from "./ModalInputControlBtns";


type modalProps = {
    modalTitle: string,
    children: React.ReactNode;
}

function ModalInputComponent(props: modalProps) {

    const {changeModalStatus, toggleIsModalOpen, currentModalStatus} = useModalStore()


    const [inputValue, setInputValue] = useState<string>("")

    function onCancelClick() {
        toggleIsModalOpen()
        changeModalStatus("closed")
    }

    function onPrevStepClick() {
        return
    }

    function onNextStepClick() {
        changeModalStatus("description")
    }

    function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value)
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
                    inputValue={inputValue}></ModalInputControlBtns>
            </div>
        </div>
    )
}

export default ModalInputComponent;