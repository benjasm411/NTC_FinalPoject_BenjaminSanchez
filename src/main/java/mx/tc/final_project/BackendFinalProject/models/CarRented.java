package mx.tc.final_project.BackendFinalProject.models;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Service;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table (name = "cars_rented", uniqueConstraints = {@UniqueConstraint(columnNames = {"rent_number"})})
public class CarRented {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter @Column(name = "rent_id")
    private Integer rentID;
    @Getter @Setter @Column(name = "rent_number")
    private String rentNumber;
    @Getter @Setter @Column(name = "user_id")
    private Integer userID;
    @Getter @Setter @Column(name = "car_id")
    private Integer carID;
    @Getter @Setter @Column(name = "date_from")
    private LocalDate dateFrom;
    @Getter @Setter @Column(name = "date_to")
    private LocalDate dateTo;
    @Getter @Setter @Column(name = "returned")
    private Boolean returned;
}
