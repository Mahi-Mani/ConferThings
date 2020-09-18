import React from "react";
import Navbar from "../../components/Navbar";
import QueryForm from "../../components/QueryForm";
import AllThings from "../../components/AllThings";

function Home() {

    return (
        <div>
            <Navbar />
            <QueryForm />
            <AllThings />
        </div>
    );
}

export default Home;