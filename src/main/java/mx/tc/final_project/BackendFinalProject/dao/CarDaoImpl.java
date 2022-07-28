package mx.tc.final_project.BackendFinalProject.dao;

import mx.tc.final_project.BackendFinalProject.models.Car;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class CarDaoImpl implements CarDao {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Car> getCars() {
        String query = "FROM Car"; // <-- Class name in the query, NOT TABLE NAME
        return entityManager.createQuery(query).getResultList();
    }
}
