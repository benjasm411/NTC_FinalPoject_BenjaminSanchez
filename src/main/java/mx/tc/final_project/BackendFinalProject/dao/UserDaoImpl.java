package mx.tc.final_project.BackendFinalProject.dao;

import mx.tc.final_project.BackendFinalProject.models.User;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class UserDaoImpl implements UserDao{

    @PersistenceContext
    EntityManager entity;

    @Override
    public List<User> getUsers() {
        String query = "FROM User";
        return entity.createQuery(query).getResultList();
    }
}
