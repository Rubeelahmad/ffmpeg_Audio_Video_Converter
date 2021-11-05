import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div>
            <Link to='/' className="text-warning m-3">Home</Link>
            <Link to='/converter' className="text-warning m-3">Converter</Link>
        </div>
    )
}

export default Navbar;