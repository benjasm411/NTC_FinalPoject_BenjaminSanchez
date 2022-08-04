import React from "react";
// Import from Navbar
import Navbar from "./Navbar/Navbar";
// Imports from pages
import Index from "./Pages/Index";
import NewUser from "./Pages/NewUser";
import CheckRent from "./Pages/CheckRent";
import CarsListed from "./Pages/CarsListed";
import CarVerified from "./Pages/CarVerified";
// Imports from CarsListedItems
import Filters from "./CarsListedItems/Filters";
import ListCars from "./CarsListedItems/ListCars";
import ListItem from "./CarsListedItems/ListItem";
import RentButton from "./CarsListedItems/RentButton";
import SortedFilter from "./CarsListedItems/SortedFilter";
// Import from Check Items
import CheckFormulary from "./CheckItems/CheckFormulary";
// Import from Filters
import DateFiter from "./Filters/DateFilter";
// Import from IndexItems
import Carousel from "./IndexItems/Carousel";
import IndexData from "./IndexItems/IndexData";
// Import from UserItems
import Content from "./UserItems/Content";
import Formulary from "./UserItems/Formulary";
// Import for route
import {Route} from "react-router-dom";
//import {Switch} from "react-router-dom";
 
function App() {
  return (
    <div>
      <Navbar/>
      <Route path="/" component={IndexData}></Route>
    </div>
  );
}

export default App;
