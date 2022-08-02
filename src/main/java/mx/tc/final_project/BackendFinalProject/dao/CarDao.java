package mx.tc.final_project.BackendFinalProject.dao;

import mx.tc.final_project.BackendFinalProject.models.Car;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface CarDao extends CrudRepository<Car, Integer> {

    @Query(value = "select * from cars where available = true;", nativeQuery = true)
    public List<Car> getAvailableCars();

    @Query(
            value = "select c.car_id from cars c right join cars_rented cr on c.car_id = cr.car_id " +
                    "where (:rentFrom>date_from and :rentTo> date_from and :rentFrom>date_to and :rentTo> date_to)" +
                    "or (:rentFrom<date_from and :rentTo< date_from and :rentFrom<date_to and :rentTo< date_to);",
            nativeQuery = true)
    public List<Integer> getCarsAvailableRentedID(@Param("rentFrom") LocalDate rentFrom, @Param("rentTo") LocalDate rentTo);

    @Query(value = "select * from cars where car_id = :id", nativeQuery = true)
    public Car getCarByID(@Param("id") Integer id);

    @Query(value = "select c.car_id from cars c where :plate = c.plate;", nativeQuery = true)
    public Integer getCarIdByPlate(@Param("plate") String plate);

}
