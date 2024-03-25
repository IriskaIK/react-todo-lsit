
import './menu.css';
import SearchBar from "./SearchBar/SearchBar";
import NewBtn from "./SearchBar/NewBtn";
import ToDoLists from "./ToDoLists/ToDoLists";
import ExpireTasksList from "./ExpireTasksList/ExpireTasksList"
import Contacts from "./Contacts/Contacts";


function Menu() {
    return (
        <div className="menu">
            <div className="search-bar-btn-container">
                <SearchBar></SearchBar>
                <NewBtn></NewBtn>
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