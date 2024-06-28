import NameInput from "./inputs/NameInput";
import DescriptionInput from "./inputs/DescriptionInput";
import DeadlineInput from "./inputs/DeadlineInput";
import ListSelectionInput from "./inputs/ListSelectionInput";
import './main.css'
import useModalStore from "../../store/modalStore";
import ModalInputComponent from "./ModalInputComponent";


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
            case "deadline":
                return <DeadlineInput></DeadlineInput>
            case "list selection":
                return <ListSelectionInput></ListSelectionInput>
        }
    }



    return (
        <div className="create-task-modal">
            <ModalInputComponent modalTitle={"Task " + currentModalStatus}>
                {renderInput()}
            </ModalInputComponent>



        </div>
    )
}

export default CreateTaskModal;