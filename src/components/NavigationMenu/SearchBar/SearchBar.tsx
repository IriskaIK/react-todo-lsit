import {ReactSearchAutocomplete} from "react-search-autocomplete";

import '../menu.css';
import './styles/searchBar.css'
import useListStore from "../../../store/listsStore";
import {Task} from "../../../types/taskType";

function SearchBar() {
    const {tasks, setCurrentList} = useListStore()

    function onSelect(item: Task){
        setCurrentList(item.listId)
    }

    return (
        // className="search-bar"
        <div style={{ width: 200 }}>
            {/*<FontAwesomeIcon className="search-bar-input-icon" icon={faMagnifyingGlass}/>*/}
            <ReactSearchAutocomplete<Task> items={tasks} onSelect={onSelect}></ReactSearchAutocomplete>
            {/*<input className="nav-search-bar" placeholder="Search"/>*/}


        </div>
    )
}

export default SearchBar;