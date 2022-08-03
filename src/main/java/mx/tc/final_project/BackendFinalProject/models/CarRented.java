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
    @Getter @Setter @Column(name = "rent_id", nullable = false)
    private Integer rentID;
    @Getter @Setter @Column(name = "rent_number", nullable = false)
    private String rentNumber;
    @Getter @Setter @Column(name = "user_id", nullable = false)
    private Integer userID;
    @Getter @Setter @Column(name = "car_id", nullable = false)
    private Integer carID;
    @Getter @Setter @Column(name = "date_from", nullable = false)
    private LocalDate dateFrom;
    @Getter @Setter @Column(name = "date_to", nullable = false)
    private LocalDate dateTo;
    @Getter @Setter @Column(name = "returned", nullable = false)
    private Boolean returned;
    @Getter @Setter @Column(name = "canceled", nullable = false)
    private Boolean canceled;
}
