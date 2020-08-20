import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Modal from "../../components/Modal";

class YourThings extends Component {
    state = {
        render: true
    }

    addAnItem = event => {
        event.preventDefault();
        console.log("Inside add an item");
        this.setState({
            render: !this.state.render
        });
    }

    render() {
        return (
            <>
                <Navbar />
No Items Yet! Add a new item!
                <a className="btn btn-info"
                    onClick={(e) => this.addAnItem(e)}
                    data-toggle="modal"
                    data-target="#exampleModalCenter">
                    <span className="glyphicon glyphicon-plus"
                    ></span>
                </a >
                {/* {this.state.render && */}
                    <Modal
                        id={"exampleModalCenter"}
                        login={true}
                        signUp={false}
                        addItem={true}
                    />
                {/* } */}
            </>
        );
    }
}

export default YourThings;