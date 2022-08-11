import React from "react";
import ListItem from "./ListItem";

function ListCars(props) {

  const from = props.from;
  const to = props.to;
  const car=props.list;

  return (
    <ul style={{listStyleType:"none"}}>
      <ListItem 
            carID={car[0]}
            carType={car[1]}
            plate={car[2]}
            brand={car[3]}
            seats={car[4]}
            color={car[5]}
            electric={car[6]}
            manual={car[7]}
            price={car[9]}
            rentedFrom={from}
            rentedTo={to}
            carIDButton={car[0]}
            carPlateButton={car[2]}
          />
    </ul>
  );
}

export default ListCars;