import React, { Component } from "react";
import API from "../../utils/API";

class Form extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        location: "",
        date: "",
        desc: "",
        itemName: ""
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
        const loginDetails = {
            email: this.state.email,
            password: this.state.password
        }
        API.login(loginDetails).then(result => {
            if (result.data.message === "User successfully logged in") {
                window.localStorage.setItem("user", result.data.email);
                window.localStorage.setItem("id", result.data.id);
            }
            window.location.href = "/home";
        });
    }

    handleAddItem = (event) => {
        event.preventDefault();
        const id = localStorage.getItem("id");
        const thingsDetails = {
            thingName: this.state.itemName,
            thingDesc: this.state.desc,
            availableDate: this.state.date,
            location: this.state.location,
            UserId: id
        }
        API.createThings(thingsDetails).then(result => {
            console.log(result);
            console.log("Things inserted successfully");
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
                            onClick={this.handleSignUp}
                            data-dismiss="modal">CREATE</button>
                    </form>
                    :
                    <>
                        {this.props.addItem ?
                            <form>
                                <div className="form-group">
                                    <label htmlFor="itemName">Item Name</label>
                                    <input type="text" className="form-control"
                                        id="itemName"
                                        aria-describedby="emailHelp" placeholder="Enter Item Name"
                                        name="itemName"
                                        value={this.state.itemName}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="desc">Description</label>
                                    <input type="text" className="form-control"
                                        id="desc"
                                        aria-describedby="emailHelp" placeholder="Enter Description"
                                        name="desc"
                                        value={this.state.desc}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="date">Available Date</label>
                                    <input type="text" className="form-control"
                                        id="date"
                                        aria-describedby="emailHelp" placeholder="Available Date"
                                        name="date"
                                        value={this.state.date}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="location">Location</label>
                                    <input type="location" className="form-control"
                                        id="location"
                                        aria-describedby="emailHelp" placeholder="Location"
                                        name="location"
                                        value={this.state.location}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary"
                                    onClick={this.handleAddItem}
                                // data-dismiss="modal"
                                >ADD</button>
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
                                    onClick={this.handleLogin}
                                    data-dismiss="modal">LOGIN</button>
                            </form>
                        }
                    </>
                }
            </>
        );
    }
}

export default Form;

{/* <button type="submit" className="btn btn-primary"
                                    onClick={(event) => this.add(event)}
                                // data-dismiss="modal"
                                >ADD</button> */}