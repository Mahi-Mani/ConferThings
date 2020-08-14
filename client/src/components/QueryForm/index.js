import React, { Component, useImperativeHandle } from "react";

class QueryForm extends Component {
    state = {
        query: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSearch = event => {
        event.preventDefault();
        console.log("You searched for : ", this.state.query);
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-2" />
                    <div className="col-md-8">
                        <form>
                            <div className="input-group">
                                <input type="text" className="form-control"
                                    placeholder="What are you looking for?"
                                    onChange={this.handleInputChange}
                                    name="query"
                                    value={this.state.query} />
                                <div className="input-group-btn">
                                    <button type="button" class="btn btn-info"
                                        onClick={this.handleSearch}>
                                        <span className="glyphicon glyphicon-search"
                                        ></span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-2" />
                </div>
            </>
        )
    }
}

export default QueryForm;