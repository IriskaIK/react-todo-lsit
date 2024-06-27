import Button from "../../buttons/Button";
import React from "react";


type controlBtnsProps = {
    onCancelClick() : void,
    onPrevStepClick() : void,
    onNextStepClick() : void,

    currentModalStatus : string,

    inputValue : string,
}

function ModalInputControlBtns({
                                   onCancelClick,
                                   onPrevStepClick,
                                   onNextStepClick,
                                   inputValue,
                                   currentModalStatus}:controlBtnsProps){
    return (
        <>
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
                unavailable={(inputValue.length == 0)}
            ></Button>
        </>
    )
}

export default ModalInputControlBtns;