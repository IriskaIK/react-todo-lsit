import "./listField.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPen} from "@fortawesome/free-solid-svg-icons";


type TitleProps = {
    title : string,
    updatedAt : string,
    createdAt : string
}


function ListTitleField(props: TitleProps){
    return (
        <div>

            <div className="list-title">
                {props.title}

                <FontAwesomeIcon className="edit-icon" icon={faPen} />
            </div>

            <div className="time-stamps">
                <div className="date-field">
                    Updated at: {props.updatedAt}
                </div>
                <div className="date-field">
                    Created at: {props.createdAt}
                </div>
            </div>

        </div>
    )
}


export default  ListTitleField