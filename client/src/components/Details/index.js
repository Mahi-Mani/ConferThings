import React from "react";
import NestedDetails from "../NestedDetails";

function Details(props) {
    console.log("Inisede detuals");

    return (
        <>
            {props.userThings.map(thing => (
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

export default Details;