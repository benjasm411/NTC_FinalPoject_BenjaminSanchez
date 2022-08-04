import React from "react";
import IndexData from "../IndexItems/IndexData";
import {Route, BrowserRouter, Link} from "react-router-dom";

const Index = () =>{
    return(
        <div>
            <BrowserRouter>
            <Link><IndexData/></Link>
            </BrowserRouter>
        </div>
    );
}

export default Index;