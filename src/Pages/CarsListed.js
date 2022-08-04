import React from "react";
import Filters from "../CarsListedItems/Filters";
import SortedFilter from "../CarsListedItems/SortedFilter";
import ListCars from "../CarsListedItems/ListCars";

const CarsListed = () =>{
    return(
        <div class="container-fluid pt-5 text-center">
            <div class="row pt-5">
                <p style={{fontSize:"70px"}} class="h1"><strong> Check our cars </strong></p> 
            </div>
            <div class="row pt-5">
                <div class="col-3">
                    <p class="h2 py-3"><strong>Find what you need ...</strong></p>
                    <Filters/>
                </div>
                <div class="col-9">
                    <div class="container">
                        <div clas="row">
                            <SortedFilter/>
                        </div>
                        <div class="row">
                            <ListCars/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarsListed;