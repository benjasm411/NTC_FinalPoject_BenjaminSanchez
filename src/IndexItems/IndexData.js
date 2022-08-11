import React, { useState } from "react";
import Carousel from "./Carousel";
import DateFiter from "../Filters/DateFilter";
import { Link } from "react-router-dom";

const IndexData = () =>{

    const[dates, setDates] = useState('')

    const saveDatesHandler = (enteredDates) =>{
        const dates = {...enteredDates};
        setDates(dates);
    };

    const path = () => {
        if(dates.state){
            return "/Cars?rented_from="+(dates.rentedFrom)+"&rented_to="+(dates.rentedTo);
        } else{
            return "/";
        }
    }


    return(
        <div className="container-fluid pt-5">
            <div className="row pt-5">
                <div className="col-7">
                <Carousel/>
                </div>
                <div className="col-5 py-5">
                    <div className="container pt-5">
                        <div className="row">
                            <p style={{color:"#2C3333"}} className="h1 text-center py-5"><strong>Rent with us now!</strong></p>
                        </div>
                        <div className="row py-5">
                            <DateFiter onSaveDates={saveDatesHandler} findFrom="" findTo=""/>
                        </div>
                        <div className="row pt">
                            <Link to={path}>
                            <button style={{fontWeight: "bold"}} type="button" className="btn btn-outline-dark btn-lg">Search</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );    

}

export default IndexData;