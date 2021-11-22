import React from "react";
import Content from "./content";
import NavbarComponent from "./Navbar";

function Layout() {
    return (
        <>
            <div className="container-flude ">
                <div className="col-md-12 h-25">
                    <NavbarComponent />
                </div>
                <div className="container">
                    <Content />
                </div>
                <div className="container-flude col-md-12 h-25 mt-4 bg-primary">
                    This is footer
                </div>
            </div>
        </>
    )
}

export default Layout;
