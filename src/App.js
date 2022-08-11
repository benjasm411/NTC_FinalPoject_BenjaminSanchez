import React from "react";
import Navbar from "./Navbar/Navbar";
import Index from "./Pages/Index";
import NewUser from "./Pages/NewUser";
import CheckRent from "./Pages/CheckRent";
import CarsListed from "./Pages/CarsListed";
import CarVerified from "./Pages/CarVerified";
import NonExisitingCar from "./CheckItems/NonExistingCar";
import Rented from "./Pages/Rented";
import {Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar/>
      <Route exact path="/" component={Index}></Route>
      <Route path="/New_User" component={NewUser}></Route>
      <Route path="/Check_Formulary" component={CheckRent}></Route>
      <Route path="/Cars" component={CarsListed}></Route>
      <Route path="/Verified" component={CarVerified}></Route>
      <Route path="/Non_Car" component={NonExisitingCar}></Route>
      <Route path="/Rent" component={Rented}></Route>
    </div>
  );
}

export default App;
