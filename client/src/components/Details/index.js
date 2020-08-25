import React, { Component } from "react";
import API from "../../utils/API";
import NestedDetails from "../NestedDetails";

class Details extends Component {
    state = {
        things: []
    }

    componentDidMount() {
        const id = localStorage.getItem("id");
        API.getThingsOfUser(id).then(result => {
            console.log(result);
            this.setState({
                things: result.data
            });
        });
    }

    render() {
        return (
            <>
                {this.state.things.map(thing => (
                    <NestedDetails 
                        userId={thing.UserId}
                        availableDate={thing.availableDate}
                        id={thing.id}
                        key={thing.id}
                        image={thing.image}
                        location={thing.location}
                        description={thing.thingDesc}
                        thingName={thing.thingName}
                    />
                ))}
            </>
        );
    }
}

export default Details;