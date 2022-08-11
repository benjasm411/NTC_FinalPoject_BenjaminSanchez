import React from "react";
import CheckFormulary from "../CheckItems/CheckFormulary";

const CheckRent = () => {

    return (
        <div className="container pt-5 text-center">
            <div className="row pt-5">
                <p style={{fontSize:"70px"}} className="h1"><strong> Verify your rents </strong></p>
            </div>
            <div className="row pt-5">
                <img style={{height:"400px", width:"400px", margin:"auto"}} src="\Images\Index Images\verify.png" alt="verify"/>
            </div>
            <div className="row">
                <CheckFormulary/>
            </div>
        </div>
    );

}

export default CheckRent;