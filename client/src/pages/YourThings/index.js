import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Modal from "../../components/Modal";
import API from "../../utils/API";
import Details from "../../components/Details";

class YourThings extends Component {
    state = {
        render: true,
        userThings: [],
        hasFetched: false
    }

    componentDidMount() {
        const id = window.localStorage.getItem("id");
        API.getThingsOfUser(id).then(result => {
            console.log("All things of user", result);
            this.setState({
                userThings: result.data,
                hasFetched: true
            });
            console.log("userThings", this.state.userThings);
        });
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
                <>
                    {
                        this.state.hasFetched ?
                            <>
                                {this.state.userThings.length == 0 ?
                                    `No Items Yet! Add a new item!`
                                    :
                                    <Details
                                        userThings={this.state.userThings}
                                    />
                                }
                            </>
                            :
                            `Loading...`
                    }
                </>
                <a className="btn btn-info"
                    onClick={(e) => this.addAnItem(e)}
                    data-toggle="modal"
                    data-target="#exampleModalCenter">
                    <span className="glyphicon glyphicon-plus"
                    ></span>
                </a >
                <Modal
                    id={"exampleModalCenter"}
                    login={true}
                    signUp={false}
                    addItem={true}
                />
            </>
        );
    }
}

export default YourThings;