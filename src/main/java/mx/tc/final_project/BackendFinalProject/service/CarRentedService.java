package mx.tc.final_project.BackendFinalProject.service;

import mx.tc.final_project.BackendFinalProject.models.Car;
import mx.tc.final_project.BackendFinalProject.models.CarRented;
import org.hibernate.type.StringNVarcharType;

import javax.persistence.criteria.CriteriaBuilder;
import java.time.LocalDate;
import java.util.List;

public interface CarRentedService {

    public List<CarRented> carsRentedList();
    public void save(CarRented carRented);
    public void delete(CarRented carRented);
    public CarRented findCarRented(CarRented carRented);
    public List<String> findRentCodes();
    public Integer getCarRentIDByCode(String code);
    public CarRented findCarRentedByCode(String code);
}
