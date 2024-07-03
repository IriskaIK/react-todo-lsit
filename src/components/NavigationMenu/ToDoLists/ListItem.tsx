import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash, faPlus} from "@fortawesome/free-solid-svg-icons";
import React from "react";

import "./styles/listItem.css"
import useListStore from "../../../store/listsStore";
import useModalStore from "../../../store/modalStore";

type ListProps = {
    name : string,
    id : string
}

function ListItem(props: ListProps){
    const {setCurrentList, deleteList, currentList, unsetCurrentList} = useListStore()
    const {toggleIsModalOpen, setTaskListId, setTaskListName, changeModalStatus} = useModalStore()
    function handleListClick(e : React.MouseEvent<HTMLElement>){
        e.stopPropagation()
        setCurrentList(props.id)
    }

    function handleListDeletion(e : React.MouseEvent<HTMLElement>){
        e.stopPropagation()
        deleteList(props.id)
        if(currentList?.id === props.id){
            unsetCurrentList()
        }
    }

    function handleTaskCreation(e : React.MouseEvent<HTMLElement>){
        e.stopPropagation()
        toggleIsModalOpen()
        changeModalStatus("name")
        setTaskListId(props.id)
        setTaskListName(props.name)

    }


    return (
        <div className="list-item" onClick={handleListClick}>
            <div className="list-name">
                {props.name}
            </div>

            <div className="list-actions">


                <div onClick={handleTaskCreation}>
                    <FontAwesomeIcon className="list-action-add" icon={faPlus} />
                </div>
                <div onClick={handleListDeletion}>
                    <FontAwesomeIcon className="list-action-trash" icon={faTrash}  />
                </div>
            </div>

        </div>
    )
}


export default ListItem;