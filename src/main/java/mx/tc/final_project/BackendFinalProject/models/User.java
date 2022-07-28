package mx.tc.final_project.BackendFinalProject.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name = "users")
public class User {
    @Getter @Setter @Column(name = "user_id") @Id
    private int userID;
    @Getter @Setter @Column(name = "user_name")
    private String userName;
    @Getter @Setter @Column(name = "name")
    private String name;

}
