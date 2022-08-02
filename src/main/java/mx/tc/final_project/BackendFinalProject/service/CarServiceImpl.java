package mx.tc.final_project.BackendFinalProject.service;

import mx.tc.final_project.BackendFinalProject.dao.CarDao;
import mx.tc.final_project.BackendFinalProject.models.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
public class CarServiceImpl implements CarService{

    @Autowired
    private CarDao carDao;

    @Override
    @Transactional(readOnly = true)
    public List<Car> carListed() {
        return (List<Car>) carDao.findAll();
    }

    @Override
    @Transactional
    public void save(Car car) {
        carDao.save(car);
    }

    @Override
    @Transactional
    public void delete(Car car) {
        carDao.delete(car);
    }

    @Override
    @Transactional(readOnly = true)
    public Car findCar(Car car) {
        return carDao.findById(car.getCarID()).orElse(null);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Car> findAvailableCars(){
        return carDao.getAvailableCars();
    }

    @Override
    @Transactional(readOnly = true)
    public List<Integer> findCarsAvailableRentedID(LocalDate rentedFrom, LocalDate rentedTo) {
        return carDao.getCarsAvailableRentedID(rentedFrom, rentedTo);
    }

    @Override
    @Transactional(readOnly = true)
    public Car findCarByID(Integer id) {
        return carDao.getCarByID(id);
    }

    @Override
    @Transactional(readOnly = true)
    public Integer findCarIdByPlate(String plate) {
        return carDao.getCarIdByPlate(plate);
    }

}
