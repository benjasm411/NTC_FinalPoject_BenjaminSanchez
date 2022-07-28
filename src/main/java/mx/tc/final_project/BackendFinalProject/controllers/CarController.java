package mx.tc.final_project.BackendFinalProject.controllers;

import mx.tc.final_project.BackendFinalProject.dao.CarDao;
import mx.tc.final_project.BackendFinalProject.models.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CarController {

    @Autowired
    private CarDao carDao;

    @RequestMapping (value = "cars")
    public List<Car> getCar(){
        return carDao.getCars();
    }

    @RequestMapping (value = "car3")
    public Car editCar(){
        Car car = new Car();
        car.setCarID(12);
        car.setBrand("VW");
        car.setColor("red");
        car.setCarType("Ban");
        car.setPlate("XXDDRR");
        car.setSeats(7);
        car.setManual(false);
        car.setAvailable(true);
        car.setElectric(false);
        car.setPrice(5400.00F);
        return car;
    }

    @RequestMapping (value = "car2")
    public Car deleteCar(){
        Car car = new Car();
        car.setCarID(12);
        car.setBrand("VW");
        car.setColor("red");
        car.setCarType("Ban");
        car.setPlate("XXDDRR");
        car.setSeats(7);
        car.setManual(false);
        car.setAvailable(true);
        car.setElectric(false);
        car.setPrice(5400.00F);
        return car;
    }

    @RequestMapping (value = "car1")
    public Car searchCar(){
        Car car = new Car();
        car.setCarID(12);
        car.setBrand("VW");
        car.setColor("red");
        car.setCarType("Ban");
        car.setPlate("XXDDRR");
        car.setSeats(7);
        car.setManual(false);
        car.setAvailable(true);
        car.setElectric(false);
        car.setPrice(5400.00F);
        return car;
    }

}
