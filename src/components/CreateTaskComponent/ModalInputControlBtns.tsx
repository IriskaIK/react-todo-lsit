import Button from "../buttons/Button";
import React, {useEffect, useState} from "react";

type newTaskData = {
    name: string,
    description: string,
    deadline: string,
    listId: number | undefined,
    listName: string,
}
type controlBtnsProps = {
    onCancelClick(): void,
    onPrevStepClick(): void,
    onNextStepClick(): void,
    currentModalStatus: string,
    newTask: newTaskData,

}

function ModalInputControlBtns({
                                   onCancelClick,
                                   onPrevStepClick,
                                   onNextStepClick,
                                   currentModalStatus,
                                   newTask
                               }: controlBtnsProps) {

    const [isCurrentStateInputValid, setCurrentStateInputValid] = useState(false)

    useEffect(() => {
        switch (currentModalStatus){
            case "name":
                setCurrentStateInputValid(newTask.name.length !== 0)
                return
            case "description":
                setCurrentStateInputValid(newTask.description.length !==0)
                return
        }
    }, [newTask, currentModalStatus]);


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
                unavailable={!isCurrentStateInputValid}
            ></Button>
        </>
    )
}

export default ModalInputControlBtns;