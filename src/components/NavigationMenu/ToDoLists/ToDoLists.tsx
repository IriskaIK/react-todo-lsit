import "./styles/lists.css"
import ListItem from "./ListItem";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleArrowDown} from "@fortawesome/free-solid-svg-icons";
import useTaskStore from "../../../store/taskStore";

function ToDoLists(){

    const { lists } = useTaskStore((state) => ({
        lists: state.lists
    }));





    const displayedLists = lists.slice(0, 5);

    return (

        <div>
            <div className="lists-title">
                Your Lists
            </div>
            <div className="list-items-container">
                {displayedLists.map((list, index) => (

                    <div key={index}>
                        <ListItem name={list.name} id={list.id}></ListItem>
                    </div>
                ))}
                {lists.length > 5 &&
                    <FontAwesomeIcon className="more-btn" icon={faCircleArrowDown} />
                }
                {lists.length === 0 && <div>Empty</div>}
            </div>
        </div>


    )
}

export default ToDoLists;