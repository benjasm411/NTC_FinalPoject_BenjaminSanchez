package mx.tc.final_project.BackendFinalProject.controllers;

import mx.tc.final_project.BackendFinalProject.dao.UserDao;
import mx.tc.final_project.BackendFinalProject.models.User;
import mx.tc.final_project.BackendFinalProject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("users")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @PutMapping("existed_user")
    public boolean userTaken(@RequestBody Map<String, String> userName1){
        String userName = userName1.get("userName");
        User user = userService.findExistedUserByUserName(userName);
        System.out.println("\n\n"+userName+"\n\n");
        //System.out.println("\n\n"+user+"\n\n");
        if (user == null){
            // True means continue
            return true;
        }
        // False means the process is denied
        return false;
    }

    @PostMapping(value="new_user")
    public void newUser(@RequestBody User user){
            userService.save(user);
    }
}
