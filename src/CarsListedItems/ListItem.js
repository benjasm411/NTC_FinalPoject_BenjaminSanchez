import React from "react";
import RentButton from "./RentButton";

function ListItem() {
  return (
    <li>
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <div class="container">
                    <div class="row">
                        <div class="col-3">
                            <img style={{height:"100px", width:"100px"}} src="\Images\Index Images\img_1.jpg"/>
                        </div>
                        <div class="col-9">
                            <h2 class="accordion-header pt-3" id="headingOne">
                                <strong>Car [id]</strong>
                            </h2>
                        </div>
                    </div>
                </div>                
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="container">
                            <div class="row">
                                <div class="col-4">
                                    <ul>
                                        <li>Car Type: </li>
                                        <li>Plate: </li>
                                        <li>Brand: </li>
                                        <li>No. Seats: </li>
                                    </ul>
                                </div>
                                <div class="col-4">
                                    <ul>
                                        <li>Color: </li>
                                        <li>Energy system: </li>
                                        <li>Transmission: </li>
                                    </ul>
                                </div>
                                <div class="col-4">
                                    <h2>Price per day: </h2>
                                    <RentButton/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
  );
}

export default ListItem;