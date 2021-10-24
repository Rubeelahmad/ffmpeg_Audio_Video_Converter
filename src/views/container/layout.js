import React from "react";
import Content from "./content";
import Navbar from "./Navbar";

function Layout() {
    return (
        <>
            <div className="container">
                <div className="container col-md-12 bg-success h-25">
                    <Navbar />
                </div>
                <div>
                    <Content />
                </div>
                <div className="col-md-12 bg-info">
                    This is footer
                </div>
            </div>
        </>
    )
}

export default Layout;
