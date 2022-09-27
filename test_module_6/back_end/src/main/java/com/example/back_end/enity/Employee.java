package com.example.back_end.enity;

import org.hibernate.type.BigIntegerType;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(columnDefinition = "VARCHAR(50)")
    private String code;

    @Column(columnDefinition = "VARCHAR(50)")
    private String name;

    @Column(columnDefinition = "DATE")
    private LocalDate birthDay;

    @Column(columnDefinition = "BIT(1) DEFAULT 0")
    private Integer gender;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_facility", referencedColumnName = "id")
    private Facility facility;
}
