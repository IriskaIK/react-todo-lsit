import NameInput from "./inputs/NameInput";
import './main.css'
type ModalProps =  {

}


function CreateTaskModal(props : ModalProps){


    return (
        <div className="create-task-modal">
            <NameInput></NameInput>
        </div>
    )
}

export default CreateTaskModal;