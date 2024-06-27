import NameInput from "./inputs/NameInput";
import DescriptionInput from "./inputs/DescriptionInput";
import './main.css'
import useModalStore from "../../store/modalStore";



function CreateTaskModal(){
    const {currentModalStatus} = useModalStore()

    const renderInput = () =>{
        switch (currentModalStatus){
            case "closed":
                return <></>
            case "name":
                return <NameInput></NameInput>;
            case "description":
                return <DescriptionInput></DescriptionInput>
        }
    }

    return (
        <div className="create-task-modal">

            {renderInput()}


        </div>
    )
}

export default CreateTaskModal;