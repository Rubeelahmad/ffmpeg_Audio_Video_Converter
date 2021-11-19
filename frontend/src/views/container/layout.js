import React from "react";
import Content from "./content";
import NavbarComponent from "./Navbar";

function Layout() {
    return (
        <>
            <div className="container">
                <div className="container col-md-12 h-25 mt-4">
                    <NavbarComponent />
                </div>
                <div>
                    <Content />
                </div>
                <div className="container col-md-12 h-25 mt-4 bg-primary">
                    This is footer
                </div>
            </div>
        </>
    )
}

export default Layout;
