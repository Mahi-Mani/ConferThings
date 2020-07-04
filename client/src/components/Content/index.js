import React from "react";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { bounce } from "react-animations";
import styled, { keyframes } from "styled-components";
const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

function Content() {
    const divStyle = {
        textAlign: "center",
        fontFamily: 'Pacifico',
        fontSize: "45px",
        color: "white"
    }

    return (
        <div style={divStyle}>
            Do you want something instantly for yourself and not owning it though? Well,
            you are in the right place
            <br></br><br></br><br></br>
         Create an account with us and borrow anything you like from others!


            <br></br><br></br><br></br><br></br>
            <Bounce>
                <FontAwesomeIcon icon={faAngleDoubleDown} />
            </Bounce>
        </div>
    );
}

export default Content;