package mx.tc.final_project.BackendFinalProject.controllers;

import mx.tc.final_project.BackendFinalProject.models.Car;
import mx.tc.final_project.BackendFinalProject.service.CarRentedService;
import mx.tc.final_project.BackendFinalProject.service.CarService;
import net.bytebuddy.implementation.attribute.MethodAttributeAppender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.Order;
import org.springframework.data.repository.query.Param;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
public class CarController {

    @Autowired
    private CarService carService;

    List<Car> returnedList = new ArrayList<>();

    @GetMapping(value = "cars")
    public List<Car> getCar(){
        return carService.carListed();
    }

    @GetMapping(value = "cars_available")
    public List<Car> getCarsAvailable(@RequestBody Map<String,LocalDate> dates){
        LocalDate dateFrom = dates.get("rentedFrom");
        LocalDate dateTo = dates.get("rentedTo");

        List<Car> carsAvailable = carService.findAvailableCars();
        carsAvailable.stream().forEach(car -> returnedList.add(car));
        List<Integer> carsRentedAvailable = carService.findCarsAvailableRentedID(dateFrom, dateTo);
        carsRentedAvailable.stream().forEach(carID->returnedList.add(carService.findCarByID(carID)));
        return returnedList;
    }

    public void filteringCarsByType(String findByType){
        if (findByType != null){
            returnedList = returnedList.stream()
                    .filter(car -> car.getCarType().equals(findByType))
                    .collect(Collectors.toList());
        }
    }

    public void filteringCarsByBrand(String findByBrand){
        if (findByBrand != null){
            returnedList = returnedList.stream()
                    .filter(car -> car.getBrand().equals(findByBrand))
                    .collect(Collectors.toList());
        }
    }

    public void filteringCarsByColor(String findByColor){
        if (findByColor != null){
            returnedList = returnedList.stream()
                    .filter(car -> car.getColor().equals(findByColor))
                    .collect(Collectors.toList());
        }
    }

    public void filteringCarsByManual(Boolean manual){
        if (manual != null){
            returnedList = returnedList.stream()
                    .filter(car -> car.getManual().equals(manual))
                    .collect(Collectors.toList());
        }
    }

    public void filteringCarsByElectric(Boolean electric){
        if (electric != null){
            returnedList = returnedList.stream()
                    .filter(car -> car.getElectric().equals(electric))
                    .collect(Collectors.toList());
        }
    }

    public void filteringCarsBySeats(Integer seats){
        if (seats != null){
            returnedList = returnedList.stream()
                    .filter(car -> car.getSeats().equals(seats))
                    .collect(Collectors.toList());
        }
    }

    @GetMapping(value = "cars_filter")
    public List<Car> filter(@RequestBody Map<String, Object> requirements){
        String findByType = (String) requirements.get("findByType");
        String findByBrand = (String) requirements.get("findByBrand");
        String findByColor = (String) requirements.get("findByColor");
        Boolean manual = (Boolean) requirements.get("manual");
        Boolean electric = (Boolean) requirements.get("electric");
        Integer seats = (Integer) requirements.get("seats");

        LocalDate dateFrom = LocalDate.parse((String)requirements.get("rentedFrom"));
        LocalDate dateTo = LocalDate.parse((String)requirements.get("rentedTo"));
        Map<String, LocalDate> datesMap = new HashMap<>();
        datesMap.put("rentedFrom", dateFrom);
        datesMap.put("rentedTo", dateTo);
        getCarsAvailable(datesMap);

        filteringCarsByType(findByType);
        filteringCarsByBrand(findByBrand);
        filteringCarsByColor(findByColor);
        filteringCarsByManual(manual);
        filteringCarsByElectric(electric);
        filteringCarsBySeats(seats);

        return returnedList;
    }

    @GetMapping(value = "cars_sorted")
    public List<Car> getCarsSorted(@RequestBody Map<String, String> sorted){
        String attribute = sorted.get("attribute");
        String sortedBy = sorted.get("sorted");

        if (attribute.equals("price") && sortedBy.equals("highToLow")){
            returnedList = returnedList.stream()
                    .sorted(Comparator.comparingDouble(Car::getPrice).reversed())
                    .collect(Collectors.toList());
        } else if (attribute.equals("price") && sortedBy.equals("lowToHigh")){
            returnedList = returnedList.stream()
                    .sorted(Comparator.comparingDouble(Car::getPrice))
                    .collect(Collectors.toList());
        } else if (attribute.equals("seats") && sortedBy.equals("highToLow")){
            returnedList = returnedList.stream()
                    .sorted(Comparator.comparingInt(Car::getSeats).reversed())
                    .collect(Collectors.toList());
        } else if (attribute.equals("seats") && sortedBy.equals("lowToHigh")){
            returnedList = returnedList.stream()
                    .sorted(Comparator.comparingInt(Car::getSeats))
                    .collect(Collectors.toList());
        }
        return returnedList;
    }

}
