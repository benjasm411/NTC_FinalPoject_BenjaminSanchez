package mx.tc.final_project.BackendFinalProject.dao;

import mx.tc.final_project.BackendFinalProject.models.CarRented;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class CarRentedDaoImpl implements CarRentedDao {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<CarRented> getCarsRented() {
        String query = "FROM CarRented";
        return entityManager.createQuery(query).getResultList();
    }
}
