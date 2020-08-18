import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Modal from "../../components/Modal";

class YourThings extends Component {
    state = {
        render: false
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
                < button type="button" class="btn btn-info"
                    onClick={this.addAnItem} >
                    <span className="glyphicon glyphicon-plus"
                    ></span>
                </button >
                {this.state.render &&
                    <Modal
                        id={"exampleModalCenter"}
                        login={true}
                        signUp={true}
                    />
                }
            </>
        );
    }
}

export default YourThings;