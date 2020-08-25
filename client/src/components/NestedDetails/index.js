import React from "react";

function NestedDetails(props) {

    return (
        <div>
            <img src={props.image} className="img-thumbnail float-left"
                width="400px" height="400px"></img>
            <h2 className="float-left">{props.thingName}</h2>
        </div>
    )
}

export default NestedDetails;

// Available Date: {props.availableDate}
//             UserId: {props.userId}
//             Id: {props.id}
//             Image: {props.image}
//             Location: {props.location}
//             Description: {props.description}
//             Thing Name: {props.thingName}