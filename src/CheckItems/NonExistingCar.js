import React from "react";
import { Link } from "react-router-dom";


const NonExisitingCar = () =>{
    return(
        <div className="container pt-5 text-center">
            <div className="row pt-5">
                <p className="h1"><strong>Car not found 😞 </strong></p>
            </div>
            <div className="row py-5">
                <p className="h4">We have not found that code in our registers. Please verify that your code is valid or if it is written correctly </p>
            </div>
            <div className="row py-5">
                <div className="col">
                    <Link to="/Check_Formulary">
                        <button style={{fontWeight: "bold", fontSize:"20px"}} type="button" className="btn btn-outline-dark btn-lg">Try again!</button>
                    </Link>
                </div>
                <div className="col">
                    <Link to="/">
                        <button style={{fontWeight: "bold", fontSize:"20px"}} type="button" className="btn btn-outline-dark btn-lg">Go home</button>
                    </Link>
                </div>
            </div>            
        </div>
    );
}

export default NonExisitingCar;