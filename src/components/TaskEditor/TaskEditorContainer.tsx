import DeadlineInputField from "./DeadlineInputField";
import DescriptionInputField from "./DescriptionInputField";
import ListSelector from "./ListSelector";
import NameInputField from "./NameInputField";

import './styles/style.css'

function TaskEditorContainer(){
    return (
        <div className="task-editor-container">
            <div className="task-editor-block">
                <NameInputField></NameInputField>
                <DeadlineInputField></DeadlineInputField>
            </div>

            <div className="task-editor-block">
                <DescriptionInputField></DescriptionInputField>
                <DeadlineInputField></DeadlineInputField>
                {/*<ListSelector></ListSelector>*/}
            </div>

        </div>


    )
}

export default TaskEditorContainer;