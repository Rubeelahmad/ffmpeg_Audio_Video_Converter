import React from "react";

function ConverterButton(props) {
    const handleClick = (e) => {
        console.log("Data:::::::: ", e.target.value);
        console.log("Data:::::::: ", props.history);
        // props.history.push("/converter")
    }

    console.log("Data::::::::: ")
    
    return(
        <div>
            <button className="p-3 m-3 btn btn-outline-primary text-uppercase" to="/converter" onClick={handleClick} value={props.property.path}>{props.property.name}</button>
        </div>
    )
}

export default ConverterButton;
