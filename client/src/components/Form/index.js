import React, { Component } from "react";
import API from "../../utils/API";

class Form extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    state = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSignUp = (event) => {
        event.preventDefault();
        const userDetails = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            name: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        API.createUser(userDetails).then(result => {
            console.log("Created User", result);
        })
    }

    handleLogin = (event) => {
        event.preventDefault();
        console.log("LOgin email", this.state.email);
        console.log("Login password", this.state.password);
        const loginDetails = {
            email: this.state.email,
            password: this.state.password
        }
        API.login(loginDetails).then(result => {
            console.log("Logged in : ", result);
        })
    }

    render() {
        return (
            <>
                {this.props.signUp ?
                    <form>
                        <div className="form-group">
                            <label htmlFor="fname">First Name</label>
                            <input type="text" className="form-control"
                                id="firstName"
                                aria-describedby="emailHelp" placeholder="Enter FirstName"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" className="form-control"
                                id="lastName"
                                aria-describedby="emailHelp" placeholder="Enter lastName"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Username</label>
                            <input type="text" className="form-control"
                                id="username"
                                aria-describedby="emailHelp" placeholder="Enter username"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Enter email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control"
                                id="exampleInputPassword1" placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleInputChange} />
                        </div>
                        <button type="submit" className="btn btn-primary"
                            onClick={this.handleSignUp}>CREATE</button>
                    </form>
                    :
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Enter email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control"
                                id="exampleInputPassword1" placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleInputChange} />
                        </div>
                        <button type="submit" className="btn btn-primary"
                            onClick={this.handleLogin}>LOGIN</button>
                    </form>
                }
            </>
        );
    }
}

export default Form;