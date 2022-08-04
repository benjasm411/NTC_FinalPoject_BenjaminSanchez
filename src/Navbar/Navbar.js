import React from "react";
import {BrowserRouter} from "react-router-dom";

const Navbar = () =>{

    return(
        <div>
           <nav style={{backgroundColor: "#395B64"}} class="navbar navbar-expand-lg fixed-top">
                <div class="container-fluid">
                    <h2 class="text-light">Car Rental Service</h2>
                    <div class="">
                        <ul class="navbar-nav me-auto mb-5 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active text-light" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <p class="nav-link"></p>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-light" href="#">Check your rents</a>
                            </li>
                            <li class="nav-item">
                                <p class="nav-link"></p>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Register user </a>
                            </li>
                        </ul>
                    </div>
                </div>
           </nav> 
        </div>
    );

}

export default Navbar; 