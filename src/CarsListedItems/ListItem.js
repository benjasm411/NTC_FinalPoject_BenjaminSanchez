import React from "react";
import { Link } from "react-router-dom";

function ListItem(props) {
    const path ="\\Images\\Car Images\\"+props.carID+"..jpg";

    var transmission;
    var energy;

    if(props.manual){
        transmission = "Automatic"
    } else{
        transmission = "Standard"
    }

    if(props.electric){
        energy = "Electric"
    } else{
        energy = "Fuel"
    }

    ///////////////////////////////////

    const sendedPath = "/Rent?car_id="+props.carIDButton+"&plate="+props.carPlateButton+"&from="+props.rentedFrom+"&to="+props.rentedTo;


    //////////////////////////////////

    return (
        <li>
            <div className="accordion" id={props.carID}>
                <div className="accordion-item">
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <img style={{height:"100px", width:"100px"}} src={path} alt="car_img"/>
                            </div>
                            <div className="col-9">
                                <h2 className="accordion-header pt-3" id="headingOne">
                                    <strong>Car #{props.carID}</strong>
                                </h2>
                            </div>
                        </div>
                    </div>                
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        <ul>
                                            <li><strong>Car Type:</strong>  {props.carType}</li>
                                            <li><strong>Plate:</strong>  {props.plate}</li>
                                            <li><strong>Brand:</strong> {props.brand}</li>
                                            <li><strong>No. Seats:</strong> {props.seats}</li>
                                        </ul>
                                    </div>
                                    <div className="col-4">
                                        <ul>
                                            <li><strong>Color:</strong> {props.color}</li>
                                            <li><strong>Energy system:</strong> {energy}</li>
                                            <li><strong>Transmission:</strong> {transmission}</li>
                                        </ul>
                                    </div>
                                    <div className="col-4">
                                        <h2>Price per day: ${props.price}.00</h2>
                                        
                                        <Link to={sendedPath}>
                                            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                                                Rent Now
                                            </button>
                                        </Link>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default ListItem;