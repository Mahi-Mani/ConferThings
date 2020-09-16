import React from "react";

function NestedDetails(props) {
    console.log("Inside nested destails");

    return (
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <img src={props.image} className="img-thumbnail float-left"
                    width="400px" height="400px"></img>
                <div className="float-right">
                    <h2 className="mx-auto">{props.thingName}</h2>
                    <p>{props.description}</p>
                    <p>Available: {props.availableDate}</p>
                    <p>Location: {props.location}</p>
                </div>
            </div>
            <div className="col-md-2"></div>
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