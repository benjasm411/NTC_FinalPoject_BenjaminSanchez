import React, { useState } from "react";

function RentButton(props) {
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
                    "rentedFrom": props.from ,
                    "rentedTo": props.to,
                    "carsPlate":props.plate,
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

    return (
        <div>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                Rent Now
            </button>

            <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="staticBackdropLabel">Rent with your user</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div style={{backgroundColor:"#A5C9CA"}} className="offcanvas-body">
                    <div>
                        <p style={{color:"#2C3333", fontSize:"20px"}}>
                            You are about to rent the car number <strong>{props.carIdButton}</strong> with plate <strong>{props.plateButton}</strong> from <strong>{props.fromButton}</strong> to <strong>{props.toButton}</strong>. If it is correct, introduce your user name...
                        </p>
                    </div>
                    <div>
                        <p style={{color:"#2C3333", fontSize:"25px"}}><strong>What is your user name:</strong></p>
                        <input className="form-control" type="text" placeholder="UserName" onChange={checkingUser}/> 
                        <div className="row pt-3">
                            <button style={{fontWeight: "bold"}} type="button" className="btn btn-outline-dark btn-lg" onClick={rent}>Rent</button>                   
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default RentButton;