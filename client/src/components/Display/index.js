import React from "react";

function Display(props) {
    return (
        <>
            <img src={props.image} width="250px"
                height="250px"></img>
            {props.name} <br></br>
            {props.desc} <br></br>
            {props.date} <br></br>
            {props.location} <br></br>
            <hr></hr>
        </>
    );
}

export default Display;