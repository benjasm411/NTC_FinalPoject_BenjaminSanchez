package mx.tc.final_project.BackendFinalProject.service;

import mx.tc.final_project.BackendFinalProject.models.Car;
import mx.tc.final_project.BackendFinalProject.models.User;

import java.util.List;

public interface UserService {

    public List<User> userListed();
    public void save(User user);
    public void delete(User user);
    public User findUser(User user);
    public Integer findUserIdByUserName(String userName);

}
