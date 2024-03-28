import './styles/style.css'

function DeadlineInputField(){
    return(
        <div>

            <div className='datetime-input-title'>
                Enter deadline:
            </div>
            <div className="datetime-input-container">

                <input
                    type="datetime-local"
                    className="datetime-input-field" placeholder="Description of the task (optional)"/>


            </div>
        </div>
    )
}

export default DeadlineInputField;