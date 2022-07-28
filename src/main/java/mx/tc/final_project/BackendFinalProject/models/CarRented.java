package mx.tc.final_project.BackendFinalProject.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDate;

@Entity
@Table (name = "cars_rented")
public class CarRented {
    @Getter @Setter @Column(name = "rent_id") @Id
    private int rentID;
    @Getter @Setter @Column(name = "rent_number")
    private String rentNumber;
    @Getter @Setter @Column(name = "user_id")
    private int userID;
    @Getter @Setter @Column(name = "car_id")
    private int carID;
    @Getter @Setter @Column(name = "date_from")
    private LocalDate dateFrom;
    @Getter @Setter @Column(name = "date_to")
    private LocalDate dateTo;
}
