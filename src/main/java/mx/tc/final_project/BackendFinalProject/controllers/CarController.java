package mx.tc.final_project.BackendFinalProject.controllers;

import mx.tc.final_project.BackendFinalProject.models.Car;
import mx.tc.final_project.BackendFinalProject.service.CarRentedService;
import mx.tc.final_project.BackendFinalProject.service.CarService;
import net.bytebuddy.implementation.attribute.MethodAttributeAppender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.Order;
import org.springframework.data.repository.query.Param;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.criteria.CriteriaBuilder;
import java.nio.file.LinkOption;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
@RequestMapping("/cars")
@CrossOrigin
public class CarController {

    @Autowired
    private CarService carService;

    @GetMapping(value = "cars")
    public List<Car> getCar(){
        return carService.carListed();
    }

    @PutMapping(value = "cars_available")
    public List<Car> getCarsAvailable(@RequestBody Map<String,LocalDate> dates){
        LocalDate dateFrom = dates.get("rentedFrom");
        LocalDate dateTo = dates.get("rentedTo");

        return carService.findCarsAvailableRentedID(dateFrom, dateTo);
    }

    @PersistenceContext
    private EntityManager entityManager;
    @PutMapping(value = "cars_filter")
    public List<Car> filter(@RequestBody Map<String, Object> requirements){

        LocalDate dateFrom = LocalDate.parse((String)requirements.get("rentedFrom"));
        LocalDate dateTo = LocalDate.parse((String)requirements.get("rentedTo"));
        String findByType = (String) requirements.get("findByType");
        String findByBrand = (String) requirements.get("findByBrand");
        String findByColor = (String) requirements.get("findByColor");
        Boolean manual = (Boolean) requirements.get("manual");
        Boolean electric = (Boolean) requirements.get("electric");
        Integer seats = (Integer) requirements.get("seats");
        Boolean order = (Boolean) requirements.get("order");

        String query = "select * from cars c where (c.available = true ";

        if (findByType != null) {
            query = query.concat("and car_type = \"" + findByType + "\" ");
        }
        if (findByBrand != null) {
            query = query.concat("and c.brand = \"" + findByBrand + "\" ");
        }
        if (findByColor != null) {
            query = query.concat("and c.color = \"" + findByColor + "\" ");
        }
        if (manual != null){
            query = query.concat("and c.manual = " + manual + " ");
        }
        if (electric != null){
            query = query.concat("and c.electric = " + electric + " ");
        }
        if (seats != null){
            query = query.concat("and c.seats = " + seats + " ");
        }

        query = query.concat("or (car_id in (select car_id from cars_rented " +
                "where ((\""+ dateFrom +"\">date_from and \""+ dateTo +"\"> date_from and \""+ dateFrom +"\">date_to and \"" + dateTo + "\"> date_to)" +
                "or (\""+ dateFrom +"\"<date_from and \""+ dateTo +"\"< date_from and \""+ dateFrom +"\"<date_to and \""+ dateTo +"\"< date_to))))) " );

        if (order != null){
            if (order){
                query = query.concat(" order by c.price desc");
            } else {
                query = query.concat(" order by c.price");
            }
        }
        query =query.concat(";");

        //System.out.println("\n\n\n\n\n"+query+"\n\n\n\n\n");

        Query query1 = entityManager.createNativeQuery(query);

        return query1.getResultList();


        //return carService.findCarsFiltered(query);
    }
}
