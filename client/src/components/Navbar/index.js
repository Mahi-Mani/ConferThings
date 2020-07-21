import React from "react";

function Navbar() {
    const navStyle = {
        backgroundColor: "black",
        height: "10%"
    };

    const titleStyle = {
        fontSize: "30px",
        fontFamily: 'Pacifico',
        color: "#ffff3f"
    }

    const headingStyle = {
        fontFamily: 'Pacifico',
        fontSize: "30px",
        color: "#ffff3f"
    }

    return (
        // Change the navbar later depeding upon authentication procedure
        <nav className="navbar navbar-expand-sm" style={navStyle}>
            <a className="navbar-brand" href="#" style={titleStyle}>CONFER THINGS</a>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-3">
                    <a href="#"style={headingStyle}><span className="glyphicon glyphicon-user"
                        ></span> Sign Up</a>
                </li>
                <li className="nav-item ml-5">
                    <a href="#"style={headingStyle}><span className="glyphicon glyphicon-log-in"
                        ></span> Login</a>
                </li>
                {/* <li className="nav-item">
                             Your Things
                         </li>
                         <li className="nav-item">
                             Rent It
                       </li> */}
            </ul>
        </nav>
    )
}

export default Navbar;