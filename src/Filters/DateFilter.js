import React, { useState } from "react";

const DateFiter = (props) =>
{
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [message, setMessage] = useState('');

    // method for det the date from
    const checkDateFrom = (event) =>{
        setDateFrom(event.target.value);
        checkingDates(event.target.value,dateTo);
    }

    // method for det the date to
    const checkDateTo = (event) =>{
        setDateTo(event.target.value);       
        checkingDates(dateFrom,event.target.value);
    }

    //evaluate the dates
    const checkingDates = (initialDate, finalDate) => {
        if (initialDate > finalDate){
            setMessage("The date when you want to end the rent must be after the date when you want to start it, please check it.")
            const dates = {state:false};
            props.onSaveDates(dates);
        } else {
            setMessage("");
            const dates = {
                rentedFrom: initialDate,
                rentedTo: finalDate,
                state: true
            };
            props.onSaveDates(dates);
        }
    }

    // formulary for check the dates between you want to rent
    return(
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <p style={{color:"#2C3333"}}><strong>When would you like to start renting?</strong></p>
                </div>
                <div className="col">
                    <p style={{color:"#2C3333"}}><strong>When would you like to end your rent?</strong></p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input className="form-control" type="date" id="rentedFrom" onChange={checkDateFrom}/>
                </div>
                <div className="col">
                    <input className="form-control" type="date" id="rentedTo" onChange={checkDateTo}/>
                </div>
            </div>
            <div className="row py-4">
                <h5 style={{color:"red"}}><strong>
                    {message} 
                </strong></h5>
            </div>
        </div>
    );

}

export default DateFiter;