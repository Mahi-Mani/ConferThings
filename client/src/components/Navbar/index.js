import React from "react";

function Navbar() {
    const navStyle = {
        backgroundColor: "black",
        height: "10%"
    };

    const headingStyle={
        fontFamily: 'Righteous', 
        fontFamily: 'cursive',
        fontFamily: 'Yellowtail', 
        fontFamily: 'cursive',
        fontSize: "30px"
    }

    return (
        <nav className="navbar navbar-expand-lg navbar">
            <a className="navbar-brand" href="#" style={headingStyle}>CONFER THINGS</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto text-light" style={headingStyle}>
                    <li className="nav-item active">
                    <button 
                    className="btn btn-outline-success my-2 my-sm-0" type="submit">SIGNUP
                    </button>
                    </li>
                    <li className="nav-item">
                    <button 
                    className="btn btn-outline-success my-2 my-sm-0" type="submit">LOGIN
                    </button>
                    </li>
                    <li className="nav-item">
                        Your Things
                    </li>
                    <li className="nav-item">
                        Rent It
                    </li>
                </ul>
                
            </div>
        </nav>
    )
}

export default Navbar;