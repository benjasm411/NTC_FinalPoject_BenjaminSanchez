package mx.tc.final_project.BackendFinalProject.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name = "cars")
public class Car {

    @Getter @Setter @Column(name = "car_id") @Id
    private Integer carID;
    @Getter @Setter @Column(name = "car_type")
    private String carType;
    @Getter @Setter @Column(name = "plate")
    private String plate;
    @Getter @Setter @Column(name = "brand")
    private String brand;
    @Getter @Setter @Column(name = "seats")
    private Integer seats;
    @Getter @Setter @Column(name = "color")
    private String color;
    @Getter @Setter @Column(name = "electric")
    private Boolean electric;
    @Getter @Setter @Column(name = "manual")
    private Boolean manual;
    @Getter @Setter @Column(name = "available")
    private Boolean available;
    @Getter @Setter @Column(name = "price")
    private Float price;


}
