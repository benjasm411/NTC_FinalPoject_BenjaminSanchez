import React from "react";
import ListItem from "./ListItem";

function ListCars() {
  return (
    <ul style={{listStyleType:"none"}}>
        <ListItem/>
        <ListItem/>
    </ul>
  );
}

export default ListCars;