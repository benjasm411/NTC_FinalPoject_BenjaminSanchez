package mx.tc.final_project.BackendFinalProject.controllers;

import mx.tc.final_project.BackendFinalProject.models.Car;
import mx.tc.final_project.BackendFinalProject.service.CarRentedService;
import mx.tc.final_project.BackendFinalProject.service.CarService;
import net.bytebuddy.implementation.attribute.MethodAttributeAppender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
public class CarController {

    @Autowired
    private CarService carService;


    @GetMapping(value = "cars")
    public List<Car> getCar(){
        return carService.carListed();
    }

    @GetMapping(value = "cars_available")
    public List<Car> getCarsAvailable(@RequestBody Map<String,LocalDate> dates){

        LocalDate dateFrom = dates.get("rentedFrom");
        LocalDate dateTo = dates.get("rentedTo");

        List<Car> returnedList = new ArrayList<>();
        List<Car> carsAvailable = carService.findAvailableCars();
        carsAvailable.stream().forEach(car -> returnedList.add(car));
        List<Integer> carsRentedAvailable = carService.findCarsAvailableRentedID(dateFrom, dateTo);
        carsRentedAvailable.stream().forEach(carID->returnedList.add(carService.findCarByID(carID)));
        return returnedList;
    }

}
