import React from "react";
import Carousel from "./Carousel";
import DateFiter from "../Filters/DateFilter";

const IndexData = () =>{

    return(
        <div class="container-fluid pt-5">
            <div class="row pt-5">
                <div class="col-7">
                <Carousel/>
                </div>
                <div class="col-5 py-5">
                    <div class="container pt-5">
                        <div class="row">
                            <p style={{color:"#2C3333"}} class="h1 text-center py-5"><strong>Rent with us now!</strong></p>
                        </div>
                        <div class="row py-5">
                            <DateFiter/>
                        </div>
                        <div class="row pt-5">
                            <button style={{fontWeight: "bold"}} type="button" class="btn btn-outline-dark btn-lg">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );    

}

export default IndexData;