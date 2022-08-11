import React, { useState } from "react";
import { Link } from "react-router-dom";
import CarVerified from "../Pages/CarVerified";

const CheckFormulary = () => {

    const[stringCode, setStringCode] = useState('')
    const[code, setCode] = useState('')
    const[message, setMessage] = useState('')
    const[state, setState] = useState(false)
    const[pathString, setPathString] = useState('')

    const testingCode = (event) =>{
        if(event.target.value.length === 10 || event.target.value.length === 11){
            setMessage("");
        } else{
            setMessage("This is an invalid code.");
        }
    
        const userCode = {
            "rentNumber": event.target.value
        };
        setStringCode(userCode.rentNumber)
        setCode(userCode);
        codeHandle();
    }

    const codeHandle = () =>{
        console.log(code);
       
        fetch('http://localhost:8080/rents/verify', {
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'                
            },
            body:JSON.stringify(code)
        }).then(res => res.json())
        .then(data => {
            setPathMethod(data);
            CarVerified(data);
            console.log(data);
        })
        .catch(error => console.log("Error detected: "+error));
    }

    const setPathMethod = (generatedData) =>{
    
        if(generatedData.carID >= 1){
            setState(true);
            setPathString("?car_id="+generatedData.carID+"&car_type="+generatedData.carType+"&plate="+generatedData.plate+"&brand="+generatedData.brand+"&seats="+generatedData.seats+"&color="+generatedData.color+"&energy="+generatedData.electric+"&transmission="+generatedData.manual+"&available="+generatedData.available+"&price="+generatedData.price+"&code="+stringCode);
        console.log(generatedData);
        console.log(state);    
        }
    }


    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-4">
                    <p style={{color:"#2C3333", fontSize:"25px"}} className="pt-5"><strong>What is your rental code:</strong></p>
                </div>
                <div className="col-8">
                    <p className="text-start" style={{color:"red"}}><strong>{message}</strong></p>
                    <input className="form-control" type="text" placeholder="Rental Code" onChange={testingCode}/>                    
                </div>
            </div>
            <div className="row pt-2">
                    <p style={{color:"black"}}><strong>Please, type a 'Space' after have entered your rental code, thank you.</strong></p>
            </div>
            <div className="row py-5">
                <Link to={state? ("/Verified"+pathString) : "/Non_Car"}>
                    <button style={{fontWeight: "bold", fontSize:"20px"}} type="button" className="btn btn-outline-dark btn-lg" onClick={codeHandle}>Verify</button>
                </Link>
            </div>
        </div>
    );

}


export default CheckFormulary;