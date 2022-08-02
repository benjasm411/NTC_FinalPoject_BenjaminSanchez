package mx.tc.final_project.BackendFinalProject.controllers;

import mx.tc.final_project.BackendFinalProject.dao.UserDao;
import mx.tc.final_project.BackendFinalProject.models.User;
import mx.tc.final_project.BackendFinalProject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    List<String> usersName = new ArrayList<>();

    @GetMapping("existed_user")
    public String userTaken(){
        return "Your user is already taken, choose other";
    }

    @PostMapping(value="new_user")
    public void newUser(@RequestBody User user){
        boolean state = false;
        for (String name:
             usersName) {
            if (user.getUserName().equals(name)){
                state = true;
                break;
            }
        }
        if (state){
            userTaken();
        } else {
            userService.save(user);
        }
    }
}
