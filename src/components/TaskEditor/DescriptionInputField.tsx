
import './styles/style.css'
function DescriptionInputField(){
    return(
        <div>

            <div className='desc-input-title'>
                Enter description:
            </div>
            <div className="desc-input-container">

                <textarea  className="desc-input-field" placeholder="Description of the task (optional)"/>


            </div>
        </div>

    )
}

export default DescriptionInputField;