package mx.tc.final_project.BackendFinalProject.dao;

import mx.tc.final_project.BackendFinalProject.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface UserDao extends CrudRepository<User, Integer> {

    @Query(value = "select u.user_id from users u where user_name = :userName", nativeQuery = true)
    public Integer getUserIdByUserName(@Param("userName") String  userName);

}
