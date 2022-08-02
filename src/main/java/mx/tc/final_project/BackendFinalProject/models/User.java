package mx.tc.final_project.BackendFinalProject.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table (name = "users", uniqueConstraints = {@UniqueConstraint(columnNames = "user_id")})
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter @Column(name = "user_id", nullable = false)
    private Integer userID;
    @Getter @Setter @Column(name = "user_name", nullable = false)
    private String userName;
    @Getter @Setter @Column(name = "name", nullable = false)
    private String name;

}
