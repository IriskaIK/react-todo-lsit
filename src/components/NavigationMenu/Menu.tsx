
import './menu.css';
import SearchBar from "./SearchBar/SearchBar";
import ToDoLists from "./ToDoLists/ToDoLists";
import ExpireTasksList from "./ExpireTasksList/ExpireTasksList"
import Contacts from "./Contacts/Contacts";
import Button from "../buttons/Button";
import useModalStore from "../../store/modalStore";
function Menu() {

    const {toggleIsModalOpen, changeModalStatus} = useModalStore()

    function onNewBtnClick(){
        toggleIsModalOpen()
        changeModalStatus("name")
    }


    return (
        <div className="menu">
            <div className="search-bar-btn-container">
                <SearchBar></SearchBar>
                <Button onClick={onNewBtnClick} buttonText={"New"} textColor={"blue"} size="small"></Button>
            </div>

            <hr className="splitter"/>


            <div className="container">

                <ToDoLists></ToDoLists>

            </div>

            <hr className="splitter"/>

            <div className="container">

                <ExpireTasksList></ExpireTasksList>

            </div>

            <hr className="splitter"/>

            <div className="container">

                <Contacts></Contacts>

            </div>



        </div>
    )
}

export default Menu;