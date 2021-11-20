import React from "react";
import { useHistory } from "react-router";

function AudioConverterButton(props) {
    const history = useHistory();
    const handleClick = (e) => {
        history.push(`/audio/${e.target.value}`)
    }
    
    return(
        <div>
            <button className="p-3 m-3 btn btn-outline-primary text-uppercase" onClick={handleClick} value={props.property.path}>{props.property.name}</button>
        </div>
    )
}

export default AudioConverterButton;
