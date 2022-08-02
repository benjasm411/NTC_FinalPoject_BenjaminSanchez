package mx.tc.final_project.BackendFinalProject.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table (name = "cars", uniqueConstraints = {@UniqueConstraint(columnNames = {"plate"})})
public class Car implements Serializable {

    public static final Long serialVersionUID = 1L;

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter @Column(name = "car_id")
    private Integer carID;
    @Getter @Setter @Column(name = "car_type", nullable = false)
    private String carType;
    @Getter @Setter @Column(name = "plate", nullable = false)
    private String plate;
    @Getter @Setter @Column(name = "brand", nullable = false)
    private String brand;
    @Getter @Setter @Column(name = "seats", nullable = false)
    private Integer seats;
    @Getter @Setter @Column(name = "color", nullable = false)
    private String color;
    @Getter @Setter @Column(name = "electric", nullable = false)
    private Boolean electric;
    @Getter @Setter @Column(name = "manual", nullable = false)
    private Boolean manual;
    @Getter @Setter @Column(name = "available", nullable = false)
    private Boolean available;
    @Getter @Setter @Column(name = "price", nullable = false)
    private Float price;


}
