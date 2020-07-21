import React from "react";
import Explanation from "../Explanation";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { bounce } from "react-animations";
import styled, { keyframes } from "styled-components";
const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

function Content() {
    const divStyle = {
        textAlign: "center",
        fontFamily: 'Righteous',
        fontFamily: 'cursive',
        fontFamily: 'Yellowtail',
        fontFamily: 'cursive',
        fontSize: "45px",
        color: "#ec368d"
    }

    const arrowStyle={
        color: "#ffff3f"
    }

    // const handleClick = event => {
    //     event.preventDefault();
    //     console.log("Hiii");
    //     return (
    //         <Explanation />
    //     )
    // }

    return (
        <div style={divStyle}>
            Do you want something instantly for yourself? Pay less? Save More?
            Well,
            you are in the right place
            <br></br><br></br><br></br>
         Create an account with us and borrow anything you like from others!


            <br></br><br></br><br></br><br></br>
            <Bounce>
                <FontAwesomeIcon icon={faAngleDoubleDown} style={arrowStyle}
                    // onClick={() => handleClick}
                />
            </Bounce>
            <Explanation />
        </div>
    );
}

export default Content;