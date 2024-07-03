import "./listField.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPen, faBan, faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {format} from "date-fns";
import React, {useState} from "react";
import useListStore from "../../../store/listsStore";


type TitleProps = {
    title : string,
    updatedAt : Date,
    createdAt : Date
}


function ListTitleField(props: TitleProps){

    const {editList, currentList, setCurrentList} = useListStore()

    const [isEditing, setIsEditing] = useState(false)

    const [title, setTitle] = useState(props.title)


    function handleEditClick(){
        setIsEditing(true)
    }

    function handleCloseClick(){
        setIsEditing(false)
        setTitle(props.title)
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
        setTitle(e.target.value)
    }
    function  handleChangeClick(){
        if(currentList?.id){
            editList(currentList.id, title)
            setIsEditing(false)
            setCurrentList(currentList.id)
        }
    }


    return (
        <div className="list-title-container">

            {isEditing ?
                <>
                    <div className="list-title">
                        <input onChange={handleInputChange} className="list-title-input" value={title}/>
                        <FontAwesomeIcon className="edit-icon" icon={faCircleCheck} onClick={handleChangeClick} />
                        <FontAwesomeIcon className="edit-icon" icon={faBan} onClick={handleCloseClick} />
                    </div>

                </>
                :
                <>
                    <div className="list-title">
                        {props.title}
                        <FontAwesomeIcon className="edit-icon" icon={faPen} onClick={handleEditClick} />
                    </div>
                </>
            }


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