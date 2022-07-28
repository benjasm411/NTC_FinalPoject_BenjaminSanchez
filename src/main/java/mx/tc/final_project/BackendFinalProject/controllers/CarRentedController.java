package mx.tc.final_project.BackendFinalProject.controllers;

import mx.tc.final_project.BackendFinalProject.dao.CarRentedDao;
import mx.tc.final_project.BackendFinalProject.models.CarRented;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CarRentedController {

    @Autowired
    private CarRentedDao carRentedDao;

    @RequestMapping(value = "carsRented")
    public List<CarRented> getCarRented(){
        return carRentedDao.getCarsRented();
    }

}
