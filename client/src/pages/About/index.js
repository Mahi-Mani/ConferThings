import React from "react";
import aboutImage from "../../assets/images/bg1.jpg";
import Navbar from "../../components/Navbar";
import Content from "../../components/Content";

function About() {
    const aboutStyle = {
        backgroundImage: `url(${aboutImage})`,
        height: "800px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
}

return (
    <div style={aboutStyle}>
        <Navbar />
        <br></br><br></br><br></br><br></br>
        <Content />
    </div>
);
}

export default About;