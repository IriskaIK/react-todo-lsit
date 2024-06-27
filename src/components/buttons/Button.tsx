import "./button.css"

type btnProps = {
    onClick: () => void;
    buttonText : string;
    textColor? : string;
    size : string;
    unavailable? : boolean;
}


function Button(props : btnProps){
    if(props.unavailable){
        return (
            <button className={("btn")
                + ((props.size === "big") ? " big " : " small ")
                + (props.textColor)
                + " unavailable"}>
                <p className="btn-text">
                    {props.buttonText}
                </p>
            </button>
        )
    }return (
        <button onClick={props.onClick} className={("btn")
            + ((props.size === "big") ? " big " : " small ")
            + (props.textColor)}>
            <p className="btn-text">
                {props.buttonText}
            </p>
        </button>
    )

}

export default Button