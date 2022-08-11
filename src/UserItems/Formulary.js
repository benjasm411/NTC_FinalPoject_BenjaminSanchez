import React, { useState } from "react";

const Formulary = () =>{
    
    const[name, setName] = useState('');
    const[userName, setUserName] = useState('');
    const[message, setMessage] = useState('');
    const[messageName, setMessageName] = useState('');
    const[visible, setVisible] = useState("row invisible");
    const[state, setState] = useState(false);
    const[state1, setState1] = useState(false);

    var labelMessage = "This user is already taken, please choose another one ...";
    var labelMessage1 = "Type a valid name ...";


    const settingName =(event) =>{
        setName(event.target.value);

        if(name.length<2 || event.target.value === null){
            setMessageName(labelMessage1);
            setState(false);
        } else{
            setMessageName("");
            setState(true);
        }
    }


    const settingUserName =(event) =>{
        setUserName(event.target.value)

        const userNameData = {
            userName: event.target.value
        }

        fetch('http://localhost:8080/users/existed_user', {
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'                
            },
            body:JSON.stringify(userNameData)
        }).then(res => res.text())
        .then(data=>{
            if(data === "true"){
                setMessage("");
                setState1(true);
            } else{
                setMessage(labelMessage);
                setState1(false);
            }
        })
        .catch(error => console.log("Error detected: "+error));

        if(event.target.value.length<4){
            setState1(false);
        }
    }


    const handlingUserData = () => {
        const newUser ={
            userName: userName,
            name: name
        }
        
        if(state === true && state1 === true){
            console.log(newUser);
            fetch('http://localhost:8080/users/new_user',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'                
                },
                body:JSON.stringify(newUser)
            }).then(() => setVisible("row visible"));
        }else {
            console.log("denied");
        }        
    }

    return(
        <div className="container pt-5">
            <div className="row">
                <div className="col-4">
                    <p style={{color:"#2C3333", fontSize:"25px"}}><strong>What is your name:</strong></p>
                </div>
                <div className="col-8">
                    <label style={{color:"red"}}><strong> {messageName} </strong></label>
                    <input className="form-control" type="text" placeholder="Name" onChange={settingName}></input>                    
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <p style={{color:"#2C3333", fontSize:"25px"}} className="pt-4"><strong>Choose a user name:</strong></p>
                </div>
                <div className="col-8">
                    <label style={{color:"red"}}><strong> {message} </strong></label>
                    <input className="form-control" type="text" placeholder="User Name" onChange={settingUserName}></input>                    
                </div>
            </div>
            <div className="row py-5">
                    <button style={{fontWeight: "bold", fontSize:"20px"}} type="button" className="btn btn-outline-dark btn-lg" onClick={handlingUserData}>Register Now</button>
            </div>
            <div className={visible}>
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Great! Your user has been created  </strong> Go to the main page and start to rent now.
                </div>
            </div>
        </div>
    );
}

export default Formulary;