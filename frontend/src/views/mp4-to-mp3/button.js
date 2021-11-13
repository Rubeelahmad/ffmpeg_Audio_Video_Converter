import React from "react";
import { useHistory } from "react-router";

function MP4ToMP3ConverterButton(props) {
    const history = useHistory();
    const handleClick = (e) => {
        history.push(`/${e.target.value}`)
    }
    
    return(
        <div>
            <button className="p-3 m-3 btn btn-outline-primary text-uppercase" onClick={handleClick} value={props.property.path}>{props.property.name}</button>
        </div>
    )
}

export default MP4ToMP3ConverterButton;
