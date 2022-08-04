import React from "react";
import DateFiter from "../Filters/DateFilter";

const Filters = () =>{

    return(
        <div class="container">
            <div class="row">
                <DateFiter/>
            </div>
            <div class="row pt-4">
                <label style={{textAlign:"left", fontSize:"15px", fontWeight:"bold"}}>Type of car</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>-</option>
                    <option value="All terrain">All terrain</option>
                    <option value="Pickup">Pickup</option>
                    <option value="Sport">Sport</option>
                    <option value="SUV">SUV</option>
                    <option value="Urban">Urban</option>
                    <option value="Van">Van</option>
                    <option value="Wagon">Wagon</option>
                </select>
            </div>
            <div class="row pt-4">
                <label style={{textAlign:"left", fontSize:"15px", fontWeight:"bold"}}>Brand:</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>-</option>
                    <option value="BMW">BMW</option>
                    <option value="chevrolet">Chevrolet</option>
                    <option value="ford">Ford</option>
                    <option value="nissan">Nissan</option>
                    <option value="suzuki">Suzuki</option>
                    <option value="toyota">Toyota</option>
                    <option value="volkswagen">Volkswagen</option>
                </select>
            </div>
            <div class="row">
                <label style={{textAlign:"left", fontSize:"15px", fontWeight:"bold"}}>Color:</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>-</option>
                    <option value="black">Black</option>
                    <option value="blue">Blue</option>
                    <option value="grey">Grey</option>
                    <option value="orange">Orange</option>
                    <option value="red">Red</option>
                    <option value="white">White</option>
                    <option value="yellow">Yellow</option>
                </select>
            </div>
            <div class="row pt-4">
                <label style={{textAlign:"left", fontSize:"15px", fontWeight:"bold"}}>Ttransmission: </label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>-</option>
                    <option value="true">Manual</option>
                    <option value="false">Standar</option>
                </select>
            </div>
            <div class="row pt-4">
                <label style={{textAlign:"left", fontSize:"15px", fontWeight:"bold"}}>Ecological:</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>-</option>
                    <option value="true">Electrical</option>
                    <option value="false">Fuel</option>
                </select>
            </div>
            <div class="row pt-4">
                <label style={{textAlign:"left", fontSize:"15px", fontWeight:"bold"}}>Nomber of seats: </label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>-</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="13">13</option>
                    <option value="15">15</option>
                </select>
            </div>
            <div class="row pt-4">
                <button style={{fontWeight: "bold"}} type="button" class="btn btn-outline-dark btn-lg">Find</button>
            </div>
        </div>
    );

}

export default Filters;