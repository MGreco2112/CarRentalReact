import React from "react";
import {Route, Routes} from 'react-router-dom';
import Home from "../home/Home";
import Navbar from "../navbar/Navbar";

const AppRouter = () => {
    return (
        <div style={{width: "100%", flexDirection: "column"}}>
            {/* Any components that should always be visable should go here */}
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default AppRouter;