import React,{useState} from "react";
import { useLocation } from "react-router-dom";


const Rented = (props) =>{

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const carId = query.get("car_id");
    const plate = query.get("plate");
    const from = query.get("from");
    const to = query.get("to");

    const path ="\\Images\\Car Images\\"+carId+"..jpg";

///////////////////////////////////////////////////

const[stateButton, setStateButton] = useState('')
    const[userButton, setUserButton] = useState('')

    const checkingUser = (event) =>{
        setUserButton(event.target.value);

        fetch("http://localhost:8080/users/existed_user",{
            method:"PUT",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                "userName": event.target.value
            })
        }).then(res => res.text())
        .then(data=>{
            if(data === "true"){
                setStateButton(true);
            } else{
                setStateButton(false);
            }
        })
        .catch(error => console.log("Error detected: "+error));
    }
    
    const rent =() =>{
        if(!stateButton){
            fetch('http://localhost:8080/rents/rent_car',{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify({
                    "rentedFrom": from,
                    "rentedTo": to,
                    "carsPlate":plate,
                    "userName": userButton
                })
            }).then(res => res.text())
            .then(data => {alert("Congratulations, you just have rent a car.\n Use this code for verifying your rent: \n"+(data))})
            .catch(error => console.log("Error detected: "+error));

            alert("Congratulations, you just have rent a car.\n Use this code for verifying your rent: \n")
        }else{
            alert("This user does not exist, please use a user that exist or create one.")
        }
    }

///////////////////////////////////////////////////


    return(
        <div className="container pt-5 text-center">
            <div className="row pt-5">
                <p style={{fontSize:"70px"}} className="h1"><strong> Almost Finish ... </strong></p>
            </div>
            <div className="row pt-5">
                <p style={{fontSize:"30px"}}><strong> You are going to rent the car #{carId} wich has the plate {plate}, from {from} to {to}. If this information is correct, type your user name ... </strong></p>
            </div>
            <div className="row pt-5">
                <img style={{height:"450px", width:"650px", margin:"auto"}} src={path} alt="verify"/>
            </div>
            <div className="row pt-4">
                <p style={{color:"#2C3333", fontSize:"25px"}}><strong>What is your user name:</strong></p>
                <input className="form-control" type="text" placeholder="UserName" onChange={checkingUser}/> 
                <div className="row pt-3">
                    <button style={{fontWeight: "bold"}} type="button" className="btn btn-outline-dark btn-lg" onClick={rent}>Rent</button>                   
                </div>
            </div>
        </div>
    );
}

export default Rented;