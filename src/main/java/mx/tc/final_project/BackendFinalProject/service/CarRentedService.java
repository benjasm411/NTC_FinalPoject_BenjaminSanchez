package mx.tc.final_project.BackendFinalProject.service;

import mx.tc.final_project.BackendFinalProject.models.Car;
import mx.tc.final_project.BackendFinalProject.models.CarRented;
import org.hibernate.type.StringNVarcharType;
import org.springframework.data.repository.query.Param;

import javax.persistence.criteria.CriteriaBuilder;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

public interface CarRentedService {

    public List<CarRented> carsRentedList();
    public void save(CarRented carRented);
    public void delete(CarRented carRented);
    public CarRented findCarRented(CarRented carRented);
    public List<String> findRentCodes();
    public Integer getCarRentIDByCode(String code);
    public CarRented findCarRentedByCode(String code);
    public Boolean findCanceledStatusById(Integer carId);
    public Boolean findReturnedStatusById(Integer carId);

    public String findNameByCode (String code);
    public Date findDateFromByCode (String code);
    public Date findDateToByCode (String code);

}
