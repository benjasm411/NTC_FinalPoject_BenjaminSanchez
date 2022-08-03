package mx.tc.final_project.BackendFinalProject.service;

import mx.tc.final_project.BackendFinalProject.dao.CarRentedDao;
import mx.tc.final_project.BackendFinalProject.models.Car;
import mx.tc.final_project.BackendFinalProject.models.CarRented;
import org.hibernate.type.StringNVarcharType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
public class CarRentedServiceImpl implements CarRentedService {

    @Autowired
    private CarRentedDao carRentedDao;

    @Override
    @Transactional (readOnly = true)
    public List<CarRented> carsRentedList() {
        return (List<CarRented>) carRentedDao.findAll();
    }

    @Override
    @Transactional
    public void save(CarRented carRented) {
        carRentedDao.save(carRented);
    }

    @Override
    @Transactional
    public void delete(CarRented carRented) {
        carRentedDao.delete(carRented);
    }

    @Override
    @Transactional(readOnly = true)
    public CarRented findCarRented(CarRented carRented) {
        return carRentedDao.findById(carRented.getCarID()).orElse(null);
    }

    @Override
    @Transactional(readOnly = true)
    public List<String> findRentCodes() {
        return carRentedDao.getCodes();
    }

    @Override
    @Transactional(readOnly = true)
    public Integer getCarRentIDByCode(String rentNumber) {
        return carRentedDao.getCarByCode(rentNumber);
    }

    @Override
    @Transactional(readOnly = true)
    public CarRented findCarRentedByCode(String code) {
        return carRentedDao.getCarRentedByCode(code);
    }

}
