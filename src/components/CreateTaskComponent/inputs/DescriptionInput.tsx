import useModalStore from "../../../store/modalStore";
import React, {useState} from "react";
import Button from "../../buttons/Button";

function DescriptionInput(){
    const {changeModalStatus, toggleIsModalOpen, currentModalStatus} = useModalStore()


    const [inputValue, setInputValue] = useState<string>("")

    function onCancelClick(){
        toggleIsModalOpen()
        changeModalStatus("closed")
    }

    function onPrevStepClick(){
        changeModalStatus("name")
    }
    function onNextStepClick(){
        changeModalStatus("description")
    }

    function onInputChange(e : React.ChangeEvent<HTMLInputElement>){
        setInputValue(e.target.value)
    }


    return (
        <div className="modal-container">
            <div className="modal-title-container">
                <div className="modal-title">
                    Task name
                </div>
            </div>
            <div className="modal-input-container">
                <div className="modal-name-input-holder">
                    <input
                        type="text"
                        className="modal-name-input"
                        placeholder="Type desctiption"
                        value={inputValue}
                        onChange={onInputChange}
                    />
                </div>
            </div>

            <div className="btns-holder">
                <Button onClick={onCancelClick}
                        buttonText="Cancel"
                        size="big"
                        textColor="red"></Button>
                <Button
                    onClick={onPrevStepClick}
                    buttonText="Prev step"
                    size="big"

                    unavailable={(currentModalStatus === 'name')}
                    textColor="blue"></Button>
                <Button
                    onClick={onNextStepClick}
                    buttonText="Next step"
                    size="big"
                    textColor="green"
                    unavailable={(inputValue.length === 0)}
                ></Button>
            </div>
        </div>
    )

}


export default DescriptionInput;