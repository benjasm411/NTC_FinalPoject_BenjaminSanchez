import React from "react";
import {Link} from "react-router-dom";

const Navbar = () =>{
    return(
        <div>
            <nav style={{backgroundColor: "#395B64"}} className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <h2 className="text-light">Car Rental Service</h2>
                    <div className="row">
                        <ul className="navbar-nav me-auto mb-5 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/">
                                    <p className="nav-link active text-light">Home</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link"></p>
                            </li>
                            <li className="nav-item">
                                <Link to="/Check_Formulary">
                                    <p className="nav-link active text-light">Check your rents</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link"></p>
                            </li>
                            <li className="nav-item">
                                <Link to="/New_User">
                                    <p className="nav-link active text-light">Register user</p>
                                </Link>                            
                            </li>
                        </ul>
                    </div>
                </div>
           </nav> 
        </div>
    );
}

export default Navbar; 