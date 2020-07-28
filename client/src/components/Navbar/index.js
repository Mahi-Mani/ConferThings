import React, { Component } from "react";
import Modal from "../Modal";

class Navbar extends Component {
    state = {
        signUp: false,
        login: false
    }

    handleSignUp = (event) => {
        event.preventDefault();
        this.setState({
            signUp: true,
            login: false
        });
    }

    handleLogin = (event) => {
        event.preventDefault();
        this.setState({
            login: true,
            signUp: false
        });
    }

    render() {
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
            <div>
                {/* Change the navbar later depeding upon authentication procedure */}
                <nav className="navbar navbar-expand-sm" style={navStyle}>
                    <a className="navbar-brand" href="#" style={titleStyle}>CONFER THINGS</a>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-3">
                            <a style={headingStyle}
                                onClick={(e) => this.handleSignUp(e)}
                                data-toggle="modal"
                                data-target="#exampleModalCenter"><span className="glyphicon glyphicon-user"
                                ></span> Sign Up</a>
                        </li>
                        <li className="nav-item ml-5">
                            <a style={headingStyle}
                                onClick={(e) => this.handleLogin(e)}
                                data-toggle="modal"
                                data-target="#exampleModalCenter"><span className="glyphicon glyphicon-log-in"
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
                <Modal
                    id={"exampleModalCenter"}
                    login={this.state.login}
                    signUp={this.state.signUp}
                />
            </div>
        )
    }
}

export default Navbar;