import React, { useState } from "react";
import { Link } from "react-router-dom";
import DateFiter from "../Filters/DateFilter";

const Filters = (props) =>{

    const[dates, setDates] = useState('');
    const[carType, setCarType] = useState('')
    const[brand, setBrand] = useState('')
    const[color, setColor] = useState('')
    const[transmission, setTransmission] = useState('')
    const[energy, setEnergy] = useState('')
    const[seats, setSeats] = useState('')
    const[order, setOrder] = useState('')

    const saveDatesHandler = (enteredDates) =>{
        const dates = {...enteredDates};
        setDates(dates);
        console.log("Dates returned: ");
        console.log(dates);
    };

    const getCarType = (event) =>{
        if(event.target.value==='-'){
            setCarType('null')
        } else{
            setCarType(event.target.value);
        }
        console.log("car Type: "+event.target.value)
    }
    
    const getBrand = (event) =>{
        if(event.target.value==='-'){
            setBrand('null')
        }else{
            setBrand(event.target.value);
        }
        console.log("brand: " + event.target.value)
    }

    const getColor = (event) =>{
        if(event.target.value==='-'){
            setColor('null')
        }else{
            setColor(event.target.value);
        }
        console.log("color: "+event.target.value)
    }

    const getTransmission = (event) =>{
        if(event.target.value==='-'){
            setTransmission('null')
        }else{
            setTransmission(event.target.value);
        }
        console.log("manual: "+event.target.value)
    }

    const getEnergy = (event) =>{
        if(event.target.value==='-'){
            setEnergy('null')
        } else{
            setEnergy(event.target.value);
        }
        console.log("electric: " + event.target.value)
    }

    const getSeats = (event) =>{
        if(event.target.value==='-'){
            setSeats('null')
        }else{
            setSeats(event.target.value);
        }
        console.log("seats: "+event.target.value)
    }

    const getOrder = (event) =>{
        if(event.target.value === '-'){
          setOrder('null')
        }else{
          setOrder(event.target.value)
        }
    }

    const pathHandler = () =>{
        var datesPath;
        if(dates.state === false){
            return "/Cars"+props.currentPath;
        }else{
            if(Object.keys(dates).length === 0){
                datesPath = "?rented_from="+(props.dateFrom)+"&rented_to="+(props.dateTo)
            }else{
                datesPath = "?rented_from="+(dates.rentedFrom)+"&rented_to="+(dates.rentedTo)
            }
        }
        return "/Cars"+datesPath+"&type="+carType+"&brand="+brand+"&color="+color+"&transmission="+transmission+"&energy="+energy+"&seats="+seats+"&order="+order;
    }

    const buttonHandler= () =>{
        if(dates.state === false){
            alert("Introduce a valid set of dates, please")
        }
    }

    return(
        <div className="container">
            <div className="row pt-3">
                <p style={{color:"#2C3333"}}><strong>Choose another date if you want: </strong></p>
                <DateFiter onSaveDates={saveDatesHandler}/>
            </div>
            <div className="row pt-4">
                <label style={{textAlign:"left", fontSize:"15px", fontWeight:"bold"}}>Type of car</label>
                <select className="form-select" aria-label="Default select example" onChange={getCarType}>
                    <option defaultValue={null}>-</option>
                    <option value="All terrain">All terrain</option>
                    <option value="Pickup">Pickup</option>
                    <option value="Sport">Sport</option>
                    <option value="SUV">SUV</option>
                    <option value="Urban">Urban</option>
                    <option value="Van">Van</option>
                    <option value="Wagon">Wagon</option>
                </select>
            </div>
            <div className="row pt-4">
                <label style={{textAlign:"left", fontSize:"15px", fontWeight:"bold"}}>Brand:</label>
                <select className="form-select" aria-label="Default select example" onChange={getBrand}>
                    <option defaultValue={null}>-</option>
                    <option value="BMW">BMW</option>
                    <option value="chevrolet">Chevrolet</option>
                    <option value="ford">Ford</option>
                    <option value="nissan">Nissan</option>
                    <option value="suzuki">Suzuki</option>
                    <option value="toyota">Toyota</option>
                    <option value="volkswagen">Volkswagen</option>
                </select>
            </div>
            <div className="row pt-4">
                <label style={{textAlign:"left", fontSize:"15px", fontWeight:"bold"}}>Color:</label>
                <select className="form-select" aria-label="Default select example" onChange={getColor}>
                    <option defaultValue={null}>-</option>
                    <option value="black">Black</option>
                    <option value="blue">Blue</option>
                    <option value="grey">Grey</option>
                    <option value="orange">Orange</option>
                    <option value="red">Red</option>
                    <option value="white">White</option>
                    <option value="yellow">Yellow</option>
                </select>
            </div>
            <div className="row pt-4">
                <label style={{textAlign:"left", fontSize:"15px", fontWeight:"bold"}}>Transmission: </label>
                <select className="form-select" aria-label="Default select example" onChange={getTransmission}>
                    <option defaultValue={null}>-</option>
                    <option value="true">Automatic</option>
                    <option value="false">Standard</option>
                </select>
            </div>
            <div className="row pt-4">
                <label style={{textAlign:"left", fontSize:"15px", fontWeight:"bold"}}>Energy system:</label>
                <select className="form-select" aria-label="Default select example" onChange={getEnergy}>
                    <option defaultValue={null}>-</option>
                    <option value="true">Electrical</option>
                    <option value="false">Fuel</option>
                </select>
            </div>
            <div className="row pt-4">
                <label style={{textAlign:"left", fontSize:"15px", fontWeight:"bold"}}>Nomber of seats: </label>
                <select className="form-select" aria-label="Default select example" onChange={getSeats}>
                    <option defaultValue={null}>-</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="13">13</option>
                    <option value="15">15</option>
                </select>
            </div>
            <div className="row pt-4">
                <label style={{textAlign:"left", fontSize:"15px", fontWeight:"bold"}}>Sorted by price:</label>
                <select className="form-select" aria-label="Default select example" onChange={getOrder}>
                    <option defaultValue={null}>-</option>
                    <option value="true">Highest to Lowest</option>
                    <option value="false">Lowest to Highest</option>
                </select> 
            </div>
            <div className="row pt-4">
                <Link to={pathHandler}>
                    <button dstyle={{fontWeight: "bold"}} type="button" className="btn btn-outline-dark btn-lg" onClick={buttonHandler}>Find</button>
                </Link>
            </div>
        </div>
    );

}

export default Filters;