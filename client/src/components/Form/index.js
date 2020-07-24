import React from "react";

function Form() {
    return (
        <form>
            <div className="form-group">
                <label for="fname">First Name</label>
                <input type="text" className="form-control"
                    id="firstName"
                    aria-describedby="emailHelp" placeholder="Enter FirstName" />
            </div>
            <div className="form-group">
                <label for="lname">Last Name</label>
                <input type="text" className="form-control"
                    id="lastName"
                    aria-describedby="emailHelp" placeholder="Enter lastName" />
            </div>
            <div className="form-group">
                <label for="name">Username</label>
                <input type="text" className="form-control"
                    id="username"
                    aria-describedby="emailHelp" placeholder="Enter username" />
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control"
                    id="exampleInputPassword1" placeholder="Password" />
            </div>
        </form>
    );
}

export default Form;