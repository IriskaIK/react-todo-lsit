
import './styles/btn.css'
import useStore from "../../../store/store";


function NewBtn(){
    const {toggleIsModalOpen} = useStore()
    return(
        <button onClick={toggleIsModalOpen} className="search-bar-new-btn">
            New
        </button>

    )
}


export default NewBtn;