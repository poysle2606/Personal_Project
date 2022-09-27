package com.example.back_end.enity;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Facility {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(columnDefinition = "VARCHAR(50)")
    private String name;

    @Column(columnDefinition = "DATE")
    private LocalDate startDate;

    @Column(columnDefinition = "VARCHAR(50)")
    private String address;
    
    @OneToOne(mappedBy = "facility")
    private Employee employee;
}
