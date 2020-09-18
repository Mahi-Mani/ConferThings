import React, { Component } from "react";
import Display from "../Display";
import API from "../../utils/API";

class AllThings extends Component {

    state = {
        allThings: []
    };

    componentDidMount() {
        this.loadAllThings();
    }

    loadAllThings = () => {
        API.getAllThings()
            .then(result => {
                console.log("All things", result.data);
                this.setState({
                    allThings: result.data
                });
            });
    }

    render() {
        return (
            <>
                {this.state.allThings.map(thing => (
                    <Display
                        key={thing.id}
                        name={thing.thingName}
                        desc={thing.thingDesc}
                        date={thing.availableDate}
                        location={thing.location}
                        image={thing.image}
                    />
                ))}
            </>
        );
    }
}

export default AllThings;