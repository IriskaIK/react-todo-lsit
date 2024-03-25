
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import '../menu.css';
import './styles/searchBar.css'
function SearchBar(){
    return(
        <div className="search-bar">
            <FontAwesomeIcon className="search-bar-input-icon" icon={faMagnifyingGlass} />

                <input className="nav-search-bar" placeholder="Search"/>


        </div>
    )
}

export default SearchBar;