import React from "react";

const Formulary = () =>{
    return(
        <div class="container pt-5">
            <div class="row">
                <div class="col-4">
                    <p style={{color:"#2C3333", fontSize:"25px"}}><strong>What is your name:</strong></p>
                </div>
                <div class="col-8">
                    <input class="form-control" type="text" placeholder="Name"></input>                    
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <p style={{color:"#2C3333", fontSize:"25px"}}><strong>Choose a user name:</strong></p>
                </div>
                <div class="col-8">
                    <input class="form-control" type="text" placeholder="User Name"></input>                    
                </div>
            </div>
            <div class="row pt-5">
                <button style={{fontWeight: "bold", fontSize:"20px"}} type="button" class="btn btn-outline-dark btn-lg">Register Now</button>
            </div>
        </div>
    );
}

export default Formulary;