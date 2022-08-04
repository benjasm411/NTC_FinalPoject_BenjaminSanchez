import React from "react";

function CarVerified() {
  return (
    <div class="container-fluid pt-5">
        <div class="row pt-5">
            <p class="h1 text-center"><strong>Your Car is ...</strong></p>
        </div>
        <div class="row pt-5">
            <div class="col-7 text-center">
                <img style={{height:"700px", width:"700px"}} src="\Images\Index Images\img_1.jpg" alt="verify"/>
            </div>
            <div class="col-5">
                <p class="text-center h2 py-4"><strong>Car [id]</strong></p>
                <ul>
                    <li class="h4">Car type: </li>
                    <li class="h4">Plate: </li>
                    <li class="h4">Brand: </li>
                    <li class="h4">State: </li>
                    <li class="h4">Color: </li>
                    <li class="h4">Energy system: </li>
                    <li class="h4">Transmission: </li>
                    <li class="h4">Rented since: </li>
                    <li class="h4">Rented to: </li>
                    <li class="h4 text-danger">Status: </li>
                </ul>
                <div class="row pt-5">
                    <div class="col">
                        <button style={{fontWeight: "bold"}} type="button" class="btn btn-outline-dark btn-lg">Cancel Reservation</button>
                    </div>
                    <div class="col">
                        <button style={{fontWeight: "bold"}} type="button" class="btn btn-outline-dark btn-lg">Return the car</button>
                    </div>
                    <div class="col">
                        <button style={{fontWeight: "bold"}} type="button" class="btn btn-outline-dark btn-lg">Return</button>
                    </div>
                </div>
            </div>
        </div>        
    </div>
  );
}

export default CarVerified;