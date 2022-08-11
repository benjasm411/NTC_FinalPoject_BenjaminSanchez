import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function CarVerified() {
    const location = useLocation();
    const[status, setStatus] = useState('Rented');
    const[user, setUser] = useState([]);
    const[state, setState] = useState(false);

    const query = new URLSearchParams(location.search);
    const carId = query.get("car_id");
    const carType = query.get("car_type");
    const plate = query.get("plate");
    const brand = query.get("brand");
    const seats = query.get("seats");
    const color = query.get("color");
    const energy = (query.get("energy") === "true" ? "Electric":"Fuel");
    const transmission = (query.get("transmission")==="true"?"Manual":"Standard");
    const code = query.get("code")
    const available = query.get("available");

    if(!state){
        if (available === "true"){
            fetch('http://localhost:8080/rents/verifyState',{
                method:'PUT',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify({
                    "carID":carId 
                })
            }).then(res => res.text())
            .then(data => setStatus(data))
            .catch(error => console.log("Error detected: "+error));
        } 

        fetch('http://localhost:8080/rents/find_user_data',{
                method:'PUT',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify({
                    "code":code 
                })
            }).then(res => res.json())
            .then(data => setUser(data))
            .catch(error => console.log("Error detected: "+error));

        setState(true);
    }

    
    const imagePath = "\\Images\\Car Images\\"+carId+"..jpg"; 


    const cancelButtonHandle = () =>{
        if(status === 'Rented'){
            fetch('http://localhost:8080/rents/cancel_reservation',{
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json'                
                },
                body:JSON.stringify({
                    "rentNumber": code
                })
            }).catch(error => {console.log(error);})
            setStatus("Canceled");
            alert("The rent has been successfully canceled.");
        } else{
            alert("You can not cancel a car that is not rented, please rent one first.");
        }
    }

    const returnButtonHandle = () =>{
        if(status === 'Rented'){
            fetch('http://localhost:8080/rents/return_car',{
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json'                
                },
                body:JSON.stringify({
                    "rentNumber": code
                })
            }).catch(error => {console.log(error);})
            setStatus("Returned");
            alert("Tou have retuned your car with success. Thak you for your preference 😀");
        } else{
            alert("You can not return a car that is not rented, please rent one first.");
        }
    }

    return (
        <div className="container-fluid pt-5">
            <div className="row pt-5">
                <p className="h1 text-center"><strong>Your Car is ...</strong></p>
            </div>
            <div className="row pt-5">
                <div className="col-7 text-center">
                    <img style={{height:"700px", width:"700px"}} src={imagePath} alt="verify"/>
                </div>
                <div className="col-5">
                    <p className="text-center h2 py-4"><strong>Car #{carId}</strong></p>
                    <ul>
                        <li className="h4"><strong>Rented by:</strong> {user[0]}</li>
                        <li className="h4"><strong>Car type:</strong> {carType}</li>
                        <li className="h4"><strong>Plate:</strong> {plate}</li>
                        <li className="h4"><strong>Brand:</strong> {brand}</li>
                        <li className="h4"><strong>Color:</strong> {color}</li>
                        <li className="h4"><strong>Energy system:</strong> {energy}</li>
                        <li className="h4"><strong>Transmission:</strong> {transmission}</li>
                        <li className="h4"><strong>Number of seats:</strong> {seats}</li>
                        <li className="h4"><strong>Rented since: </strong> {user[1]}</li>
                        <li className="h4"><strong>Rented to:</strong> {user[2]}</li>
                        <li className="h4 text-danger"><strong>Status:</strong> {status}</li>
                    </ul>
                    <div className="row pt-5">
                        <div className="col visible">
                            <button style={{fontWeight: "bold"}} type="button" className="btn btn-outline-dark btn-lg" onClick={cancelButtonHandle}>Cancel Reservation</button>
                        </div>
                        <div className="col visible">
                            <button style={{fontWeight: "bold"}} type="button" className="btn btn-outline-dark btn-lg" onClick={returnButtonHandle}>Return the car</button>
                        </div>
                        <div className="col">
                            <Link to="/">
                                <button style={{fontWeight: "bold"}} type="button" className="btn btn-outline-dark btn-lg">Home</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    );
}

export default CarVerified;