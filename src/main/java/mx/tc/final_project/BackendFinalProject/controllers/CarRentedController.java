package mx.tc.final_project.BackendFinalProject.controllers;

import mx.tc.final_project.BackendFinalProject.models.Car;
import mx.tc.final_project.BackendFinalProject.models.CarRented;
import mx.tc.final_project.BackendFinalProject.models.User;
import mx.tc.final_project.BackendFinalProject.service.CarRentedService;
import mx.tc.final_project.BackendFinalProject.service.CarService;
import mx.tc.final_project.BackendFinalProject.service.UserService;
import org.hibernate.type.StringNVarcharType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/rents")
@CrossOrigin
public class CarRentedController {

    @Autowired
    private CarRentedService carRentedService;
    @Autowired
    private CarService carService;
    @Autowired
    private UserService userService;

    private static final char CHARACTERS[] = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                                              'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z', 'A',
                                              'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
                                              'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1',
                                              '2', '3', '4', '5', '6', '7', '8', '9', '0'};

    public String codeGenerator(){
        String code = "";
        List<String> codes = carRentedService.findRentCodes();
        for (int i=0; i<10; i++){
            int index = (int)(Math.random()*60);
            code = code+CHARACTERS[index];
        }
        for (String innerCode:codes) {
            if (code.equals(innerCode)){
                codeGenerator();
            }
        }
        return code;
    }

    @PutMapping(value = "setting_a_car_not_available")
    public void setFalseState(Integer id){
        Car newCar = carService.findCarByID(id);
        newCar.setAvailable(false);
        carService.save(newCar);
    }

    @PutMapping(value = "setting_a_car_available")
    public void setTrueState(Integer id){
        Car newCar = carService.findCarByID(id);
        newCar.setAvailable(true);
        carService.save(newCar);
    }

    @PostMapping(value = "rent_car")
    public String setARent(@RequestBody Map<String, Object> data){

        LocalDate dateFrom = LocalDate.parse((CharSequence) data.get("rentedFrom"));
        LocalDate dateTo = LocalDate.parse((CharSequence) data.get("rentedTo"));
        String carsPlate = (String) data.get("carsPlate");
        String userName = (String) data.get("userName");

        String rentCode = codeGenerator();
        Integer carID = carService.findCarIdByPlate(carsPlate);
        Integer userID = userService.findUserIdByUserName(userName);

        setFalseState(carID);

        CarRented carRented = new CarRented();

        carRented.setRentNumber(rentCode);
        carRented.setUserID(userID);
        carRented.setCarID(carID);
        carRented.setDateFrom(dateFrom);
        carRented.setDateTo(dateTo);
        carRented.setReturned(false);
        carRented.setCanceled(false);

        carRentedService.save(carRented);
        return rentCode;
    }

    @PutMapping(value = "verify")
    public Car verifyReservation(@RequestBody Map<String, String> rentNumber){
        Integer id = carRentedService.getCarRentIDByCode(rentNumber.get("rentNumber"));
        return carService.findCarByID(id);
    }

    @PutMapping(value = "verifyState")
    public String verifyCarState(@RequestBody Map<String, Integer> carId){
        Boolean canceled = carRentedService.findCanceledStatusById(carId.get("carID"));
        Boolean returned = carRentedService.findReturnedStatusById(carId.get("carID"));
        if (canceled && !returned){
            return "canceled";
        }else if (returned && !canceled) {
            return "returned";
        }
        return null;
    }

    @PutMapping(value = "return_car")
    public void returnCar(@RequestBody Map<String, String> rentNumber){
        Integer id = carRentedService.getCarRentIDByCode(rentNumber.get("rentNumber"));
        setTrueState(id);
        CarRented carReturned = carRentedService.findCarRentedByCode(rentNumber.get("rentNumber"));
        carReturned.setReturned(true);
        carRentedService.save(carReturned);
    }

    @PutMapping(value = "cancel_reservation")
    public void cancelReservation (@RequestBody Map<String, String> rentNumber){
        Integer id = carRentedService.getCarRentIDByCode(rentNumber.get("rentNumber"));
        setTrueState(id);
        //System.out.println(id);
        CarRented car = carRentedService.findCarRentedByCode(rentNumber.get("rentNumber"));
        car.setCanceled(true);
        carRentedService.save(car);
    }

    @PutMapping(value = "find_user_data")
    public ArrayList getUsersDataByCode(@RequestBody Map<String, String> code){
        ArrayList list = new ArrayList<>();
        String rentalCode = code.get("code");

        String name = carRentedService.findNameByCode(rentalCode);
        Date from = carRentedService.findDateFromByCode(rentalCode);
        Date to = carRentedService.findDateToByCode(rentalCode);

        list.add(name);
        list.add(from);
        list.add(to);

        return list;
    }

}
