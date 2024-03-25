import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faLinkedin, faSquareGithub, faTelegram} from "@fortawesome/free-brands-svg-icons";
import "./contacts.css"
function Contacts(){
    return (
        <div className="contacts-container">
            <div className="title">
                Todo-list on react
            </div>
            <div className="subtitle">
                By Pavlo Petrichenko
            </div>
            <div className="links">
                <FontAwesomeIcon className="link" icon={faSquareGithub} />
                <FontAwesomeIcon className="link" icon={faLinkedin} />
                <FontAwesomeIcon className="link" icon={faInstagram} />
                <FontAwesomeIcon className="link" icon={faTelegram} />
            </div>
        </div>
    )
}


export default Contacts;