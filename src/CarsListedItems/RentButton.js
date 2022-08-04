import React from "react";

function RentButton() {
  return (
    <div>
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
            Rent Now
        </button>

        <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="staticBackdropLabel">Rent with your user</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div style={{backgroundColor:"#A5C9CA"}} class="offcanvas-body">
                <div>
                    <p style={{color:"#2C3333", fontSize:"25px"}}><strong>What is your user name:</strong></p>
                    <input class="form-control" type="text" placeholder="UserName"></input> 
                    <div class="row pt-3">
                        <button style={{fontWeight: "bold"}} type="button" class="btn btn-outline-dark btn-lg">Rent</button>                   
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default RentButton;