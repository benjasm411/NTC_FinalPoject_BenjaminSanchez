import React from "react";

const DateFiter = () =>
{

    return(
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <p style={{color:"#2C3333"}}><strong>When would you like to start renting?</strong></p>
                </div>
                <div class="col">
                    <p style={{color:"#2C3333"}}><strong>When would you like to end your rent?</strong></p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <input class="form-control" type="date"></input>
                </div>
                <div class="col">
                    <input class="form-control" type="date"></input>
                </div>
            </div>
        </div>
    );

}

export default DateFiter;