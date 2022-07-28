package mx.tc.final_project.BackendFinalProject.dao;

import mx.tc.final_project.BackendFinalProject.models.User;

import java.util.List;

public interface UserDao {
    List<User> getUsers();
}
