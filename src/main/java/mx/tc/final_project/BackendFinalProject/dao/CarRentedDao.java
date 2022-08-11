package mx.tc.final_project.BackendFinalProject.dao;


import mx.tc.final_project.BackendFinalProject.models.Car;
import mx.tc.final_project.BackendFinalProject.models.CarRented;
import org.hibernate.type.StringNVarcharType;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;


public interface CarRentedDao extends CrudRepository<CarRented, Integer> {

    @Query(value = "select rent_number from cars_rented;", nativeQuery = true)
    public List<String> getCodes();

    @Query(value = "select cr.car_id from cars_rented cr where :rentNumber = cr.rent_number;", nativeQuery = true)
    public Integer getCarByCode(@Param("rentNumber") String rentNumber);

    @Query(value = "select * from cars_rented where :rentNumber2 = rent_number", nativeQuery = true)
    public CarRented getCarRentedByCode(@Param("rentNumber2") String rentNumber2);

    @Query(value = "select canceled from cars_rented where car_id = :carId", nativeQuery = true)
    public Boolean getCanceledStatusById(@Param("carId") Integer carId);

    @Query(value = "select returned from cars_rented where car_id = :carId", nativeQuery = true)
    public Boolean getReturnedStatusById(@Param("carId") Integer carId);

    @Query(
            value = "select u.name from cars_rented cr left join users u on cr.user_id = u.user_id where rent_number = :code ;",
            nativeQuery = true)
    public String getNameByCode (@Param("code") String code);

    @Query(value="select date_from from cars_rented where rent_number = :code ;", nativeQuery = true)
    public Date getDateFromByCode (@Param("code") String code);

    @Query(value="select date_to from cars_rented where rent_number = :code ;", nativeQuery = true)
    public Date getDateToByCode (@Param("code") String code);
}
