import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash, faPlus} from "@fortawesome/free-solid-svg-icons";

import "./styles/listItem.css"

type ListProps = {
    name : string,
    id : number
}

function ListItem(props: ListProps){
    return (
        <div className="list-item">
            <div className="list-name">
                {props.name}
            </div>

            <div className="list-actions">

                <FontAwesomeIcon className="list-action-add" icon={faPlus} />
                <FontAwesomeIcon className="list-action-trash" icon={faTrash} />
            </div>

        </div>
    )
}


export default ListItem;