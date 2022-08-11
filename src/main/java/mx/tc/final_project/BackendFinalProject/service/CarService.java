package mx.tc.final_project.BackendFinalProject.service;

import mx.tc.final_project.BackendFinalProject.models.Car;

import java.time.LocalDate;
import java.util.List;

public interface CarService {

    public List<Car> carListed();
    public void save (Car car);
    public void  delete(Car car);
    public Car findCar(Car car);
    public List<Car> findAvailableCars();
    public List<Car> findCarsAvailableRentedID(LocalDate rentedFrom, LocalDate rentedTo);
    public Car findCarByID(Integer id);
    public Integer findCarIdByPlate(String plate);
    public List<Car> findCarsFiltered(String query);
}
