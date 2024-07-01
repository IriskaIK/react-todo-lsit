import "./listField.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {format} from "date-fns";


type TitleProps = {
    title : string,
    updatedAt : Date,
    createdAt : Date
}


function ListTitleField(props: TitleProps){
    return (
        <div className="list-title-container">

            <div className="list-title">
                {props.title}

                <FontAwesomeIcon className="edit-icon" icon={faPen} />
            </div>

            <div className="time-stamps">
                <div className="date-field">
                    Updated at: {format(props.updatedAt, "dd/MM/yyyy")}
                </div>
                <div className="date-field">
                    Created at: {format(props.createdAt, "dd/MM/yyyy")}
                </div>
            </div>

        </div>
    )
}


export default  ListTitleField