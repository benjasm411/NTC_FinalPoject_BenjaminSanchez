import React, { useState } from "react";
import Filters from "../CarsListedItems/Filters";
import ListCars from "../CarsListedItems/ListCars";
import { useLocation } from "react-router-dom";

const CarsListed = () =>{

    const[cars, setCars] = useState([]);
    const[state, setState] = useState(null);
    

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const from = query.get("rented_from");
    const to = query.get("rented_to");
    const type = query.get("type")|| null;
    const brand = query.get("brand") || null;
    const color = query.get("color") || null;
    var transmission = query.get("transmission") || null;
    var energy = query.get("energy") || null;
    const seats = parseInt(query.get("seats")) || null;
    var order = query.get("order") || null;

    if(transmission !== null){
        if (transmission === 'true'){
            transmission = true;
        } else{
            transmission = false;
        }
    }
    if(energy !== null){
        if (energy === 'true'){
            energy = true;
        } else{
            energy = false;
        }
    } 
    if(order !== null){
        if (order === 'true'){
            order = true;
        } else{
            order = false;
        }
    }



    if(cars.length ===0){
        fetch('http://localhost:8080/cars/cars_filter',{
            method:'PUT',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                "rentedFrom": from,
                "rentedTo": to,
                "findByType": type,
                "findByBrand": brand,
                "findByColor": color,
                "manual": transmission,
                "electric": energy,
                "seats": seats,
                "order": order
            })
        }).then(res => res.json())
        .then(data => {
            //console.log("data in fetch")
            setCars(data)
            //console.log(cars)
            setState(state+1)
        })
        .catch(error => console.log("Error detected: "+error));


    }

    if(state===1){
            if(cars.length === 0){
            alert("Sorry 😔. We do not have a car with those specifications, please select another filters")
        }
    }

    console.log("final Data: ");
    console.log(cars);

    return(
        <div className="container-fluid pt-5 text-center">
            <div className="row pt-5">
                <p style={{fontSize:"70px"}} className="h1"><strong> Check our cars </strong></p> 
            </div>
            <div className="row pt-5">
                <div className="col-3">
                    <p className="h2 py-3"><strong>Find what you need ...</strong></p>
                    <Filters dateFrom={from} dateTo={to} currentPath={location.search}/>
                </div>
                <div className="col-9">
                    <div className="container">
                        <div className="row">
                            {
                                cars.map(car=>
                                    <ListCars 
                                        key={car[0]}
                                        list={car} 
                                        from={from} 
                                        to={to}/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarsListed;