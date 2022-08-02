package mx.tc.final_project.BackendFinalProject.dao;


import mx.tc.final_project.BackendFinalProject.models.Car;
import mx.tc.final_project.BackendFinalProject.models.CarRented;
import org.hibernate.type.StringNVarcharType;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;


public interface CarRentedDao extends CrudRepository<CarRented, Integer> {

    @Query(value = "select rent_number from cars_rented;", nativeQuery = true)
    public List<String> getCodes();

    @Query(value = "select cr.car_id from cars_rented cr where :rentNumber = cr.rent_number;", nativeQuery = true)
    public Integer getCarByCode(@Param("rentNumber") String rentNumber);

    @Query(value = "select * from cars_rented where :rentNumber2 = rent_number", nativeQuery = true)
    public CarRented getCarRentedByCode(@Param("rentNumber2") String rentNumber2);
}
