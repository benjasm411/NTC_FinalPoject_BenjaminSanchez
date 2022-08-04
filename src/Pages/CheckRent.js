import React from "react";
import CheckFormulary from "../CheckItems/CheckFormulary";

const CheckRent = () => {

    return (
        <div class="container pt-5 text-center">
            <div class="row pt-5">
                <p style={{fontSize:"70px"}} class="h1"><strong> Verify your rents </strong></p>
            </div>
            <div class="row pt-5">
                <img style={{height:"400px", width:"400px", margin:"auto"}} src="\Images\Index Images\verify.png" alt="verify"/>
            </div>
            <div class="row">
                <CheckFormulary/>
            </div>
        </div>
    );

}

export default CheckRent;